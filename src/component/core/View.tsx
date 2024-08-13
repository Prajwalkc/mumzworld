import React, {FunctionComponent} from 'react';

import {
  View as RNView,
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';

import SkeletonContainer from './SkeletonContainer';

interface IViewProps extends ViewProps {
  loading?: boolean;
  skeletonDisabled?: boolean;
  style?: ViewStyle | StyleProp<ViewStyle>;
}

const View: FunctionComponent<IViewProps> = ({
  loading,
  skeletonDisabled = false,
  ...props
}) => {
  if (loading && !skeletonDisabled) {
    const viewStyle = StyleSheet.compose(props.style, {borderRadius: 8});
    return (
      <SkeletonContainer>
        <RNView {...props} style={viewStyle} />
      </SkeletonContainer>
    );
  }

  return <RNView {...props} />;
};

export default View;
