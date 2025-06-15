
import React from 'react';

/**
 * This is a placeholder where you can embed a HubSpot form (e.g., Newsletter signup).
 * Paste your HubSpot embed code below.
 * For custom lead sync, integrate with a Supabase Edge Function or backend route.
 */
const HubSpotFormPlaceholder: React.FC = () => (
  <section className="my-10 mx-auto max-w-2xl text-center border rounded bg-muted/40 p-8">
    <h2 className="text-xl font-bold mb-2 text-bharata-crimson font-playfair">Newsletter / Registration</h2>
    <div className="mb-4 text-muted-foreground">
      Embed your HubSpot form code here in place of this message.<br />
      <span className="text-xs">
        (Go to HubSpot &gt; Marketing &gt; Lead Capture &gt; Forms, and use the Embed snippet)
      </span>
    </div>
    <div className="text-muted-foreground italic text-sm">[HubSpot Form EMBED goes here]</div>
  </section>
);

export default HubSpotFormPlaceholder;

