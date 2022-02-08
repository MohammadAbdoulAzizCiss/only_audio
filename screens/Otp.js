import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Container from '../components/Container';
import Logo from '../assets/onlyAudio.svg';
import OtpInputs from 'react-native-otp-inputs';
import {WHITE} from '../colors';

const OTPScreen = ({navigation, route}) => {
  const {confirmation} = route.params;
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
    shadowProp: {
      flex: 2,
      flexDirection: 'row',
    },
  });

  async function confirmCode(code) {
    try {
      await confirmation.confirm(code);
      navigation.navigate('Discussions');
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <Container>
      <View style={styles.otp__display}>
        <Logo width={182} height={70} />
        <Text style={styles.otp__text}>Saisissez le code reçu par sms</Text>
        <OtpInputs
          style={styles.shadowProp}
          handleChange={code =>
            code.length === 6 ? confirmCode(code) : console.log('not yet')
          }
          numberOfInputs={6}
          keyboardType="phone-pad"
          autoFocus
          inputStyles={{
            margin: 10,
            padding: 10,
            backgroundColor: WHITE,
            borderRadius: 10,
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}
        />
      </View>
    </Container>
  );
};

export default OTPScreen;
