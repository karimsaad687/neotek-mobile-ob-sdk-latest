import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ContactIcon(props:any) {
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
        clipPath="url(#clip0_26_14397)"
        stroke="#72788E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M14 3v4a1 1 0 001 1h4" />
        <Path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 17h6M9 13h6" />
      </G>
      <Defs>
        <ClipPath id="clip0_26_14397">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ContactIcon
