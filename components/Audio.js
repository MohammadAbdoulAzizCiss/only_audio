import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BLUE, GRAY, WHITE} from '../colors';
import BluePlay from '../assets/blue_play.svg';
import WhitePlay from '../assets/white_play.svg';
import Check from "../assets/check_circle.svg"
import {Slider} from '@miblanchard/react-native-slider';

export default function Audio({inverted}) {
  return (
    <View
      style={{
        width: 250,
        height: 70,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: inverted ? BLUE : WHITE,
        shadowColor: '#000',
        borderRadius: 10,
        margin: 20,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: inverted ? "flex-start" : "flex-end"
      }}>
      <TouchableOpacity>
        {inverted ? <WhitePlay height="80" /> : <BluePlay height="80" /> }
      </TouchableOpacity>
      <View style={{flex: 1, marginLeft: 10}}>
        <Slider
          maximumTrackTintColor={GRAY}
          minimumTrackTintColor={GRAY}
          thumbStyle={{width: 10, height: 10, backgroundColor: inverted ? WHITE : BLUE}}
          trackStyle={{backgroundColor: GRAY}}
        />
      </View>
      {!inverted && <View style={{width: 40, alignItems: "center"}}>
        <Check/>
      </View>}
    </View>
  );
}
