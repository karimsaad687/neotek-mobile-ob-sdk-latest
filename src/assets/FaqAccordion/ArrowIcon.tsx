import Svg, { Path } from "react-native-svg"

function ArrowIcon(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 14.896L12.354 9.25a.5.5 0 00-.708 0L6 14.896"
        stroke="#72788E"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default ArrowIcon

