import React from 'react';
import {
  Image,
} from 'react-native';
import DownloadIcon from '../../assets/svg/Download'

export default function Download({ windowHeightPercent }) {
  return (
    <DownloadIcon
      height={4 * windowHeightPercent}
      width={4 * windowHeightPercent} />
  )
}