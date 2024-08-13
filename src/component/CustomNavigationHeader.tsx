import React, {type ReactElement} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BackArrowIcon} from '../assets';
import colors from '../themes/colors';

interface CustomNavigationHeaderProps {
  headerTitleView: ReactElement;
  showBackIcon: boolean;
  onPress?: () => any;
}

const CustomNavigationHeader: React.FC<CustomNavigationHeaderProps> = ({
  headerTitleView,
  showBackIcon,
  onPress,
}) => {
  return (
    <LinearGradient
      colors={[colors.accentColor, colors.backgroundLight]}
      end={{x: 0, y: 1}}
      locations={[0, 1]}
      useAngle={true}
      angle={87}
      style={styles.mainContainer}>
      {showBackIcon && (
        <Pressable
          onPress={() => {
            onPress?.();
          }}
          style={styles.backButton}>
          <BackArrowIcon height={36} width={36} />
        </Pressable>
      )}
      <View style={styles.headerTextContainer}>
        <View>{headerTitleView}</View>
      </View>
      {showBackIcon && <View style={styles.dummyView} />}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: 'red',
  },
  dummyView: {width: 68, height: 70},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  backButton: {
    padding: 16,
    position: 'relative',
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(CustomNavigationHeader);
