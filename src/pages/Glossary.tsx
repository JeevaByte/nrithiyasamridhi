
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, BookOpen } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type GlossaryTerm = Tables<'glossary'>;

const Glossary = () => {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [filteredTerms, setFilteredTerms] = useState<GlossaryTerm[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const categories = ['all', 'technique', 'expression', 'rhythm', 'composition', 'performance', 'roles'];

  useEffect(() => {
    fetchGlossaryTerms();
  }, []);

  useEffect(() => {
    filterTerms();
  }, [searchQuery, selectedCategory, terms]);

  const fetchGlossaryTerms = async () => {
    try {
      const { data, error } = await supabase
        .from('glossary')
        .select('*')
        .order('term');
      
      if (error) {
        console.error('Error fetching glossary terms:', error);
        return;
      }

      setTerms(data || []);
    } catch (error) {
      console.error('Error fetching glossary terms:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterTerms = () => {
    let filtered = terms;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(term =>
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(term => term.category === selectedCategory);
    }

    setFilteredTerms(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-lg">Loading glossary...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center space-x-2">
            <BookOpen className="w-8 h-8" />
            <span>Bharatanatyam Glossary</span>
          </h1>
          <p className="text-muted-foreground">
            Explore the rich terminology of classical Indian dance
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search terms or definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredTerms.length} of {terms.length} terms
          </p>
        </div>

        {/* Glossary Terms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term) => (
            <Card key={term.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{term.term}</CardTitle>
                    {term.pronunciation && (
                      <CardDescription className="mt-1 font-medium text-bharata-crimson">
                        /{term.pronunciation}/
                      </CardDescription>
                    )}
                  </div>
                  {term.category && (
                    <Badge variant="secondary" className="capitalize">
                      {term.category}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{term.definition}</p>
                {term.language && term.language !== 'english' && (
                  <div className="mt-3">
                    <Badge variant="outline" className="text-xs">
                      {term.language}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && !loading && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No terms found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>This glossary contains traditional Bharatanatyam terminology.</p>
          <p>Pronunciation guides follow standard transliteration conventions.</p>
        </div>
      </div>
    </div>
  );
};

export default Glossary;
