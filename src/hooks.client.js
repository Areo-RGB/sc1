/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  // Initialize theme based on preference or system default
  if (typeof document !== 'undefined') {
    const theme = localStorage.getItem('theme');
    
    // If system preference or no preference is set
    if (theme === 'system' || !theme) {
      // Use system preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const response = await resolve(event);
  return response;
}; 