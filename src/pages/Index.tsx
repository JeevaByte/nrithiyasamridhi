
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import AIAssistant from '../components/AIAssistant';
import CommunityShowcase from '../components/CommunityShowcase';
import BlogPreview from '../components/BlogPreview';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import SocialProofStats from '../components/SocialProofStats';
import HubSpotFormPlaceholder from '../components/HubSpotFormPlaceholder';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SocialProofStats />
      <FeaturesSection />
      <AIAssistant />
      <TestimonialsSection />
      <CommunityShowcase />
      <BlogPreview />
      <CTASection />
      <HubSpotFormPlaceholder />
      <Footer />
    </div>
  );
};

export default Index;
