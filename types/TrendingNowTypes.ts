export interface ImageData {
    id: number;
    image: string;
    altText?: string;
    title?: string;
  }

  
  export type TrendingNowType = {
    items: ImageData[];
    type?: string;
  };
  

