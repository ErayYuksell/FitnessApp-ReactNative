import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Button from '../components/Button'; // .. neden var bilmiyorum

const Welcome = ({navigation}) => {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.header}>Closer Fitness Salonu</Text>
      <Button text="Üye kaydı oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Welcome;
