import React, {useRef, useState} from 'react';
import {Button, Dimensions, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BLUE, LESS_BLUE} from '../colors';
import Audio from '../components/Audio';
import Container from '../components/Container';
import Mic from '../assets/mic.svg';
import Back from '../assets/back.svg';
import Draggable from 'react-native-draggable';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function Chat() {
  const scrollRef = useRef();
  const [btnSize, setBtnSize] = useState(60);
  const [audio,setAudio] = useState(null)

  const onStartRecord = async () => {
    console.log("starting record");
    try {
      const result = await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener((e) => {
        console.log('Recording . . . ', e.current_position);
        
        setAudio({
          recordSecs: e.currentPosition,
          recordTime: audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition),
          ),
        });
        return;
      });
      console.log(result);
      
    } catch (error) {
      console.log(error);
    }
  };
  
  const onStopRecord = async () => {
    console.log("stoping record");

    try {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setAudio({
        ...audio,
        recordSecs: 0,
      });
      console.log(result);
      
    } catch (error) {
      console.log(error)
    }
  };

  const onStartPlay = async () => {

    console.log('onStartPlay')
    try {
      const msg = await audioRecorderPlayer.startPlayer();
      console.log(msg);
      audioRecorderPlayer.addPlayBackListener((e) => {
        setAudio({
          ...audio,
          currentPositionSec: e.currentPosition,
          currentDurationSec: e.duration,
          playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
          duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        });
        return;
      });
      
    } catch (error) {
      console.log(error);
    }
  };
  
  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };
  
  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

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
      <Button title='play' onPress={onStartPlay} />
          <Button title='Stop' onPress={onStopPlay} />
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
              onPressIn={() => {
                
                onStartRecord()
                setBtnSize(80)}}
              onPressOut={() => {
                onStopRecord()
                setBtnSize(60)}}

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
