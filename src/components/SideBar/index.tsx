import React, {type PropsWithChildren} from 'react';
import { Text, View } from 'react-native';

const SideBar: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View>
      <Text>
        Title
      </Text>
      <Text>
        Hello World
      </Text>
    </View>
  );
};

export default SideBar;