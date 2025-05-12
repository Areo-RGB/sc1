export const imgDir = 'https://flowbite-admin-dashboard.vercel.app/images';

/** @type {(x:string) => string} */
export const avatarPath = (src) => {
  if (!src) return '';
  const encodedSrc = encodeURIComponent(src);
  return `${imgDir}/users/${encodedSrc}`;
};

/** @type {(x:string, ...y:string[]) => string} */
export const imagesPath = (src, ...subdirs) => {
  if (!src) return '';
  
  // Filter out any empty subdirectories and encode each component
  const encodedSubdirs = subdirs.filter(Boolean).map(encodeURIComponent);
  const encodedSrc = encodeURIComponent(src);
  
  // Join all parts with / ensuring no double slashes
  return [imgDir, ...encodedSubdirs, encodedSrc].join('/');
};
