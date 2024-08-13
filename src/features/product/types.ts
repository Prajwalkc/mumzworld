export interface ProductViewModel {
  title: string;
  image: string;
  actualPrice?: string;
  discountedPrice: string;
  discountPercentage?: string;
}

export interface ProductDetailsViewModel {
  title: string;
  images: string[];
  actualPrice?: string;
  discountedPrice: string;
  discountPercentage?: string;
  feature?: string;
}
