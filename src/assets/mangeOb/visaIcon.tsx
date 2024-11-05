import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function VisaIcon(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_68_17443)"
        stroke="#72788E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V8zM3 10h18M7 15h.01M11 15h2" />
      </G>
      <Defs>
        <ClipPath id="clip0_68_17443">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default VisaIcon;
