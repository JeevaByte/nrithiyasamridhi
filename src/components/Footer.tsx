
import { Button } from '@/components/ui/button';
import { Globe, Calendar, Video, Book } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Learn',
      links: [
        'Beginner Courses',
        'Advanced Techniques',
        'AI Practice Assistant',
        'Notation Tools'
      ]
    },
    {
      title: 'Community',
      links: [
        'Find Students',
        'Find Teachers',
        'Performance Gallery',
        'Cultural Events'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Glossary',
        'Mythology Guide',
        'Practice Tips',
        'Cultural Context'
      ]
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Contact Us',
        'Privacy Policy',
        'Terms of Service'
      ]
    }
  ];

  return (
    <footer className="bg-bharata-crimson text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-bharata-gold rounded-full flex items-center justify-center">
                  <span className="text-bharata-crimson font-bold text-sm">🕉</span>
                </div>
                <h3 className="text-xl font-bold">Global Bharatanatyam Connect</h3>
              </div>
              <p className="text-bharata-cream/80 leading-relaxed">
                Connecting international students with the divine art of Bharatanatyam. 
                Learn, practice, and celebrate this classical dance form with a global community 
                of passionate practitioners.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-bharata-gold text-bharata-gold hover:bg-bharata-gold hover:text-bharata-crimson">
                  <Globe className="w-4 h-4 mr-2" />
                  English
                </Button>
                <Button variant="outline" size="sm" className="border-bharata-cream text-bharata-cream hover:bg-bharata-cream hover:text-bharata-crimson">
                  தமிழ்
                </Button>
                <Button variant="outline" size="sm" className="border-bharata-cream text-bharata-cream hover:bg-bharata-cream hover:text-bharata-crimson">
                  हिंदी
                </Button>
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-bharata-gold">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-bharata-cream/80 hover:text-bharata-gold transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-bharata-cream/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-bharata-cream/80">
                <span>© 2024 Global Bharatanatyam Connect</span>
                <span>Made with devotion for the art</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-sm text-bharata-cream/80">
                  <Book className="w-4 h-4" />
                  <span>500+ Tutorials</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-bharata-cream/80">
                  <Video className="w-4 h-4" />
                  <span>1.2k Performances</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-bharata-cream/80">
                  <Calendar className="w-4 h-4" />
                  <span>Monthly Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
