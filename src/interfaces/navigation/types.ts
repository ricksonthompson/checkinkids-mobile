import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type propsNavigationStack = {
  Children: undefined;
  Cults: undefined;
  SelectChildren: {
    name: string;
  };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

export type SelectChildrenScreenNavigationProp = NativeStackNavigationProp<
  propsNavigationStack,
  'SelectChildren'
>;

export type SelectChildrenScreenRouteProp = RouteProp<
  propsNavigationStack,
  'SelectChildren'
>;
