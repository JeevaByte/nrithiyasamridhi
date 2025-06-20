
import { Button } from '@/components/ui/button';
import { Calendar, Video, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 devotional-gradient text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 left-12 w-36 h-36 rounded-full bg-white animate-gentle-float"></div>
        <div className="absolute top-24 right-20 w-28 h-28 rounded-full bg-bharata-ivory animate-gentle-sway"></div>
        <div className="absolute bottom-16 left-1/3 w-24 h-24 rounded-full bg-bharata-sandalwood animate-dance-flow"></div>
        <div className="absolute bottom-28 right-1/4 w-32 h-32 rounded-full bg-white animate-divine-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-gentle-sway">
              Start Your Bharatanatyam Journey Today
            </h2>
            <p className="text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
              Take our personalized quiz to discover your perfect learning path, then book a free guidance session with our expert instructors.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-white hover:bg-bharata-ivory text-bharata-crimson font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-2 border-bharata-saffron animate-divine-glow"
              onClick={() => navigate('/learn')}
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book Free Guidance Session
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-bharata-crimson px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/learn')}
            >
              <Video className="w-6 h-6 mr-3" />
              Take Learning Quiz
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-12 text-center mb-16">
            <div className="space-y-6 animate-gentle-float">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/30 animate-sacred-pulse">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Flexible Online Classes</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Learn at your own pace with live sessions and recorded lessons available 24/7
              </p>
            </div>
            
            <div className="space-y-6 animate-gentle-float" style={{animationDelay: '0.5s'}}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/30 animate-sacred-pulse" style={{animationDelay: '0.5s'}}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Expert Instructors</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Learn from UNESCO-affiliated masters with decades of teaching experience
              </p>
            </div>
            
            <div className="space-y-6 animate-gentle-float" style={{animationDelay: '1s'}}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto border-2 border-white/30 animate-sacred-pulse" style={{animationDelay: '1s'}}>
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Personalized Journey</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Customized learning paths based on your experience level and goals
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 border-t-2 border-white/20">
            <p className="text-white/80 text-lg mb-6 font-medium">
              Join students from 25+ countries • UNESCO Affiliated Program • 98% Satisfaction Rate
            </p>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="text-sm text-white/70 bg-white/10 px-4 py-2 rounded-full border border-white/20">✓ Free Trial Session</div>
              <div className="text-sm text-white/70 bg-white/10 px-4 py-2 rounded-full border border-white/20">✓ No Credit Card Required</div>
              <div className="text-sm text-white/70 bg-white/10 px-4 py-2 rounded-full border border-white/20">✓ Cancel Anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
