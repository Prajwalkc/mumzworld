// Represents a single category in the categories array
interface CategoryTree {
  name: string;
  __typename: string;
}

// Represents the brand information
interface BrandInfo {
  title: string;
  __typename: string;
}

// Represents money values for pricing
interface Money {
  currency: string;
  value: number;
  __typename: string;
}

// Represents a discount applied to the price
interface ProductDiscount {
  amount_off: number;
  percent_off: number;
  __typename: string;
}

// Represents price information with final and regular prices
interface ProductPrice {
  final_price?: Money;
  regular_price?: Money;
  amount?: Money;
  discount?: ProductDiscount;
  __typename: string;
}

// Represents price information for the product
export interface ProductPrices {
  regularPrice: ProductPrice;
  __typename: string;
}

// Represents a range of prices, including minimum price
export interface PriceRange {
  minimum_price: ProductPrice;
  __typename: string;
}

// Represents the price range in USD
export interface USDPriceRange {
  minimum_price: ProductPrice;
  __typename: string;
}

// Represents the product label
export interface ProductLabel {
  active_from: string;
  active_to: string;
  background_color: string;
  label_id: number | null;
  label_text: string;
  name: string;
  text_color: string;
  __typename: string;
}

// Represents a small image for the product
interface ProductImage {
  url: string;
  __typename: string;
}

// Represents the main product response object
export interface Product {
  brand: number;
  brand_info: BrandInfo;
  categories: CategoryTree[];
  id: number;
  is_yalla: any[];
  low_stock_qty: number | null;
  name: string;
  price: ProductPrices;
  price_range: PriceRange;
  base_price_range: PriceRange;
  usd_price_range: USDPriceRange;
  product_label: ProductLabel;
  sku: string;
  small_image: ProductImage;
  stock_status: string;
  type_id: string;
  uid: string;
  url_key: string;
  url_suffix: string;
  __typename: string;
}
