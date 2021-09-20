import React from 'react';
import {
    Image,
} from 'react-native';

export default function QrCode({windowHeightPercent}) {
    return (
      <Image
        source={require('../../assets/QrCode.png')}
        style={{ height: 20*windowHeightPercent, width: 20*windowHeightPercent }}
      />
    )
  }

