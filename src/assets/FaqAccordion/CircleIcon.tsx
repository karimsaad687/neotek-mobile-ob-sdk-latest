import Svg, { Path } from "react-native-svg"

function circleIcon(props:any) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 0A5 5 0 11.005 5.217L0 5l.005-.217A5 5 0 015 0z"
        fill="#72788E"
      />
    </Svg>
  )
}

export default circleIcon
