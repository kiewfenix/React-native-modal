import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DownloadIcon(props) {
    return (
      <Svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path d="M12 10H9V0H7v10H4l4 4 4-4zM0 16v2h16v-2H0z" fill="#1971F7" />
      </Svg>
    );
}

export default DownloadIcon;
