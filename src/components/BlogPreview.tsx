
import React, { useEffect, useState } from 'react';
import { fetchLatestBlogPosts, BlogPost } from '@/integrations/sanity/blog';

const BlogPreview: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestBlogPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-4 text-muted-foreground">Loading latest articles…</div>;
  if (posts.length === 0) return <div className="py-4 text-muted-foreground">No articles found.</div>;

  return (
    <section className="my-12 mx-auto max-w-3xl">
      <h2 className="text-2xl font-bold mb-4 font-playfair text-bharata-crimson">Latest Blog Articles</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post._id} className="rounded border p-4 bg-background shadow-sm">
            <h3 className="text-xl font-semibold font-playfair">{post.title}</h3>
            <p className="text-muted-foreground text-sm mb-2">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <div className="text-base">{post.excerpt}</div>
            {/* Link to full post if you want */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
