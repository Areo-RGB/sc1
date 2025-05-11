/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  // Set light mode as default (remove 'dark' class from HTML element)
  if (typeof document !== 'undefined') {
    const theme = localStorage.getItem('theme');
    
    // Only set light theme as default when no theme preference is stored
    if (!theme) {
      document.documentElement.classList.remove('dark');
    }
  }

  const response = await resolve(event);
  return response;
}; 