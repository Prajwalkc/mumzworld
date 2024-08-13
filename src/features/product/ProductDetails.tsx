/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  I18nManager,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RNRestart from 'react-native-restart';

import Carousel, {
  type ICarouselInstance,
} from 'react-native-reanimated-carousel';
import Text from '../../component/core/Text';
import View from '../../component/core/View';
import Pagination from '../../component/Pagination';
import useIntl from '../../hooks/useIntl';
import {useProduct} from '../../hooks/useProduct';
import colors from '../../themes/colors';
import {ProductDetailsViewModel} from './types';
import {Lanuage, maptoProductDetails} from './utils';

const ProductDetails: React.FC = () => {
  const PAGE_WIDTH = Dimensions.get('window').width;
  const [indexSeleted, setIndexSelected] = useState<number>(0);
  const carouselRef = useRef<ICarouselInstance | any>();

  const [product, setProduct] = useState<ProductDetailsViewModel | undefined>();

  const {getProductDetails} = useProduct();

  const {translate} = useIntl();

  useEffect(() => {
    const init = async () => {
      const res = await getProductDetails('s');

      if (res) {
        const viewModel = maptoProductDetails(
          res,
          I18nManager.isRTL ? Lanuage.Arabic : Lanuage.English,
        );
        if (viewModel) {
          setProduct(viewModel);
        }
      }
    };
    init();
  }, []);
  const _renderItem = ({item, index}: any) => {
    return (
      <View key={index}>
        <Image
          resizeMethod="scale"
          resizeMode="contain"
          source={{uri: item}}
          style={styles.image}
        />
      </View>
    );
  };

  if (product === null || product === undefined) {
    return <></>;
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Carousel
          width={PAGE_WIDTH}
          height={400}
          ref={carouselRef}
          data={product.images}
          renderItem={_renderItem}
          onProgressChange={(_, absoluteProgress) => {
            setIndexSelected(Math.round(absoluteProgress));
          }}
        />

        <View style={styles.paginationContainer}>
          <Pagination
            onItemSelected={(item: number) => {
              const count = item - indexSeleted;
              carouselRef?.current?.scrollTo({
                count,
                animated: true,
              });
            }}
            steps={product.images.length}
            currentStep={indexSeleted}
          />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.textStyle}>
            {product?.title}
          </Text>
          <Text style={styles.priceStyle}>{product.discountedPrice}</Text>
          <Text style={styles.actualPriceStyle}>{product.actualPrice}</Text>
        </View>
        <View style={styles.featureContainer}>
          <Text style={styles.priceStyle}>
            {translate({
              defaultMessage: 'Features',
              id: 'features',
            })}
          </Text>
          <Text style={styles.featureTextStyle}>{product?.feature}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Pressable
          onPress={() => {
            if (I18nManager.isRTL) {
              I18nManager.forceRTL(false);
              I18nManager.allowRTL(false);
              RNRestart.Restart();
            } else {
              I18nManager.forceRTL(true);
              I18nManager.allowRTL(true);
              RNRestart.Restart();
            }
          }}
          style={styles.bottomChangeLanguage}>
          <Text style={styles.bottomTextStyles}>
            {translate({
              defaultMessage: 'Change',
              id: 'changeLanguage',
            })}
          </Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.bottomButtonContainer}>
          <Text style={styles.bottomTextStyles}>
            {translate({
              defaultMessage: 'Add to cart',
              id: 'addToCart',
            })}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  featureContainer: {padding: 16},
  bottomContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colors.backgroundPrimaryLight,
  },
  bottomButtonContainer: {
    backgroundColor: colors.supportTeal,
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 12,
  },
  bottomChangeLanguage: {
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 12,
  },
  bottomTextStyles: {
    padding: 16,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  actualPriceStyle: {
    alignSelf: 'flex-start',
    color: colors.textPrimary,
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
  priceStyle: {
    alignSelf: 'flex-start',
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 4,
  },
  featureTextStyle: {
    color: colors.textPrimary,
    fontWeight: '300',
    fontSize: 12,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  textContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  textStyle: {
    alignSelf: 'flex-start',
    color: colors.textPrimary,
    fontWeight: '300',
    fontSize: 12,

    paddingBottom: 8,
  },
  paginationContainer: {
    margin: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
