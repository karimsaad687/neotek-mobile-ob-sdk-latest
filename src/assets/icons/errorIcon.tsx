import Svg, { Circle, G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function errorIcon(props:any) {
  return (
    <Svg
      width={199}
      height={199}
      viewBox="0 0 199 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={99.5} cy={99.5} r={99.5} fill="#FEF2F2" />
      <Circle cx={99.4999} cy={99.5004} r={70.4614} fill="#FECACA" />
      <G filter="url(#filter0_b_23_6613)">
        <Rect
          x={63.2017}
          y={64.0557}
          width={71.7425}
          height={71.7425}
          rx={35.8712}
          fill="#EF4444"
        />
        <G
          clipPath="url(#clip0_23_6613)"
          stroke="#fff"
          strokeWidth={2.91667}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M107.25 91.75l-17.5 17.5M89.75 91.75l17.5 17.5" />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_23_6613">
          <Path fill="#fff" transform="translate(81 83)" d="M0 0H35V35H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default errorIcon
