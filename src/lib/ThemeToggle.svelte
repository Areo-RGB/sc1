<script lang="ts">
  import { DarkMode } from 'flowbite-svelte';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  
  // Store the theme changes in localStorage
  const storeThemePreference = (isDark) => {
    if (browser) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  };
  
  // Handler for the theme toggle
  const handleToggle = () => {
    if (browser) {
      const isDark = document.documentElement.classList.contains('dark');
      storeThemePreference(!isDark); // Store the opposite of current state (what it will be after toggle)
    }
  };
  
  onMount(() => {
    // Initialize with current theme state
    if (browser) {
      const isDark = document.documentElement.classList.contains('dark');
      storeThemePreference(isDark);
    }
  });
</script>

<!-- The click event is intercepted to store the theme preference before the normal toggle behavior -->
<div on:click={handleToggle}>
  <DarkMode {...$$restProps} />
</div> 