import * as React from 'react';
import Svg, { type SvgProps, G, Rect, Path } from 'react-native-svg';

interface BuildingBankProps extends SvgProps {
  stroke?: string;
  fill?: string;
}

export const BuildingBank: React.FC<BuildingBankProps> = ({
  stroke = '#F36D21',
  fill = '#FFE4D4',
  ...props
}) => (
  <Svg width={46} height={46} viewBox="0 0 46 46" fill="none" {...props}>
    <G style={{ mixBlendMode: 'multiply' }}>
      <Rect x="3" y="3" width="40" height="40" rx="20" fill={fill} />
      <Rect
        x="3"
        y="3"
        width="40"
        height="40"
        rx="20"
        stroke={fill}
        strokeWidth="6"
      />
      <Path
        d="M19.2501 22.1667H16.8334C16.3667 22.1667 16.1333 22.1667 15.9551 22.2575C15.7983 22.3374 15.6708 22.4649 15.5909 22.6217C15.5001 22.7999 15.5001 23.0333 15.5001 23.5V30.5M26.7501 22.1667H29.1667C29.6335 22.1667 29.8668 22.1667 30.0451 22.2575C30.2019 22.3374 30.3294 22.4649 30.4093 22.6217C30.5001 22.7999 30.5001 23.0333 30.5001 23.5V30.5M26.7501 30.5V18.1667C26.7501 17.2332 26.7501 16.7665 26.5684 16.41C26.4086 16.0964 26.1537 15.8414 25.8401 15.6817C25.4835 15.5 25.0168 15.5 24.0834 15.5H21.9167C20.9833 15.5 20.5166 15.5 20.1601 15.6817C19.8465 15.8414 19.5915 16.0964 19.4317 16.41C19.2501 16.7665 19.2501 17.2332 19.2501 18.1667V30.5M31.3334 30.5H14.6667M22.1667 18.8333H23.8334M22.1667 22.1667H23.8334M22.1667 25.5H23.8334"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
