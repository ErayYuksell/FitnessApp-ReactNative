import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={style.message}>Kayıt Tamamlandı!</Text>
      <Text style={style.label}>Üye Adı: {user.userName}</Text>
      <Text style={style.label}>Üye Soyadı: {user.userSurname}</Text>
      <Text style={style.label}>Üye Yaşı: {user.userAge}</Text>
      <Text style={style.label}>Üye Maili: {user.userMail}</Text>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  message: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
export default MemberResult;
