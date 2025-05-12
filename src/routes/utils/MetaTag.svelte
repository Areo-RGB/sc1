<script lang="ts">
  import { RunesMetaTags } from 'runes-meta-tags';

  interface Props {
    path: string;
    description: string;
    title: string;
    subtitle: string;
  }
  let { path, description, title, subtitle }: Props = $props();

  // Properly encode the subtitle parameter for the URL
  const encodedSubtitle = encodeURIComponent(subtitle || '');
  // Make sure path starts with / and remove any duplicate slashes
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  let imgsrc = `https://open-graph-vercel.vercel.app/api/quovadis-svelte-admin-dashboard?title=${encodedSubtitle}`;
  let og_url: string = `https://quovadis-svelte-admin-dashboard.vercel.app${normalizedPath}`;
</script>

<RunesMetaTags
  {title}
  {description}
  og={{
    type: 'website',
    url: `${og_url}`,
    title: `${title}`,
    description: `${description}`,
    image: imgsrc,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: `${title}`,
    siteName: 'QuoVadis Svelte Admin Dashboard'
  }}
  twitter={{
    creator: '@shinokada',
    card: 'summary_large_image',
    title: `${title}`,
    description: `${description}`,
    image: imgsrc,
    imageAlt: `${title}`
  }}
/>
