
import { Button } from '@/components/ui/button';
import { Calendar, Globe, Video, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-20 temple-gradient overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-bharata-saffron animate-gentle-float"></div>
        <div className="absolute top-32 right-16 w-24 h-24 rounded-full bg-bharata-lotus animate-gentle-sway"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-bharata-peacock animate-dance-flow"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 rounded-full bg-bharata-emerald animate-divine-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-bharata-saffron/30 via-bharata-gold/40 to-bharata-lotus/30 px-6 py-3 rounded-full border-2 border-bharata-gold/50 sacred-shadow animate-sacred-pulse">
                <Star className="w-5 h-5 text-bharata-crimson fill-bharata-saffron animate-divine-glow" />
                <span className="text-sm font-semibold devotional-text">UNESCO Affiliated • 500+ Global Students</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Master the Divine Art of
                  <span className="devotional-text block mt-3 animate-gentle-sway">Bharatanatyam</span>
                </h1>
                <p className="text-xl md:text-2xl text-bharata-crimson/80 leading-relaxed max-w-2xl font-medium">
                  Join our global community of passionate dancers. Learn classical Bharatanatyam from expert instructors through personalized online classes designed for international students.
                </p>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="btn-primary px-10 py-6 text-lg font-bold animate-divine-glow"
                  onClick={() => navigate('/learn')}
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Free Guidance Session
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-secondary px-10 py-6 text-lg font-bold"
                  onClick={() => navigate('/learn')}
                >
                  <Video className="w-6 h-6 mr-3" />
                  Take Learning Quiz
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </div>

              {/* Social Proof Numbers */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t-4 divine-border">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold devotional-text animate-sacred-pulse">500+</div>
                  <div className="text-sm text-bharata-copper font-medium">Active Students</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold devotional-text animate-sacred-pulse" style={{animationDelay: '0.5s'}}>25+</div>
                  <div className="text-sm text-bharata-copper font-medium">Countries</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold devotional-text animate-sacred-pulse" style={{animationDelay: '1s'}}>98%</div>
                  <div className="text-sm text-bharata-copper font-medium">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Preview */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Main Video Preview Card */}
                <div className="relative sacred-gradient rounded-3xl p-8 sacred-shadow animate-gentle-float">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-bharata-gold/30">
                    <div className="space-y-6">
                      {/* Video Header */}
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 devotional-gradient rounded-full flex items-center justify-center animate-divine-glow">
                          <Video className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl devotional-text">Live Class Preview</h3>
                          <p className="text-sm text-bharata-copper font-medium">Margam Fundamentals</p>
                        </div>
                      </div>

                      {/* Simulated Video Content */}
                      <div className="temple-gradient rounded-xl p-10 text-center border-2 border-bharata-saffron/30">
                        <div className="space-y-4">
                          <div className="w-24 h-24 bg-gradient-to-br from-bharata-saffron to-bharata-lotus rounded-full flex items-center justify-center mx-auto animate-sacred-pulse shadow-lg">
                            <span className="text-3xl">🕉</span>
                          </div>
                          <p className="text-bharata-crimson italic font-semib0ld text-lg leading-relaxed">
                            "Today we explore the Alarippu, building strength and grace through precise movements..."
                          </p>
                        </div>
                      </div>

                      {/* Class Stats */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-bharata-emerald to-bharata-peacock rounded-full animate-divine-glow"></div>
                          <span className="text-bharata-copper font-medium">32 students online</span>
                        </div>
                        <Button size="sm" className="btn-devotional font-bold">
                          Join Class
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-bharata-saffron to-bharata-gold rounded-xl p-6 shadow-2xl animate-gentle-float border-2 border-white/50">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-bharata-peacock to-bharata-emerald rounded-xl p-6 shadow-2xl text-white animate-gentle-float border-2 border-white/50" style={{animationDelay: '1s'}}>
                  <Globe className="w-8 h-8" />
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
