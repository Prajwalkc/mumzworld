import React, {FunctionComponent} from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface ISkeletonContainer {
  children: any;
}

const SkeletonContainer: FunctionComponent<ISkeletonContainer> = ({
  children,
}) => {
  return <SkeletonPlaceholder>{children}</SkeletonPlaceholder>;
};

export default SkeletonContainer;
