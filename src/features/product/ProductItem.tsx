import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from '../../component/core/Text';
import View from '../../component/core/View';
import colors from '../../themes/colors';
import {ProductViewModel} from './types';

interface IProductItemProps {
  item: ProductViewModel;
  onProductSelected: () => void;
}

const ProductItem: React.FC<IProductItemProps> = ({
  item,
  onProductSelected,
}) => {
  return (
    <Pressable onPress={onProductSelected} style={styles.mainView}>
      <View style={styles.imageContainer}>
        <FastImage source={{uri: item.image}} style={styles.imageStyle} />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.textStyle}>
          {item.title}
        </Text>
        <Text style={styles.priceStyle}>{item.discountedPrice}</Text>
        <Text style={styles.actualPriceStyle}>{item.actualPrice}</Text>
      </View>
      {item.discountPercentage && (
        <View style={styles.discountPercentageContainer}>
          <Text style={styles.discountPercentageText}>
            {item.discountPercentage}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  imageStyle: {
    aspectRatio: 4 / 3,
  },
  saleContainer: {
    position: 'absolute',
    marginRight: 8,
    alignSelf: 'flex-end',
    backgroundColor: colors.error,
    borderRadius: 12,
  },
  discountPercentageContainer: {
    position: 'absolute',
    margin: 8,
    backgroundColor: colors.error,
    borderRadius: 12,
  },
  discountPercentageText: {
    padding: 4,
    fontSize: 12,
    fontWeight: '500',
    color: colors.backgroundLight,
  },
  imageContainer: {padding: 16, backgroundColor: 'white'},
  textContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  textStyle: {
    alignSelf: 'flex-start',
    color: colors.textPrimary,
    fontWeight: '300',
    fontSize: 12,
    textAlign: 'left',
    paddingBottom: 8,
  },
  actualPriceStyle: {
    alignSelf: 'flex-start',
    color: colors.textPrimary,
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
  mainView: {
    flex: 1,
    padding: 1,
    backgroundColor: colors.backgroundLight,
  },
  priceStyle: {
    alignSelf: 'flex-start',
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 4,
  },
  headerStyle: {
    color: 'red',
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
  },
});
