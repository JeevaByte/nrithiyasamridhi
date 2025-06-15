
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mic } from 'lucide-react';

const AIAssistant = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    {
      type: 'ai',
      content: 'Namaste! I am your AI Nattuvanar. Ask me about adavus, mudras, tala, or any aspect of Bharatanatyam. How can I guide your practice today?'
    }
  ]);

  const sampleQuestions = [
    'What is the difference between Bharatanatyam and Kuchipudi?',
    'How do I count the tala for Tisra Triputa?',
    'Explain the Kartari hasta mudra',
    'What is the story behind Varnam in Ragam Kalyani?'
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newConversation = [
      ...conversation,
      { type: 'user', content: message },
      { 
        type: 'ai', 
        content: 'Thank you for your question about Bharatanatyam! This is a demonstration of the AI assistant. In the full version, I would provide detailed guidance on your practice, help with rhythm counting, explain mudras, and share the beautiful stories behind each composition.' 
      }
    ];

    setConversation(newConversation);
    setMessage('');
  };

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Your AI <span className="text-gradient">Nattuvanar</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get instant guidance on technique, tala, mudras, and the rich stories of Bharatanatyam
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-96">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-bharata-crimson to-bharata-gold rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <span>AI Nattuvanar Chat</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-64">
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {conversation.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.type === 'user'
                              ? 'bg-bharata-crimson text-white'
                              : 'bg-bharata-cream text-bharata-crimson'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about Bharatanatyam..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button size="sm" onClick={handleSendMessage}>
                      Send
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mic className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Try These Questions</CardTitle>
                  <CardDescription>Click to ask the AI Nattuvanar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {sampleQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left justify-start h-auto p-3 text-sm hover:bg-bharata-gold/10"
                      onClick={() => setMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bharata-gold rounded-full"></div>
                    <span className="text-sm">Rhythm corrections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bharata-gold rounded-full"></div>
                    <span className="text-sm">Mudra explanations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bharata-gold rounded-full"></div>
                    <span className="text-sm">Jathi to text conversion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bharata-gold rounded-full"></div>
                    <span className="text-sm">Performance feedback</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
