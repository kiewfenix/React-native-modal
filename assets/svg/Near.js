import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function Near(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path d="M7.998 0a8 8 0 11-.001 15.999A8 8 0 017.998 0z" fill="#000" />
        <Path
          d="M10.358 4.68L8.725 7.107c-.114.165.104.364.26.225l1.608-1.398c.043-.035.104-.008.104.053v4.37c0 .061-.078.087-.113.043L5.717 4.577a.807.807 0 00-.633-.296H4.91a.833.833 0 00-.826.833v6.15a.834.834 0 001.545.434l1.635-2.42c.114-.165-.104-.365-.26-.225l-1.608 1.39c-.043.035-.104.008-.104-.053V6.028c0-.061.078-.087.113-.044l4.865 5.822c.157.19.39.296.633.296h.175c.46 0 .833-.375.833-.834V5.116a.84.84 0 00-1.553-.435z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v15.998H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Near;
