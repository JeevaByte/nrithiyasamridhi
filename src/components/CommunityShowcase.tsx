
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Video, Calendar } from 'lucide-react';

const CommunityShowcase = () => {
  const performances = [
    {
      title: 'Vishnu Varnam - Raag Kalyani',
      performer: 'Priya Sharma',
      location: 'University of Toronto, Canada',
      level: 'Advanced',
      views: '2.3k',
      description: 'A beautiful interpretation of the classic Vishnu Varnam, showcasing precise adavus and expressive abhinaya.',
      thumbnail: 'performance-1'
    },
    {
      title: 'Shiva Tandavam',
      performer: 'Ananya Krishnan',
      location: 'London School of Economics, UK',
      level: 'Intermediate',
      views: '1.8k',
      description: 'Powerful portrayal of Lord Shiva\'s cosmic dance, blending traditional technique with contemporary expression.',
      thumbnail: 'performance-2'
    },
    {
      title: 'Margam Practice Session',
      performer: 'Global Students Collective',
      location: 'Virtual Collaboration',
      level: 'All Levels',
      views: '3.1k',
      description: 'International students practicing together, sharing techniques and cultural insights.',
      thumbnail: 'performance-3'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Navarathri Celebration',
      date: 'Oct 15-24, 2024',
      location: 'Virtual + Local Centers',
      type: 'Festival'
    },
    {
      title: 'Margam Masterclass',
      date: 'Nov 5, 2024',
      location: 'Online Workshop',
      type: 'Workshop'
    },
    {
      title: 'Global Performance Challenge',
      date: 'Dec 1-15, 2024',
      location: 'Submit Online',
      type: 'Competition'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the beauty of Bharatanatyam through performances, stories, and celebrations 
              shared by our global community of students and practitioners.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Featured Performances</h3>
                <Button variant="outline" className="border-bharata-gold text-bharata-crimson hover:bg-bharata-gold/10">
                  <Video className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>

              <div className="space-y-6">
                {performances.map((performance, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-32 h-24 bg-gradient-to-br from-bharata-gold/20 to-bharata-crimson/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Video className="w-8 h-8 text-bharata-crimson" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-lg">{performance.title}</h4>
                              <p className="text-muted-foreground">by {performance.performer}</p>
                            </div>
                            <Badge variant="secondary">{performance.level}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{performance.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Globe className="w-4 h-4 mr-1" />
                                {performance.location}
                              </span>
                              <span>{performance.views} views</span>
                            </div>
                            <Button size="sm" className="bg-bharata-crimson hover:bg-bharata-deepRed">
                              Watch
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-bharata-gold" />
                    <span>Upcoming Events</span>
                  </CardTitle>
                  <CardDescription>Join global celebrations and workshops</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-2 border-bharata-gold pl-4 space-y-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Share Your Art</CardTitle>
                  <CardDescription>Upload your performance or practice session</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-bharata-crimson hover:bg-bharata-deepRed">
                    <Video className="w-4 h-4 mr-2" />
                    Upload Performance
                  </Button>
                  <Button variant="outline" className="w-full border-bharata-gold text-bharata-crimson hover:bg-bharata-gold/10">
                    Share Your Story
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Active Students</span>
                    <span className="font-semibold text-bharata-crimson">524</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Countries</span>
                    <span className="font-semibold text-bharata-crimson">25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foregreen">Performances Shared</span>
                    <span className="font-semibold text-bharata-crimson">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Events This Month</span>
                    <span className="font-semibold text-bharata-crimson">8</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
