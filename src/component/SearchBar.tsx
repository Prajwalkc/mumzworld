import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

import {I18nManager, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';

// import ImageSVG from 'components/core/ImageSVG';
import Touchable from './core/Touchable';

import useIntl from '../hooks/useIntl';

// import {neutrals, shadows} from 'theme/colors';
// import {body} from 'theme/typography';

import {SearchIcon} from '../assets';
import colors from '../themes/colors';
import {shadow} from '../themes/shadow';
import ICommonComponentProps from './types';

export type ISearchBar = {
  searchBarFocus: () => void;
  searchBarBlur: () => void;
  searchBarToggleFocus: () => void;
  isFocused: () => boolean;
  searchBarClear: () => void;
};

interface ISearchBarProps extends ICommonComponentProps {
  onSearchFocus?: () => void;
  onSearchBlur?: () => void;
  value?: string;
  onChangeSearchText?: (value: string) => void;
  onChangeSearchTextCompleted?: (value: string) => void;
}

/**
 * SearchBar component
 *  - Pass a search value and updated it on your usage with onChangeSearchText
 *  - Methods available: searchBarFocus, searchBarBlur, searchBarToggleFocus
 *    to interact on the component easier
 *  - Debounce of 1000ms when search value changed
 */
const SearchBar: ForwardRefRenderFunction<ISearchBar, ISearchBarProps> = (
  {
    style,
    onSearchFocus,
    onSearchBlur,
    onChangeSearchText,
    onChangeSearchTextCompleted,
    value,
    testID,
  },
  forwardedRef,
) => {
  const {translate} = useIntl();

  const textInputRef = useRef<TextInput>(null);

  const onChange = (text: string) => {
    if (onChangeSearchText) {
      onChangeSearchText(text);
    }

    if (onChangeSearchTextCompleted) {
      () => onChangeSearchTextCompleted(text);
    }
  };

  const setSearchBarFocus = () => {
    if (textInputRef?.current?.focus) {
      textInputRef.current.focus();
    }

    if (onSearchFocus) {
      onSearchFocus();
    }
  };

  const setSearchBarBlur = () => {
    if (textInputRef?.current?.focus) {
      textInputRef.current.blur();
    }

    if (onSearchBlur) {
      onSearchBlur();
    }
  };

  const toggleFocused = () => {
    if (textInputRef?.current?.isFocused()) {
      setSearchBarBlur();
    } else {
      setSearchBarFocus();
    }
  };

  const clearSearchBar = () => {
    if (textInputRef?.current?.clear()) {
      textInputRef.current.clear();
    }
  };

  useImperativeHandle(forwardedRef, () => ({
    searchBarFocus() {
      setSearchBarFocus();
    },
    searchBarBlur() {
      setSearchBarBlur();
    },
    searchBarToggleFocus() {
      toggleFocused();
    },
    searchBarClear() {
      clearSearchBar();
    },
    isFocused() {
      return textInputRef?.current?.isFocused() || false;
    },
  }));

  return (
    <Touchable
      style={{...styles.container, ...style}}
      testID={testID ? `${testID}Container` : 'SearchBarContainer'}>
      <SearchIcon
        fill={colors.backgroundLight}
        width={16}
        height={16}
        onPress={() => null}
        style={styles.imageContainer}
      />
      <TextInput
        testID={testID}
        ref={textInputRef}
        autoCorrect={false}
        returnKeyType="done"
        placeholder={translate({
          defaultMessage: 'Search',
          id: 'searchBar.placeholder',
        })}
        onChangeText={onChange}
        onFocus={onSearchFocus}
        clearButtonMode="always"
        style={styles.input}
        onBlur={onSearchBlur}
        value={value}
        placeholderTextColor="rgba(60, 60, 67, 0.6)"
      />
    </Touchable>
  );
};
export default forwardRef(SearchBar);

interface Styles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  input: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    ...shadow,
  },
  imageContainer: {
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    textAlign: I18nManager.isRTL ? 'right' : undefined,
  },
});
