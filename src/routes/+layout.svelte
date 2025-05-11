<script lang="ts">
  import type { LayoutProps } from './$types';
  import modeobserver from './utils/modeobserver';
  import { onMount } from 'svelte';
  import { Runatics } from 'runatics';
  import { PWAInstallBanner } from '$lib';

  let { children, data }: LayoutProps = $props();
  // Analytics ID might not be available in the data property
  const analyticsId = data && 'ANALYTICS_ID' in data ? (data.ANALYTICS_ID as string) : '';
  // console.log('analyticsId', data.ANALYTICS_ID);

  onMount(modeobserver);
</script>

{#if analyticsId}
  <Runatics {analyticsId} />
{/if}
{@render children()}
<PWAInstallBanner />
