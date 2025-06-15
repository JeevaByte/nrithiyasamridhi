
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE user_level AS ENUM ('beginner', 'intermediate', 'advanced');
CREATE TYPE video_category AS ENUM ('adavu', 'varnam', 'padam', 'tillana', 'javali', 'shloka', 'tutorial', 'performance');
CREATE TYPE event_type AS ENUM ('workshop', 'performance', 'festival', 'masterclass', 'competition');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  country TEXT,
  university TEXT,
  level user_level DEFAULT 'beginner',
  is_teacher BOOLEAN DEFAULT false,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create videos table
CREATE TABLE public.videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category video_category NOT NULL,
  uploader_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  video_url TEXT,
  thumbnail_url TEXT,
  duration INTEGER, -- in seconds
  views INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  event_type event_type NOT NULL,
  location TEXT,
  is_virtual BOOLEAN DEFAULT false,
  event_date TIMESTAMP WITH TIME ZONE,
  registration_url TEXT,
  organizer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  max_participants INTEGER,
  current_participants INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create notes table for AI assistant conversations
CREATE TABLE public.notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create glossary table
CREATE TABLE public.glossary (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  term TEXT NOT NULL UNIQUE,
  definition TEXT NOT NULL,
  pronunciation TEXT,
  category TEXT,
  language TEXT DEFAULT 'english',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user connections table (for student circles)
CREATE TABLE public.user_connections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  connected_user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  connection_type TEXT DEFAULT 'student_circle',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, connected_user_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.glossary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_connections ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Videos policies
CREATE POLICY "Anyone can view videos" ON public.videos FOR SELECT USING (true);
CREATE POLICY "Users can insert own videos" ON public.videos FOR INSERT WITH CHECK (auth.uid() = uploader_id);
CREATE POLICY "Users can update own videos" ON public.videos FOR UPDATE USING (auth.uid() = uploader_id);
CREATE POLICY "Users can delete own videos" ON public.videos FOR DELETE USING (auth.uid() = uploader_id);

-- Events policies
CREATE POLICY "Anyone can view events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Users can insert events" ON public.events FOR INSERT WITH CHECK (auth.uid() = organizer_id);
CREATE POLICY "Users can update own events" ON public.events FOR UPDATE USING (auth.uid() = organizer_id);
CREATE POLICY "Users can delete own events" ON public.events FOR DELETE USING (auth.uid() = organizer_id);

-- Notes policies
CREATE POLICY "Users can view own notes" ON public.notes FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own notes" ON public.notes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own notes" ON public.notes FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own notes" ON public.notes FOR DELETE USING (auth.uid() = user_id);

-- Glossary policies (public read, authenticated write)
CREATE POLICY "Anyone can view glossary" ON public.glossary FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert glossary" ON public.glossary FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update glossary" ON public.glossary FOR UPDATE TO authenticated USING (true);

-- User connections policies
CREATE POLICY "Users can view own connections" ON public.user_connections FOR SELECT USING (auth.uid() = user_id OR auth.uid() = connected_user_id);
CREATE POLICY "Users can create own connections" ON public.user_connections FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own connections" ON public.user_connections FOR DELETE USING (auth.uid() = user_id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample glossary terms
INSERT INTO public.glossary (term, definition, pronunciation, category) VALUES
('Adavu', 'Basic dance steps in Bharatanatyam that form the foundation of all movements', 'ah-dah-voo', 'technique'),
('Mudra', 'Hand gestures that convey meaning and emotion in classical dance', 'moo-drah', 'technique'),
('Abhinaya', 'The expressive aspect of dance that conveys emotions and stories', 'ah-bee-nah-yah', 'expression'),
('Tala', 'Rhythmic pattern or time measure in Indian classical music and dance', 'tah-lah', 'rhythm'),
('Varnam', 'A classical composition that showcases both nritta and nritya elements', 'var-nam', 'composition'),
('Margam', 'The traditional repertoire sequence of Bharatanatyam performance', 'mar-gam', 'performance'),
('Jathi', 'Rhythmic syllables used in Bharatanatyam to accompany dance movements', 'jah-thee', 'rhythm'),
('Nattuvanar', 'The conductor or teacher who provides vocal support and rhythm during dance', 'nat-too-vah-nar', 'roles');
