import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Controller} from 'react-hook-form';
import {PropsInput} from './interface';
import { TextInput } from './styles';

export default function Input({
  name,
  control,
  rules,
  placeholder,
  error,
  secureTextEntry
}: PropsInput) {
  const style = StyleSheet.create({
    content: {
      width: '100%',
      height: 60,
      marginTop: 20,
      borderWidth: 1,
      borderColor: error ? '#c81717' : '#c7c7c7',
      borderRadius: 12,
    }
  });

  return (
    <View style={style.content}>
      <Controller
        name={name}
        control={control}
        rules={rules || {}}
        render={({field}) => (
          <TextInput
            value={field.value}
            error={Boolean(error)}
            placeholder={placeholder}
            onChangeText={field.onChange}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
    </View>
  );
}
