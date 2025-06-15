
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Globe, Video, Calendar, Mic, Camera } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 'learn',
      icon: Book,
      title: 'Learn & Practice',
      description: 'Master adavus, mudras, and abhinaya with structured courses',
      items: [
        'Tutorial Library with expert demonstrations',
        'AI Nattuvanar for rhythm corrections',
        'Notation converter for jathis to mnemonics',
        'Progressive skill-building courses'
      ],
      color: 'bharata-crimson'
    },
    {
      id: 'perform',
      icon: Video,
      title: 'Perform & Showcase',
      description: 'Share your artistry with the global Bharatanatyam community',
      items: [
        'Performance gallery for solo and group pieces',
        'Behind-the-scenes content sharing',
        'Virtual performance challenges',
        'AI feedback on technique and expression'
      ],
      color: 'bharata-gold'
    },
    {
      id: 'connect',
      icon: Globe,
      title: 'Connect Globally',
      description: 'Find students, teachers, and cultural events worldwide',
      items: [
        'Student circles by country and university',
        'Find a Guru directory',
        'Collaborative project opportunities',
        'Cultural events calendar'
      ],
      color: 'bharata-copper'
    },
    {
      id: 'explore',
      icon: Calendar,
      title: 'Explore Culture',
      description: 'Dive deep into the rich heritage and mythology',
      items: [
        'Multilingual glossary with pronunciations',
        'Mythological stories and context',
        'Festival celebrations and traditions',
        'Stories of devotion from students'
      ],
      color: 'bharata-deepRed'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Journey in <span className="text-gradient">Bharatanatyam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're taking your first steps or perfecting your margam, 
            our platform supports every stage of your classical dance journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id} className="card-hover border-2 hover:border-bharata-gold/50">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {feature.items.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 bg-bharata-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-bharata-gold text-bharata-crimson hover:bg-bharata-gold/10"
                  >
                    Explore {feature.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
