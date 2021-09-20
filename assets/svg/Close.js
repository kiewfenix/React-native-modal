import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Close(props) {
  return (
    <Svg
      {...props}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z"
        fill="white"
      />
    </Svg>
  );
}

export default Close;
