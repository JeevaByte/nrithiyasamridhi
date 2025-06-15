
import { createClient } from '@sanity/client';

// Fill these with your Sanity project details (from sanity.io/manage)
export const sanityClient = createClient({
  projectId: 'your_project_id',  // REPLACE with your Sanity Project ID
  dataset: 'production',
  apiVersion: '2023-06-15',
  useCdn: true,
});
