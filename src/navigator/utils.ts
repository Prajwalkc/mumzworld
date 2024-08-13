import {useNavigation} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './types';

export function useAppNavigator(): StackNavigationProp<RootStackParamList> {
  return useNavigation<StackNavigationProp<RootStackParamList>>();
}
