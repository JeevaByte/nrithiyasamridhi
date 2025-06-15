import { Button } from '@/components/ui/button';
import { Calendar, Globe, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-20 pb-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Connect with the
                  <span className="text-gradient block">Divine Art of Bharatanatyam</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Join thousands of international students in learning, practicing, and celebrating 
                  the classical dance form that tells stories of devotion, mythology, and eternal beauty.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-bharata-crimson hover:bg-bharata-deepRed text-white px-8 py-3"
                  onClick={() => navigate('/learn')}
                >
                  <Video className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-bharata-gold text-bharata-crimson hover:bg-bharata-gold/10 px-8 py-3"
                  onClick={() => navigate('/community')}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Community
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-bharata-crimson">500+</div>
                  <div className="text-sm text-muted-foreground">Global Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bharata-crimson">25+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bharata-crimson">100+</div>
                  <div className="text-sm text-muted-foreground">Tutorials</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-bharata-gold/20 to-bharata-crimson/20 rounded-2xl p-8 animate-dance-flow">
                <div className="bg-white rounded-xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-bharata-gold rounded-full flex items-center justify-center">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Live Tutorial</h3>
                        <p className="text-sm text-muted-foreground">Margam Practice Session</p>
                      </div>
                    </div>
                    <div className="bg-bharata-cream/50 rounded-lg p-4">
                      <p className="text-sm italic text-bharata-crimson">
                        "Today we explore the Vishnu Varnam, expressing devotion through precise adavus and graceful abhinaya..."
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">45 students online</span>
                      <Button size="sm" className="bg-bharata-crimson hover:bg-bharata-deepRed">
                        Join Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-gentle-sway">
                <Calendar className="w-6 h-6 text-bharata-gold" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-bharata-crimson rounded-lg p-3 shadow-lg text-white animate-dance-flow">
                <Globe className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
