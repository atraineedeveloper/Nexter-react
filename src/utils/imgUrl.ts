/**
 * Prefix an image path with Vite's BASE_URL so it works on both
 * local dev (base = '/') and GitHub Pages (base = '/<repo-name>/').
 *
 * Usage: imgUrl('img/logo.png') → '/img/logo.png' or '/Nexter-react/img/logo.png'
 */
export const imgUrl = (path: string): string =>
  `${import.meta.env.BASE_URL}${path}`;
