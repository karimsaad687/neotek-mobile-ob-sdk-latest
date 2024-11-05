import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function AccountDetailsIcon(props:any) {
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
        clipPath="url(#clip0_26_14280)"
        stroke="#72788E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3 7a3 3 0 013-3h12a3 3 0 013 3v10a3 3 0 01-3 3H6a3 3 0 01-3-3V7z" />
        <Path d="M7 10a2 2 0 104 0 2 2 0 00-4 0zM15 8h2M15 12h2M7 16h10" />
      </G>
      <Defs>
        <ClipPath id="clip0_26_14280">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AccountDetailsIcon
