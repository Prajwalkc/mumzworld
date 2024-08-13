import {ProductDetail} from '../../store/product/productDetail.ts';
import {Product} from '../../store/product/productList';
import {ProductDetailsViewModel, ProductViewModel} from './types';
import {
  Lanuage,
  mapProductToDetailseViewModel,
  mapProductToItemViewModel,
  maptoProductDetails,
} from './utils';
const mockProduct: Product = {
  __typename: 'Product',
  brand: 1,
  brand_info: {
    __typename: 'BrandInfo',
    title: 'Brand Name',
  },
  categories: [
    {
      __typename: 'CategoryTree',
      name: 'Category Name',
    },
  ],
  id: 123,
  is_yalla: [],
  low_stock_qty: null,
  name: 'Test Product',
  price: {
    __typename: 'ProductPrices',
    regularPrice: {
      __typename: 'ProductPrice',
      final_price: {value: 50, currency: 'USD', __typename: 'Money'},
      regular_price: {value: 100, currency: 'USD', __typename: 'Money'},
      amount: {value: 50, currency: 'USD', __typename: 'Money'},
      discount: {
        amount_off: 50,
        percent_off: 50,
        __typename: 'ProductDiscount',
      },
    },
  },
  price_range: {
    __typename: 'PriceRange',
    minimum_price: {
      __typename: 'ProductPrice',
      final_price: {value: 50, currency: 'USD', __typename: 'Money'},
      regular_price: {value: 100, currency: 'USD', __typename: 'Money'},
      discount: {
        amount_off: 50,
        percent_off: 50,
        __typename: 'ProductDiscount',
      },
    },
  },
  base_price_range: {
    __typename: 'PriceRange',
    minimum_price: {
      __typename: 'ProductPrice',
      final_price: {value: 50, currency: 'USD', __typename: 'Money'},
      regular_price: {value: 100, currency: 'USD', __typename: 'Money'},
      discount: {
        amount_off: 50,
        percent_off: 50,
        __typename: 'ProductDiscount',
      },
    },
  },
  usd_price_range: {
    __typename: 'USDPriceRange',
    minimum_price: {
      __typename: 'ProductPrice',
      final_price: {value: 50, currency: 'USD', __typename: 'Money'},
      regular_price: {value: 100, currency: 'USD', __typename: 'Money'},
      discount: {
        amount_off: 50,
        percent_off: 50,
        __typename: 'ProductDiscount',
      },
    },
  },
  product_label: {
    __typename: 'ProductLabel',
    active_from: '2024-01-01',
    active_to: '2024-12-31',
    background_color: '#FFFFFF',
    label_id: 1,
    label_text: 'New',
    name: 'New Label',
    text_color: '#000000',
  },
  sku: 'test-sku',
  small_image: {
    __typename: 'ProductImage',
    url: 'test-image-url',
  },
  stock_status: 'In Stock',
  type_id: 'simple',
  uid: 'uid-123',
  url_key: 'test-product',
  url_suffix: '.html',
};

