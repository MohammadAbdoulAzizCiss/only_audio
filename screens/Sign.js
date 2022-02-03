import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import Container from '../components/Container';
import Logo from '../assets/onlyAudio.svg';
import {WHITE} from '../colors';

const OTPScreen = () => {
  const [text, onChangeText] = React.useState('Useless Text');
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
  return (
    <Container>
      <View style={styles.otp__display}>
        <Logo width={182} height={70} />
        <Text style={styles.otp__text}>Authentifiez vous pour continuer</Text>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{margin: 20, fontSize: 22, fontWeight: 'bold'}}>
          Numero de telephone
        </Text>
        <TextInput style={{width: '80%', backgroundColor: WHITE}} />
        <Button
          style={{width: '80%'}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </Container>
  );
};

export default OTPScreen;
