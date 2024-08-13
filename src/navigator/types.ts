import {type ParamListBase} from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  Auth: any; // ToDo add the type of the params here
  Login: any;
  Company: undefined;
  Tab: any; // ToDo add the type of the params here
  Product: any;
  ProductDetail: any;
}
