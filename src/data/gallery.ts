import type { GalleryImage } from '../types';

export const galleryImages: GalleryImage[] = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  alt: `Gallery image ${i + 1}`,
}));
