import Svg, { G, Path } from 'react-native-svg';

function Check(props: any) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 -1.5 20.412 20.412"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M7 4L4.33 7 3 5.5" transform="translate(-1.588 -2.588)" />
        <Path
          data-name="primary"
          d="M3 11.5L4.33 13 7 10M3 17.5L4.33 19 7 16M11 6h10m-10 6h10m-10 6h10"
          transform="translate(-1.588 -2.588)"
        />
      </G>
    </Svg>
  );
}

export default Check;
