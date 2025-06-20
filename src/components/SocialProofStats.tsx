
import React from 'react';
import { Users, Globe, Star, Award, BookOpen, Clock } from 'lucide-react';

const SocialProofStats = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Active Students",
      description: "Learning from 25+ countries worldwide",
      color: "from-bharata-saffron to-bharata-gold"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries",
      description: "Global community of passionate dancers",
      color: "from-bharata-peacock to-bharata-emerald"
    },
    {
      icon: Star,
      number: "98%",
      label: "Satisfaction",
      description: "Student success and happiness rate",
      color: "from-bharata-lotus to-bharata-vermillion"
    }
  ];

  const achievements = [
    {
      icon: Award,
      text: "UNESCO Affiliated Program",
      subtext: "Internationally recognized curriculum"
    },
    {
      icon: BookOpen,
      text: "5000+ Hours Taught",
      subtext: "Comprehensive learning experience"
    },
    {
      icon: Clock,
      text: "Available 24/7",
      subtext: "Flexible learning across time zones"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-bharata-cream via-bharata-ivory to-white">
      <div className="container mx-auto px-4">
        {/* Main Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-4 animate-gentle-float p-8 bg-white/80 backdrop-blur-sm rounded-2xl sacred-shadow hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto animate-sacred-pulse shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold devotional-text animate-divine-glow">
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-bharata-crimson">
                  {stat.label}
                </div>
                <p className="text-bharata-copper font-medium leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Banner */}
        <div className="temple-gradient rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Trusted by Students Worldwide</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our internationally recognized program has helped students master the divine art of Bharatanatyam across continents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-gentle-sway"
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">{achievement.text}</div>
                  <div className="text-white/80 text-sm">{achievement.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofStats;
