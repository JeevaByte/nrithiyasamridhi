
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Menu, Sun, Moon, Calendar, ChevronDown } from "lucide-react"
import { useAuth } from '@/hooks/useAuth';

// Available languages for UI
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
  { code: "hi", label: "हिंदी" },
];

// Theme Toggle helper
const ThemeToggle = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as 'light' | 'dark') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-bharata-crimson" />
      )}
    </Button>
  );
};

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navigationItems = [
    { name: 'Our Programs', href: '/learn' },
    { name: 'Community', href: '/community' },
    { name: 'Events', href: '/events' },
    { 
      name: 'Resources', 
      href: '/glossary',
      subItems: [
        { name: 'Glossary', href: '/glossary' },
        { name: 'Blog', href: '/blog' }
      ]
    },
  ];

  // Language switcher as a dropdown
  const LanguageDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="font-medium text-xs px-3 h-9">
          {LANGUAGES.find((l) => l.code === lang)?.label || "English"}
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start"  className="bg-white dark:bg-gray-800 border shadow-lg">
        {LANGUAGES.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLang(code)}
            className={lang === code ? "font-bold text-bharata-crimson bg-bharata-gold/10" : ""}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="bg-white/95 dark:bg-background/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors border-b border-bharata-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-bharata-crimson to-bharata-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-2xl tracking-wider select-none">NS</span>
            </div>
            <span
              className="font-playfair text-3xl md:text-4xl tracking-tight text-bharata-crimson dark:text-bharata-gold transition-colors uppercase select-none"
              style={{ letterSpacing: "0.08em", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}
            >
              nithiyasamridhi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-gray-600 dark:text-gray-200 hover:text-bharata-crimson hover:dark:text-bharata-gold transition-colors font-medium">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white dark:bg-gray-800 border shadow-lg">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link to={subItem.href} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 dark:text-gray-200 hover:text-bharata-crimson hover:dark:text-bharata-gold transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageDropdown />
            <ThemeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-bharata-gold text-bharata-crimson">
                        {user.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border shadow-lg" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate('/auth')} className="font-medium">
                  Sign In
                </Button>
                <Button 
                  onClick={() => navigate('/learn')} 
                  className="bg-bharata-crimson hover:bg-bharata-deepRed text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Session
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageDropdown />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t dark:border-border bg-white dark:bg-background/95 transition-colors">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 dark:text-gray-200 hover:text-bharata-crimson hover:dark:text-bharata-gold transition-colors font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-sm text-gray-500 dark:text-gray-400 hover:text-bharata-crimson hover:dark:text-bharata-gold transition-colors block py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-bharata-gold/20">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-gray-600 dark:text-gray-200 hover:text-bharata-crimson hover:dark:text-bharata-gold transition-colors block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Button variant="ghost" onClick={handleSignOut} className="justify-start p-0 mt-2">
                      Sign out
                    </Button>
                  </>
                ) : (
                  <div className="space-y-3">
                    <Button 
                      variant="ghost" 
                      onClick={() => { navigate('/auth'); setIsMenuOpen(false); }} 
                      className="justify-start p-0 font-medium"
                    >
                      Sign In
                    </Button>
                    <Button 
                      onClick={() => { navigate('/learn'); setIsMenuOpen(false); }} 
                      className="w-full bg-bharata-crimson hover:bg-bharata-deepRed text-white font-semibold"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Session
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
