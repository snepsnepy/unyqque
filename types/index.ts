export const enum CATEGORY {
  MERCH = "MERCH",
  LIVERY = "LIVERY",
  LOGO = "LOGO",
}

export type GalleryItem = {
  category: string;
  title: string;
  imgSrc: string;
};

export type ShopItem = {
  name: string;
  price: number;
  imgSrc: string;
  size?: string;
  color?: string;
};
