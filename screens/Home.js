import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../components/Container';
import Audio from '../assets/audio.svg';
import Logo from '../assets/onlyAudio.svg';
import { BLUE } from '../colors';
import Play from "../assets/play_arrow.svg"

export default function Home() {
  return (
    <Container>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <View style={{alignItems: 'center', height: 150, justifyContent: "space-between"}}>
          <Audio width="100" />
          <Logo />
        <Text style={{fontSize: 12, marginTop: 20}}>let's keep it <Text style={{color: BLUE}}>human</Text> </Text>
        </View>
        <TouchableOpacity style={{width: 60, height: 60, borderRadius: 60, backgroundColor: BLUE,position: "absolute", bottom: 30, alignItems: "center", justifyContent: "center"}}>
            <Play/>
        </TouchableOpacity>
      </View>

    </Container>
  );
}
