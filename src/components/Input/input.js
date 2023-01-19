import React from 'react';
import {TextInput, View, Text} from 'react-native';
import style from './input.style';

const input = ({label, placeholder, onChangeText}) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <View style={style.inner_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </View>
  );
};

export default input;
