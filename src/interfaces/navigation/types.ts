import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type propsNavigationStack = {
  Children: undefined;
  Cults: undefined;
  Login: undefined;
  SelectChildren: {
    name: string;
  };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

export type SelectChildrenScreenNavigationProp = NativeStackNavigationProp<
  propsNavigationStack,
  'SelectChildren'
>;

export type CultsScreenNavigationProp = NativeStackNavigationProp<
  propsNavigationStack,
  'Cults'
>;

export type SelectChildrenScreenRouteProp = RouteProp<
  propsNavigationStack,
  'SelectChildren'
>;
