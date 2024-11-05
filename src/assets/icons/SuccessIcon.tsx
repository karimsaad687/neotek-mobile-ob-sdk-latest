import Svg, { Circle, G, Rect, Path, Defs } from "react-native-svg"

function SuccessIcon(props:any) {
  return (
    <Svg
      width={199}
      height={199}
      viewBox="0 0 199 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={99.5} cy={99.5} r={99.5} fill="#ECFDF5" />
      <Circle cx={99.4999} cy={99.5004} r={70.4614} fill="#A7F3D0" />
      <G filter="url(#filter0_b_22_5051)">
        <Rect
          x={63.2017}
          y={64.0557}
          width={71.7425}
          height={71.7425}
          rx={35.8712}
          fill="#34D399"
        />
        <Path
          d="M88.61 99.927l7.474 7.473 14.946-14.946"
          stroke="#fff"
          strokeWidth={4.27039}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SuccessIcon
