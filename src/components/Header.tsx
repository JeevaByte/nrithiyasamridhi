
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Learn', href: '#learn' },
    { name: 'Perform', href: '#perform' },
    { name: 'Connect', href: '#connect' },
    { name: 'Explore', href: '#explore' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-bharata-crimson to-bharata-gold rounded-full flex items-center justify-center animate-gentle-sway">
              <span className="text-white font-bold text-sm">🕉</span>
            </div>
            <h1 className="text-xl font-bold text-gradient">
              Global Bharatanatyam Connect
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-bharata-crimson transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="outline" size="sm" className="ml-4">
              <Globe className="w-4 h-4 mr-2" />
              EN
            </Button>
            <Button className="bg-bharata-crimson hover:bg-bharata-deepRed">
              Join Community
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-bharata-crimson transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                <Globe className="w-4 h-4 mr-2" />
                Language
              </Button>
              <Button className="w-full bg-bharata-crimson hover:bg-bharata-deepRed">
                Join Community
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
