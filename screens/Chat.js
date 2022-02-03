import React, {useRef} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BLUE, LESS_BLUE} from '../colors';
import Audio from '../components/Audio';
import Container from '../components/Container';
import Mic from '../assets/mic.svg';
import Back from '../assets/back.svg';

export default function Chat() {
  const scrollRef = useRef();
  return (
    <Container>
      <View
        style={{
          height: 80,
          backgroundColor: LESS_BLUE,
          flexDirection: "row",
          padding: 10,
          alignItems: "center"
        }}>
          <TouchableOpacity>
            <Back/>
          </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Text style={{color: BLUE, fontWeight: "bold"}}>Modou Ndiaye</Text>
          <Text>En ligne</Text>
        </View>

        </View>
      <ScrollView
        ref={r => (scrollRef.current = r)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          scrollRef.current.scrollToEnd({animated: true});
        }}>
        <Audio />
        <Audio inverted />
        <Audio />
        <Audio inverted />

        <Audio />
        <Audio inverted />

        <Audio />
        <Audio inverted />

        <Audio />
        <Audio inverted />
      </ScrollView>

      <View
        style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: LESS_BLUE,
        }}>
        <View>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
              backgroundColor: BLUE,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Mic />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
