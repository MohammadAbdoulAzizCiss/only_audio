import React, {useRef, useState} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BLUE, LESS_BLUE} from '../colors';
import Audio from '../components/Audio';
import Container from '../components/Container';
import Mic from '../assets/mic.svg';
import Back from '../assets/back.svg';
import Draggable from 'react-native-draggable';

export default function Chat() {
  const scrollRef = useRef();
  const [btnSize, setBtnSize] = useState(60);
  return (
    <Container>
      <View
        style={{
          height: 80,
          backgroundColor: LESS_BLUE,
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Back />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Text style={{color: BLUE, fontWeight: 'bold'}}>Modou Ndiaye</Text>
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
          //justifyContent: 'center',
          backgroundColor: LESS_BLUE,
        }}>
        <View>
          <Draggable 
            shouldReverse 
            x={Dimensions.get('screen').width /2 - 30} 
            maxX={Dimensions.get('screen').width -5} 
            minX={5} 
            
            >
            <TouchableOpacity
              activeOpacity={1}
              onPressIn={() => setBtnSize(80)}
              onPressOut={() => setBtnSize(60)}

              style={{
                width: btnSize,
                height: btnSize,
                borderRadius: btnSize,
                backgroundColor: BLUE,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Mic />
            </TouchableOpacity>
          </Draggable>
        </View>
      </View>
    </Container>
  );
}
