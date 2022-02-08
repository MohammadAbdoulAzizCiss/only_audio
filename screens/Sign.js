import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Container from '../components/Container';
import Logo from '../assets/onlyAudio.svg';
import {WHITE, BLUE} from '../colors';
import auth from '@react-native-firebase/auth';

const OTPScreen = ({navigation}) => {
  const [number, setNumber] = React.useState('');
  const styles = StyleSheet.create({
    otp__display: {
      margin: 60,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    otp__text: {
      margin: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      navigation.navigate('Otp', {confirmation});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <View style={styles.otp__display}>
        <Logo width={182} height={70} />
        <Text style={styles.otp__text}>Authentifiez vous pour continuer</Text>
      </View>
      <View
        style={{
          flex: 4,
          alignItems: 'center',
          width: '80%',
          alignSelf: 'center',
        }}>
        <Text style={{margin: 20, fontSize: 22, fontWeight: 'bold'}}>
          Numéro de téléphone
        </Text>
        <TextInput
          style={{
            width: '100%',
            backgroundColor: WHITE,
            marginBottom: 40,
            fontSize: 18,
            fontWeight: 'bold',
          }}
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
        />
        <TouchableOpacity
          style={{
            backgroundColor: BLUE,
            width: '100%',
            height: 51,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => signInWithPhoneNumber(number)}>
          <Text style={{color: WHITE, fontWeight: 'bold', fontSize: 18}}>
            CONTINUER
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default OTPScreen;
