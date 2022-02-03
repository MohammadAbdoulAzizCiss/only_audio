import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Container from '../components/Container';
import Logo from '../assets/onlyAudio.svg';

const OTPScreen = () => {
  const styles = StyleSheet.create({
    otp__text: {
      fontSize: 22,
      fontWeight: 'bold',
    },
  });
  return (
    <Container>
      <Logo width={182} height={70} />
      <Text style={styles.otp__text}>Saisissez le code reçu par sms</Text>
    </Container>
  );
};

export default OTPScreen;
