
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
    <section className="py-20 bg-gradient-to-br from-bharata-cream via-white to-bharata-gold/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-bharata-gold/20 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-bharata-crimson fill-bharata-crimson" />
              <span className="text-sm font-medium text-bharata-crimson">Student Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-bharata-crimson font-playfair mb-4">
              Transforming Lives Through Dance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of students worldwide who have discovered the joy and beauty of Bharatanatyam through our proven teaching methods.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-bharata-gold/30">
                    <Quote className="w-8 h-8" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-bharata-gold fill-bharata-gold" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Student Info */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-bharata-crimson">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-bharata-gold mt-1 font-medium">{testimonial.program}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-bharata-crimson">500+</div>
                <div className="text-sm text-muted-foreground">Global Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bharata-crimson">25+</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bharata-crimson">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bharata-crimson">UNESCO</div>
                <div className="text-sm text-muted-foreground">Affiliated Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
