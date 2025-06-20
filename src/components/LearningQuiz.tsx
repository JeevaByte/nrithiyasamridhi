
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, X, CheckCircle } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LearningQuiz = ({ isOpen, onClose }: QuizModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: "What's your current experience with Bharatanatyam?",
      options: [
        { value: "none", label: "Complete beginner - never tried before" },
        { value: "basic", label: "Some basic knowledge or a few classes" },
        { value: "intermediate", label: "Can perform basic adavus and mudras" },
        { value: "advanced", label: "Experienced dancer looking to refine skills" }
      ]
    },
    {
      id: 1,
      question: "How much time can you dedicate to practice weekly?",
      options: [
        { value: "1-2", label: "1-2 hours per week" },
        { value: "3-5", label: "3-5 hours per week" },
        { value: "6-10", label: "6-10 hours per week" },
        { value: "10+", label: "More than 10 hours per week" }
      ]
    },
    {
      id: 2,
      question: "What aspect of Bharatanatyam interests you most?",
      options: [
        { value: "technique", label: "Technical precision and adavus" },
        { value: "expression", label: "Abhinaya and storytelling" },
        { value: "spirituality", label: "Spiritual and devotional aspects" },
        { value: "performance", label: "Stage performance and repertoire" }
      ]
    },
    {
      id: 3,
      question: "What's your preferred learning style?",
      options: [
        { value: "structured", label: "Structured curriculum with clear progression" },
        { value: "flexible", label: "Flexible schedule with recorded lessons" },
        { value: "interactive", label: "Live classes with real-time feedback" },
        { value: "self-paced", label: "Self-paced learning with resources" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getRecommendation = () => {
    const experience = answers[0];
    const timeCommitment = answers[1];
    const interest = answers[2];
    const style = answers[3];

    if (experience === "none") {
      return {
        level: "Beginner Foundation Course",
        description: "Perfect for complete beginners. Start with basic postures, hand gestures, and simple movements.",
        duration: "3-4 months",
        features: ["Weekly live classes", "Recorded practice sessions", "Personal feedback", "Cultural context lessons"]
      };
    } else if (experience === "basic" || experience === "intermediate") {
      return {
        level: "Intermediate Development Program",
        description: "Build upon your foundation with complex adavus, jathis, and begin abhinaya training.",
        duration: "6-8 months",
        features: ["Bi-weekly live sessions", "Advanced technique modules", "Choreography workshops", "Performance opportunities"]
      };
    } else {
      return {
        level: "Advanced Mastery Track",
        description: "Refine your artistry with classical compositions, advanced abhinaya, and teaching techniques.",
        duration: "12+ months",
        features: ["Monthly masterclasses", "Repertoire development", "Teaching methodology", "Certification pathway"]
      };
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto sacred-shadow">
        <div className="temple-gradient p-6 text-white rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Discover Your Learning Path</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <p className="text-white/90 mt-2">Answer a few questions to get personalized course recommendations</p>
        </div>

        <div className="p-8">
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-bharata-copper">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-bharata-copper">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="devotional-gradient h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 devotional-text">
                  {questions[currentQuestion].question}
                </h3>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                        answers[currentQuestion] === option.value
                          ? 'border-bharata-saffron bg-bharata-saffron/10 text-bharata-crimson'
                          : 'border-gray-200 hover:border-bharata-gold hover:bg-bharata-cream'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          answers[currentQuestion] === option.value
                            ? 'border-bharata-saffron bg-bharata-saffron'
                            : 'border-gray-300'
                        }`}>
                          {answers[currentQuestion] === option.value && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="font-medium">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className="px-6 py-2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[currentQuestion]}
                  className="btn-primary px-6 py-2"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-bharata-saffron to-bharata-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-sacred-pulse">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4 devotional-text">
                Perfect Match Found!
              </h3>
              
              <div className="bg-gradient-to-br from-bharata-cream to-bharata-ivory p-8 rounded-2xl mb-8 text-left">
                <h4 className="text-2xl font-bold mb-4 text-bharata-crimson">
                  {getRecommendation().level}
                </h4>
                <p className="text-lg mb-6 text-bharata-copper leading-relaxed">
                  {getRecommendation().description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-bharata-crimson mb-3">Program Duration</h5>
                    <p className="text-bharata-copper">{getRecommendation().duration}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-bharata-crimson mb-3">What's Included</h5>
                    <ul className="space-y-2">
                      {getRecommendation().features.map((feature, index) => (
                        <li key={index} className="flex items-center text-bharata-copper">
                          <CheckCircle className="w-4 h-4 text-bharata-saffron mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary px-8 py-3 text-lg">
                  Enroll in This Program
                </Button>
                <Button variant="outline" className="px-8 py-3 text-lg">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningQuiz;
