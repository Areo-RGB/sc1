<script lang="ts">
  import StackedDashboard from '../utils/dashboard/StackedDashboard.svelte';
  import MetaTag from '../utils/MetaTag.svelte';
  import type { PageProps } from './$types';

  // let { data }: PageProps = $props();
  // $inspect('data in (sidebar)/+page: ', data.posts.posts)

  const path: string = '';
  const description: string = 'Admin Dashboard example using Flowbite Svelte';
  const title: string = 'Flowbite Svelte Admin Dashboard - Home';
  const subtitle: string = 'Admin Dashboard';
</script>

<MetaTag {path} {description} {title} {subtitle} />
<main class="p-4">
  <h1 class="hidden">Dashboard</h1>
  <StackedDashboard title="Flowbite Dashboard Overview" showBreadcrumb={false} />
</main>
