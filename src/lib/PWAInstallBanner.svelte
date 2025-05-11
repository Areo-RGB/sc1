<script lang="ts">
  import { Button, Alert } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let deferredPrompt: any;
  let showInstallBanner = $state(false);

  onMount(() => {
    if (!browser) return;

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      // Show the install banner
      showInstallBanner = true;
    });

    // Listen for when the PWA is successfully installed
    window.addEventListener('appinstalled', () => {
      // Hide the banner after successful installation
      showInstallBanner = false;
      // Clear the saved prompt
      deferredPrompt = null;
      // Log the installation
      console.log('PWA was installed');
    });
  });

  // Function to handle the install button click
  function handleInstallClick() {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      // Clear the saved prompt
      deferredPrompt = null;
      // Hide the banner
      showInstallBanner = false;
    });
  }

  // Function to close the banner without installing
  function closeBanner() {
    showInstallBanner = false;
  }
</script>

{#if showInstallBanner}
  <div class="fixed bottom-0 left-0 right-0 z-50 p-4">
    <Alert dismissable class="flex items-center justify-between bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2m0 0v5m0-5h2m6-6h2M5 10H3m3 6H2"></path>
        </svg>
        <span class="font-medium">Install QuoVadis as an app on your device for a better experience!</span>
      </div>
      <div class="flex items-center gap-2">
        <Button size="sm" color="primary" onclick={handleInstallClick}>Install</Button>
        <Button size="sm" color="alternative" onclick={closeBanner}>Not Now</Button>
      </div>
    </Alert>
  </div>
{/if} 