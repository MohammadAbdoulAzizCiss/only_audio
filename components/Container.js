import React from 'react';
import {View} from 'react-native';
import {LESS_BLUE} from '../colors';

export default function Container({children}) {
  return <View style={{backgroundColor: LESS_BLUE, flex: 1}}>{children}</View>;
}
