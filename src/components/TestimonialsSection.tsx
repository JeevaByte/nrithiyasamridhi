
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "London, UK",
      rating: 5,
      text: "The online Bharatanatyam classes are exceptional! I never thought I could learn such intricate movements through virtual sessions, but the instructors make it feel personal and engaging.",
      program: "Beginner to Intermediate Track"
    },
    {
      name: "Priya Sharma",
      location: "Toronto, Canada", 
      rating: 5,
      text: "As someone with a busy schedule, the flexible class timings and recorded sessions have been a lifesaver. The cultural context provided with each lesson deepens my appreciation for this art form.",
      program: "Advanced Classical Program"
    },
    {
      name: "Marcus Johnson",
      location: "New York, USA",
      rating: 5,
      text: "I was hesitant to start as a complete beginner, but the personalized guidance quiz helped me find the perfect starting point. Now I'm confidently performing basic adavus!",
      program: "Absolute Beginner Course"
    }
  ];

  return (
    <section className="py-24 sacred-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-1/4 w-40 h-40 rounded-full bg-bharata-lotus animate-gentle-sway"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-bharata-peacock animate-dance-flow"></div>
        <div className="absolute top-1/2 left-16 w-28 h-28 rounded-full bg-bharata-emerald animate-gentle-float"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-bharata-saffron/30 via-bharata-gold/40 to-bharata-lotus/30 px-6 py-3 rounded-full mb-6 border-2 border-bharata-gold/50 animate-sacred-pulse">
              <Star className="w-5 h-5 text-bharata-crimson fill-bharata-saffron animate-divine-glow" />
              <span className="text-sm font-bold devotional-text">Student Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gentle-sway">
              Transforming Lives Through Dance
            </h2>
            <p className="text-xl text-bharata-crimson/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Join thousands of students worldwide who have discovered the joy and beauty of Bharatanatyam through our proven teaching methods.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-2xl card-hover bg-white/90 backdrop-blur-sm sacred-shadow animate-gentle-float" style={{animationDelay: `${index * 0.5}s`}}>
                <CardContent className="p-10">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-bharata-saffron/40">
                    <Quote className="w-10 h-10" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-bharata-saffron fill-bharata-saffron animate-divine-glow" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-bharata-crimson/90 leading-relaxed mb-8 italic font-medium text-lg">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Student Info */}
                  <div className="border-t-2 divine-border pt-6">
                    <div className="font-bold text-lg devotional-text">{testimonial.name}</div>
                    <div className="text-sm text-bharata-copper font-medium mt-1">{testimonial.location}</div>
                    <div className="text-xs text-bharata-saffron mt-2 font-bold bg-bharata-saffron/10 px-3 py-1 rounded-full inline-block">{testimonial.program}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              <div className="text-center space-y-2 animate-sacred-pulse">
                <div className="text-3xl font-bold devotional-text">500+</div>
                <div className="text-sm text-bharata-copper font-medium">Global Students</div>
              </div>
              <div className="text-center space-y-2 animate-sacred-pulse" style={{animationDelay: '0.5s'}}>
                <div className="text-3xl font-bold devotional-text">25+</div>
                <div className="text-sm text-bharata-copper font-medium">Countries Reached</div>
              </div>
              <div className="text-center space-y-2 animate-sacred-pulse" style={{animationDelay: '1s'}}>
                <div className="text-3xl font-bold devotional-text">98%</div>
                <div className="text-sm text-bharata-copper font-medium">Satisfaction Rate</div>
              </div>
              <div className="text-center space-y-2 animate-sacred-pulse" style={{animationDelay: '1.5s'}}>
                <div className="text-3xl font-bold devotional-text">UNESCO</div>
                <div className="text-sm text-bharata-copper font-medium">Affiliated Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
