import React, {useState} from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('Bilgiler boş bırakılamaz');
      return; //bunu demessem birini boş bıraksamda alert verip diğer ekrana geçer
    }
    const user = {
      //normalde name : username falan demem lazımdı ama bu şekilde direk olması gerekeni anlıyor
      userName,
      userSurname,
      userAge,
      userMail,
    };
    navigation.navigate('MemberResultScreen', {user});
  }
  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder={'Üyenin ismini giriniz... '}
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder={'Üyenin soyadını giriniz... '}
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder={'Üyenin yaşını giriniz... '}
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder={'Üyenin e-posta adresini giriniz... '}
        onChangeText={setUserMail}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
