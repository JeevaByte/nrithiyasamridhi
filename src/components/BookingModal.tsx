
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Mail, Phone, X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto sacred-shadow">
        <div className="devotional-gradient p-6 text-white rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Book Your Free Guidance Session</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <p className="text-white/90 mt-2">Connect with our expert instructors for personalized guidance</p>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-bharata-crimson" />
                <div>
                  <h3 className="font-bold text-lg">30-Minute Session</h3>
                  <p className="text-gray-600">Personalized consultation</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-8 h-8 text-bharata-saffron" />
                <div>
                  <h3 className="font-bold text-lg">Flexible Timing</h3>
                  <p className="text-gray-600">Available across time zones</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-8 h-8 text-bharata-peacock" />
                <div>
                  <h3 className="font-bold text-lg">Expert Instructor</h3>
                  <p className="text-gray-600">UNESCO-affiliated teachers</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bharata-saffron focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bharata-saffron focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bharata-saffron focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dance Experience Level
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bharata-saffron focus:border-transparent"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some-experience">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time Zone
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bharata-saffron focus:border-transparent"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                >
                  <option value="">Select time zone</option>
                  <option value="ist">IST (India Standard Time)</option>
                  <option value="gmt">GMT (London)</option>
                  <option value="est">EST (New York)</option>
                  <option value="pst">PST (Los Angeles)</option>
                  <option value="aest">AEST (Sydney)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What would you like to discuss?
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bharata-saffron focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your goals, interests, or any questions..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary py-3 text-lg font-bold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule My Free Session
              </Button>
            </form>
          </div>

          <div className="bg-bharata-cream p-4 rounded-lg">
            <p className="text-sm text-bharata-copper text-center">
              <strong>What happens next?</strong> Our team will contact you within 24 hours to confirm your session time and send you the meeting link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
