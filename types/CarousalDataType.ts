export interface ImageData {
  id: number;
  image: string;
  altText?: string;
  title?: string;
}

export type CarouselDataType = {
  items: ImageData[];
  type?: string;
};
