import {ProductDetail, ProductImage} from '../../store/product/productDetail';
import {Product} from '../../store/product/productList';
import {ProductDetailsViewModel, ProductViewModel} from './types';

export const mapProductToItemViewModel = (item: Product): ProductViewModel => {
  const isNotSamePrice =
    item.price_range.minimum_price.final_price?.value.toFixed(2) !==
    item.price_range.minimum_price.regular_price?.value.toFixed(2);
  const isNotSameDiscount =
    item.price_range.minimum_price.discount?.percent_off !== 0;

  const title = item.name;
  const image = item.small_image.url;
  const actualPrice = isNotSamePrice
    ? `${
        item.price_range.minimum_price.regular_price?.currency
      } ${item.price_range.minimum_price.regular_price?.value.toFixed(2)}`
    : undefined;
  const discountedPrice = `${
    item.price_range.minimum_price.final_price?.currency
  } ${item.price_range.minimum_price.final_price?.value.toFixed(2)}`;

  const discountPercentage = isNotSameDiscount
    ? `${item.price_range.minimum_price.discount?.percent_off.toFixed(2)}%`
    : undefined;
  return {
    title,
    image,
    actualPrice,
    discountedPrice,
    discountPercentage,
  };
};
export enum Lanuage {
  Arabic = 'Arabic',
  English = 'English',
}

export const maptoProductDetails = (
  items: ProductDetail[],
  language: Lanuage,
): ProductDetailsViewModel | undefined => {
  switch (language) {
    case Lanuage.Arabic:
      const arabicProductDetail = items.find(item => item.language === 'ar');
      if (arabicProductDetail) {
        return mapProductToDetailseViewModel(arabicProductDetail);
      }
      break;
    case Lanuage.English:
      const englishProductDetail = items.find(item => item.language === 'en');
      if (englishProductDetail) {
        return mapProductToDetailseViewModel(englishProductDetail);
      }
      break;
  }
};

export const mapProductToDetailseViewModel = (
  item: ProductDetail,
): ProductDetailsViewModel => {
  const isNotSamePrice =
    item.price_range.minimum_price.final_price?.value.toFixed(2) !==
    item.price_range.minimum_price.regular_price?.value.toFixed(2);
  const isNotSameDiscount =
    item.price_range.minimum_price.discount?.percent_off !== 0;

  const title = item.name;
  const images = item.media_gallery.map((media: ProductImage) => media.url);
  const actualPrice = isNotSamePrice
    ? `${
        item.price_range.minimum_price.regular_price?.currency
      } ${item.price_range.minimum_price.regular_price?.value.toFixed(2)}`
    : undefined;
  const discountedPrice = `${
    item.price_range.minimum_price.final_price?.currency
  } ${item.price_range.minimum_price.final_price?.value.toFixed(2)}`;

  const discountPercentage = isNotSameDiscount
    ? `${item.price_range.minimum_price.discount?.percent_off.toFixed(2)}%`
    : undefined;
  return {
    title,
    images: images.slice(0, 6),
    actualPrice,
    discountedPrice,
    discountPercentage,
    feature: item.features,
  };
};
