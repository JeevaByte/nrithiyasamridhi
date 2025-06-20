
import { Button } from '@/components/ui/button';
import { Calendar, Video, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-bharata-crimson to-bharata-deepRed text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Start Your Bharatanatyam Journey Today
            </h2>
            <p className="text-xl text-bharata-cream/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Take our personalized quiz to discover your perfect learning path, then book a free guidance session with our expert instructors.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-bharata-gold hover:bg-bharata-gold/90 text-bharata-crimson font-semibold px-8 py-4 text-lg"
              onClick={() => navigate('/learn')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Guidance Session
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-bharata-cream text-bharata-cream hover:bg-bharata-cream hover:text-bharata-crimson px-8 py-4 text-lg"
              onClick={() => navigate('/learn')}
            >
              <Video className="w-5 h-5 mr-2" />
              Take Learning Quiz
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-bharata-gold/20 rounded-full flex items-center justify-center mx-auto">
                <Video className="w-8 h-8 text-bharata-gold" />
              </div>
              <h3 className="text-lg font-semibold">Flexible Online Classes</h3>
              <p className="text-bharata-cream/80 text-sm">
                Learn at your own pace with live sessions and recorded lessons available 24/7
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-bharata-gold/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-bharata-gold" />
              </div>
              <h3 className="text-lg font-semibold">Expert Instructors</h3>
              <p className="text-bharata-cream/80 text-sm">
                Learn from UNESCO-affiliated masters with decades of teaching experience
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-bharata-gold/20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-bharata-gold" />
              </div>
              <h3 className="text-lg font-semibold">Personalized Journey</h3>
              <p className="text-bharata-cream/80 text-sm">
                Customized learning paths based on your experience level and goals
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-bharata-cream/20">
            <p className="text-bharata-cream/70 text-sm mb-4">
              Join students from 25+ countries • UNESCO Affiliated Program • 98% Satisfaction Rate
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="text-xs text-bharata-cream/60">✓ Free Trial Session</div>
              <div className="text-xs text-bharata-cream/60">✓ No Credit Card Required</div>
              <div className="text-xs text-bharata-cream/60">✓ Cancel Anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
