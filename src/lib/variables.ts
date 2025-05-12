export const imgDir: string = 'https://flowbite-admin-dashboard.vercel.app/images';

/**
 * Constructs a path to an avatar image
 * @param src The avatar image filename
 * @returns The full path to the avatar image
 */
export const avatarPath = (src: string): string => {
  if (!src) return '';
  const encodedSrc = encodeURIComponent(src);
  return `${imgDir}/users/${encodedSrc}`;
};

/**
 * Constructs a path to any image with optional subdirectories
 * @param src The image filename
 * @param subdirs Optional subdirectories to include in the path
 * @returns The full path to the image
 */
export const imagesPath = (src: string, ...subdirs: string[]): string => {
  if (!src) return '';
  
  // Filter out any empty subdirectories and encode each component
  const encodedSubdirs = subdirs.filter(Boolean).map(encodeURIComponent);
  const encodedSrc = encodeURIComponent(src);
  
  // Join all parts with / ensuring no double slashes
  return [imgDir, ...encodedSubdirs, encodedSrc].join('/');
};
