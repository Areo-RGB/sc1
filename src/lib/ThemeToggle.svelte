<script lang="ts">
  import { DarkMode } from 'flowbite-svelte';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  
  // Theme states
  type ThemeMode = 'light' | 'dark' | 'system';
  let currentTheme: ThemeMode = 'light';
  
  // Media query for system preference
  let prefersDarkMode = false;
  let mediaQuery: MediaQueryList;
  
  // Store the theme changes in localStorage
  const storeThemePreference = (mode: ThemeMode) => {
    if (browser) {
      localStorage.setItem('theme', mode);
      applyTheme(mode);
    }
  };
  
  // Apply the theme based on selected mode or system preference
  const applyTheme = (mode: ThemeMode) => {
    if (!browser) return;
    
    let shouldUseDark = false;
    
    if (mode === 'system') {
      // Use system preference
      shouldUseDark = prefersDarkMode;
    } else {
      // Use explicit selection
      shouldUseDark = mode === 'dark';
    }
    
    // Apply theme to document
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Handler for the theme toggle
  const handleToggle = () => {
    if (browser) {
      // Cycle through modes: light -> dark -> system -> light
      const isDark = document.documentElement.classList.contains('dark');
      
      if (currentTheme === 'light') {
        currentTheme = 'dark';
      } else if (currentTheme === 'dark') {
        currentTheme = 'system';
      } else {
        currentTheme = 'light';
      }
      
      storeThemePreference(currentTheme);
    }
  };
  
  // Handle system preference changes
  const handleSystemPreferenceChange = (e: MediaQueryListEvent) => {
    prefersDarkMode = e.matches;
    
    // Only update if we're in "system" mode
    if (currentTheme === 'system') {
      applyTheme('system');
    }
  };
  
  onMount(() => {
    if (browser) {
      // Get stored preference
      const storedTheme = localStorage.getItem('theme') as ThemeMode;
      currentTheme = storedTheme || 'light';
      
      // Set up system preference detection
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      prefersDarkMode = mediaQuery.matches;
      
      // Listen for system preference changes
      mediaQuery.addEventListener('change', handleSystemPreferenceChange);
      
      // Apply initial theme
      applyTheme(currentTheme);
    }
    
    return () => {
      if (browser && mediaQuery) {
        mediaQuery.removeEventListener('change', handleSystemPreferenceChange);
      }
    };
  });
</script>

<!-- The click event is intercepted to store the theme preference before the normal toggle behavior -->
<div on:click={handleToggle} title="Toggle theme (Light/Dark/System)">
  <DarkMode {...$$restProps} />
</div> 