const mockProductDetail: ProductDetail = {
  language: 'en',
  redirect_code: 301,
  relative_url: '/test-product-detail',
  type: 'PRODUCT',
  amrma_default_resolution_period: 30,
  brand: 1,
  brand_info: {
    img_src: '',
    url: '',
    title: 'Brand Name',
  },
  categories: [
    {
      name: 'Category Name',
      level: 0,
      id: 0,
      url_path: '',
      url_key: '',
    },
  ],
  cautions: 'Handle with care',
  cross_border_product: {
    __typename: 'CrossBorderProduct',
    is_allowed: true,
    disallow_countries: 'None',
  },
  description: {
    __typename: 'ComplexTextValue',
    html: '<p>Description</p>',
  },
  dimensions: '10x10x10',
  features: 'Feature 1, Feature 2',
  id: 123,
  is_yalla: [],
  media_gallery: [
    {
      url: 'image1-url',
      disabled: false,
      position: 1,
    },
    {
      url: 'image2-url',
      disabled: false,
      position: 2,
    },
  ],
  media_gallery_entries: [
    {
      __typename: 'MediaGalleryEntry',
      disabled: false,
      file: 'file1',
      id: 1,
      position: 1,
      uid: 'uid1',
    },
    {
      __typename: 'MediaGalleryEntry',
      disabled: false,
      file: 'file2',
      id: 2,
      position: 2,
      uid: 'uid2',
    },
  ],
  meta_description: 'Meta description',
  meta_title: 'Meta title',
  name: 'Test Product Detail',
  price: {
    __typename: 'ProductPrices',
    regularPrice: {
      __typename: 'ProductPrice',
      final_price: {value: 50, currency: 'USD', __typename: 'Money'},
      regular_price: {value: 100, currency: 'USD', __typename: 'Money'},
      amount: {value: 50, currency: 'USD', __typename: 'Money'},
      discount: {
        amount_off: 50,
        percent_off: 50,
        __typename: 'ProductDiscount',
      },
    },
  },
  price_range: {
    __typename: 'PriceRange',
    minimum_price: {
      __typename: 'ProductPrice',
      final_price: {value: 50, currency: 'USD', __typename: 'Money'},
      regular_price: {value: 100, currency: 'USD', __typename: 'Money'},
      discount: {
        amount_off: 50,
        percent_off: 50,
        __typename: 'ProductDiscount',
      },
    },
  },
  base_price_range: {
    __typename: 'PriceRange',
    minimum_price: {
      __typename: 'ProductPrice',
      final_price: {value: 50, currency: 'USD', __typename: 'Money'},
      regular_price: {value: 100, currency: 'USD', __typename: 'Money'},
      discount: {
        amount_off: 50,
        percent_off: 50,
        __typename: 'ProductDiscount',
      },
    },
  },
  usd_price_range: {
    __typename: 'USDPriceRange',
    minimum_price: {
      __typename: 'ProductPrice',
      final_price: {value: 50, currency: 'USD', __typename: 'Money'},
      regular_price: {value: 100, currency: 'USD', __typename: 'Money'},
      discount: {
        amount_off: 50,
        percent_off: 50,
        __typename: 'ProductDiscount',
      },
    },
  },
  product_label: {
    __typename: 'ProductLabel',
    active_from: '2024-01-01',
    active_to: '2024-12-31',
    background_color: '#FFFFFF',
    label_id: 1,
    label_text: 'New',
    name: 'New Label',
    text_color: '#000000',
  },
};

describe('Product Mapping Functions', () => {
  it('should map product details to ProductDetailsViewModel correctly', () => {
    const result = mapProductToDetailseViewModel(mockProductDetail);

    const expected: ProductDetailsViewModel = {
      title: 'Test Product Detail',
      images: ['image1-url', 'image2-url'],
      actualPrice: 'USD 100.00',
      discountedPrice: 'USD 50.00',
      discountPercentage: '50.00%',
      feature: 'Feature 1, Feature 2',
    };

    expect(result).toEqual(expected);
  });

  it('should map product to ProductViewModel correctly', () => {
    const expected: ProductViewModel = {
      title: 'Test Product',
      image: 'test-image-url',
      actualPrice: 'USD 100.00',
      discountedPrice: 'USD 50.00',
      discountPercentage: '50.00%',
    };

    const result = mapProductToItemViewModel(mockProduct);
    expect(result).toEqual(expected);
  });

  it('should map product details to ProductDetailsViewModel in English', () => {
    const result = maptoProductDetails([mockProductDetail], Lanuage.English);

    const expected: ProductDetailsViewModel = {
      title: 'Test Product Detail',
      images: ['image1-url', 'image2-url'],
      actualPrice: 'USD 100.00',
      discountedPrice: 'USD 50.00',
      discountPercentage: '50.00%',
      feature: 'Feature 1, Feature 2',
    };

    expect(result).toEqual(expected);
  });

  it('should return undefined if no matching language is found', () => {
    const result = maptoProductDetails([mockProductDetail], Lanuage.Arabic);
    expect(result).toBeUndefined();
  });
});
