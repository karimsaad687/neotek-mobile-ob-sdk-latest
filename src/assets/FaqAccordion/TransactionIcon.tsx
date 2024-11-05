import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TransactionIcon(props:any) {
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
        clipPath="url(#clip0_26_14373)"
        stroke="#72788E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M16 3l4 4-4 4M10 7h10M8 13l-4 4 4 4M4 17h9" />
      </G>
      <Defs>
        <ClipPath id="clip0_26_14373">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TransactionIcon
