import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import AIAssistant from '../components/AIAssistant';
import CommunityShowcase from '../components/CommunityShowcase';
import BlogPreview from '../components/BlogPreview';
import HubSpotFormPlaceholder from '../components/HubSpotFormPlaceholder';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturesSection />
      <AIAssistant />
      <CommunityShowcase />
      {/* --- Blog Section from Sanity --- */}
      <BlogPreview />
      {/* --- HubSpot CRM: Embed form spot --- */}
      <HubSpotFormPlaceholder />
      <Footer />
    </div>
  );
};

export default Index;
