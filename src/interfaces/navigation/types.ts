import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChildrenDTO} from '../children/children.interface';

export type propsNavigationStack = {
  Childrens: undefined;
  Cults: undefined;
  Check: {
    children: ChildrenDTO;
    cultId: string;
  };
  SelectChildren: {
    cultId: string;
  };
};

export type propsNavigationDrawer = {
  Childrens: undefined;
  CultsStack: undefined;
  Login: undefined;
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

export type SelectScreenNavigationProp = NativeStackNavigationProp<
  propsNavigationStack,
  'SelectChildren'
>;

export type SelectChildrenScreenRouteProp = RouteProp<
  propsNavigationStack,
  'SelectChildren'
>;
