import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { ChildrenDTO } from '../children/children.interface';

export type propsNavigationStack = {
  Children: undefined;
  Cults: undefined;
  Login: undefined;
  Check: {
    children: ChildrenDTO;
  };
  SelectChildren: {
    name: string;
  };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

export type CheckScreenNavigationProp = RouteProp<
  propsNavigationStack,
  'Check'
>;

export type CultsScreenNavigationProp = NativeStackNavigationProp<
  propsNavigationStack,
  'Cults'
>;

export type SelectChildrenScreenRouteProp = RouteProp<
  propsNavigationStack,
  'SelectChildren'
>;
