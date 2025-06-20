
import { Button } from '@/components/ui/button';
import { Calendar, Globe, Video, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-bharata-cream via-white to-bharata-gold/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-bharata-gold/20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-bharata-crimson fill-bharata-crimson" />
                <span className="text-sm font-medium text-bharata-crimson">UNESCO Affiliated • 500+ Global Students</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Master the Divine Art of
                  <span className="text-gradient block mt-2">Bharatanatyam</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Join our global community of passionate dancers. Learn classical Bharatanatyam from expert instructors through personalized online classes designed for international students.
                </p>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-bharata-crimson hover:bg-bharata-deepRed text-white px-8 py-4 text-lg font-semibold shadow-xl"
                  onClick={() => navigate('/learn')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Guidance Session
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-bharata-crimson text-bharata-crimson hover:bg-bharata-crimson hover:text-white px-8 py-4 text-lg"
                  onClick={() => navigate('/learn')}
                >
                  <Video className="w-5 h-5 mr-2" />
                  Take Learning Quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Social Proof Numbers */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-bharata-gold/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bharata-crimson">500+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bharata-crimson">25+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bharata-crimson">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Preview */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Main Video Preview Card */}
                <div className="relative bg-gradient-to-br from-bharata-gold/20 to-bharata-crimson/10 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl p-6 shadow-2xl">
                    <div className="space-y-6">
                      {/* Video Header */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-bharata-crimson rounded-full flex items-center justify-center">
                          <Video className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Live Class Preview</h3>
                          <p className="text-sm text-muted-foreground">Margam Fundamentals</p>
                        </div>
                      </div>

                      {/* Simulated Video Content */}
                      <div className="bg-gradient-to-br from-bharata-cream to-bharata-gold/30 rounded-xl p-8 text-center">
                        <div className="space-y-4">
                          <div className="w-20 h-20 bg-bharata-gold rounded-full flex items-center justify-center mx-auto">
                            <span className="text-2xl">🕉</span>
                          </div>
                          <p className="text-bharata-crimson italic font-medium">
                            "Today we explore the Alarippu, building strength and grace through precise movements..."
                          </p>
                        </div>
                      </div>

                      {/* Class Stats */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-muted-foreground">32 students online</span>
                        </div>
                        <Button size="sm" className="bg-bharata-crimson hover:bg-bharata-deepRed">
                          Join Class
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-gentle-float">
                  <Calendar className="w-6 h-6 text-bharata-gold" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-bharata-gold rounded-xl p-4 shadow-lg text-white animate-gentle-float" style={{animationDelay: '1s'}}>
                  <Globe className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
