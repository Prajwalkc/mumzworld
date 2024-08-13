import React, {type FunctionComponent} from 'react';

import {Pressable, StyleSheet, View, type ViewStyle} from 'react-native';
import colors from '../themes/colors';

interface IPagination {
  steps: number;
  currentStep: number;
  onItemSelected: (itemIndex: number) => void;
}

const Pagination: FunctionComponent<IPagination> = ({
  steps,
  currentStep,
  onItemSelected,
}) => {
  const getCurrentStyle = (step: number): ViewStyle => {
    if (step === currentStep) {
      return styles.currentStep;
    }
    if (step <= currentStep) {
      return styles.step;
    }
    return styles.step;
  };

  const itemSelected = (step: number): void => {
    if (step !== currentStep) {
      onItemSelected(step);
    }
  };

  const stepsArray = Array.from(Array(steps).keys());

  return (
    <View style={styles.stepContainer}>
      {stepsArray.map((step, index) => {
        return (
          <Pressable
            key={`kyc-step-${index}`}
            onPress={() => {
              itemSelected(step);
            }}
            style={
              index === stepsArray.length - 1
                ? undefined
                : styles.stepItemContainer
            }>
            <View style={getCurrentStyle(step)} />
          </Pressable>
        );
      })}
    </View>
  );
};

interface Styles {
  stepContainer: ViewStyle;
  stepItemContainer: ViewStyle;
  currentStep: ViewStyle;
  step: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  stepContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  stepItemContainer: {
    marginRight: 5,
  },
  currentStep: {
    width: 8,
    height: 8,
    borderRadius: 24,
    backgroundColor: colors.supportTeal,
  },
  step: {
    width: 8,
    height: 8,
    borderRadius: 24,
    backgroundColor: colors.textDisabled,
  },
});

export default Pagination;
