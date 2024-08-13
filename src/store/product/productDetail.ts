import {
  PriceRange,
  ProductLabel,
  ProductPrices,
  USDPriceRange,
} from './productList';

interface BrandInfo {
  img_src: string;
  title: string;
  url: string;
}

interface Breadcrumb {
  category_id: number;
  category_name: string;
  category_url_key: string;
  category_url_path: string;
  __typename: 'Breadcrumb';
}

interface CategoryTree {
  breadcrumbs?: Breadcrumb[] | null;
  level: number;
  id: number;
  name: string;
  url_path: string;
  url_key: string;
}

interface CrossBorderProduct {
  is_allowed: boolean;
  disallow_countries: string;
  __typename: 'CrossBorderProduct';
}

interface ComplexTextValue {
  html: string;
  __typename: 'ComplexTextValue';
}

export interface ProductImage {
  disabled: boolean;
  label?: string | null;
  position: number;
  url: string;
}

interface MediaGalleryEntry {
  disabled: boolean;
  file: string;
  id: number;
  label?: string | null;
  position: number;
  uid: string;
  __typename: 'MediaGalleryEntry';
}

export interface ProductDetail {
  language: string;
  redirect_code: number;
  relative_url: string;
  type: 'PRODUCT';
  amrma_default_resolution_period: number;
  brand: number;
  brand_info: BrandInfo;
  categories: CategoryTree[];
  cautions: string;
  cross_border_product: CrossBorderProduct;
  description: ComplexTextValue;
  dimensions: string;
  features: string;
  id: number;
  is_yalla: any[]; // Assuming `is_yalla` is an array of unknown type
  media_gallery: ProductImage[];
  media_gallery_entries: MediaGalleryEntry[];
  meta_description: string;
  meta_title: string;

  name: string;
  price: ProductPrices;
  price_range: PriceRange;
  base_price_range: PriceRange;
  usd_price_range: USDPriceRange;
  product_label: ProductLabel;
}
