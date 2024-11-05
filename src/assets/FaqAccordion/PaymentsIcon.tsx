import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PaymentsIcon(props:any) {
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
        clipPath="url(#clip0_26_14350)"
        stroke="#72788E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7 11a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z" />
        <Path d="M12 14a2 2 0 104 0 2 2 0 00-4 0zM17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2" />
      </G>
      <Defs>
        <ClipPath id="clip0_26_14350">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PaymentsIcon
