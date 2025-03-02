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
