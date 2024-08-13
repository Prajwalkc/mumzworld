import React, {FunctionComponent, useState} from 'react';

import {
  LayoutChangeEvent,
  Text as RNText,
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import SkeletonContainer from './SkeletonContainer';

interface ITextProps extends TextProps {
  loading?: boolean;
  skeletonDisabled?: boolean;
  style?: ViewStyle & TextStyle;
  testID?: string;
}

const Text: FunctionComponent<ITextProps> = ({
  loading,
  skeletonDisabled = false,
  testID = 'Text',
  ...props
}) => {
  const [skeletonSize, setSkeletonSize] = useState<{
    width: ViewStyle['width'];
    height: ViewStyle['height'];
  } | null>(null);

  if (loading && !skeletonDisabled) {
    const onLayout = (event: LayoutChangeEvent) => {
      setSkeletonSize({
        width: event.nativeEvent.layout.width,
        height: event.nativeEvent.layout.height,
      });
    };

    const reactNativeTextStyle = StyleSheet.compose(props.style, {
      position: 'absolute',
      color: 'transparent',
    });

    const skeletonStyle: StyleProp<ViewStyle> = StyleSheet.compose(
      props.style,
      {
        height: skeletonSize?.height,
        width: skeletonSize?.width,
        borderRadius: 8,
        alignSelf: props.style?.alignSelf || 'center',
      },
    );

    return (
      <>
        <RNText
          testID={`coretext-${testID}`}
          onLayout={onLayout}
          allowFontScaling={false}
          maxFontSizeMultiplier={1}
          adjustsFontSizeToFit={false}
          {...props}
          style={reactNativeTextStyle}
        />
        {skeletonSize?.width && (
          <SkeletonContainer>
            <View style={skeletonStyle} />
          </SkeletonContainer>
        )}
      </>
    );
  }

  return (
    <RNText
      testID={`coreText-${testID}`}
      allowFontScaling={false}
      maxFontSizeMultiplier={1}
      adjustsFontSizeToFit={false}
      {...props}
    />
  );
};

export default Text;
