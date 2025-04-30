export const getImageUrl = (imagePath: string): string => {
  try {
    // If it's an external URL, return as is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }

    // For local images, try to load from the source directory
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    
    // Try to load from the source directory
    try {
      return new URL(`../images/${cleanPath}`, import.meta.url).href;
    } catch (e) {
      // If that fails, try to load from the public directory
      return new URL(`${cleanPath}`, window.location.origin).href;
    }
  } catch (error) {
    console.error('Error loading image:', imagePath, error);
    return imagePath;
  }
}; 