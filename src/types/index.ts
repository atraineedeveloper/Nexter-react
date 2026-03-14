export interface Realtor {
  id: number;
  name: string;
  image: string;
  housesSold: number;
}

export interface Feature {
  id: number;
  iconId: string;
  title: string;
  text: string;
}

export interface Home {
  id: number;
  name: string;
  image: string;
  location: string;
  rooms: number;
  area: number;
  price: string;
}

export interface GalleryImage {
  id: number;
  alt: string;
}

export interface NavLink {
  id: number;
  label: string;
  href: string;
}
