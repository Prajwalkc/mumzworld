import React, {FunctionComponent} from 'react';

import {TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';

import SkeletonContainer from './SkeletonContainer';

interface ITouchableProps extends TouchableOpacityProps, ViewStyle {
  loading?: boolean;
  skeletonDisabled?: boolean;
}

export const Touchable: FunctionComponent<ITouchableProps> = ({
  loading,
  skeletonDisabled = false,
  ...props
}) => {
  if (loading && !skeletonDisabled) {
    return (
      <SkeletonContainer>
        <TouchableOpacity style={props?.style} />
      </SkeletonContainer>
    );
  }

  return <TouchableOpacity {...props} />;
};

export default Touchable;
