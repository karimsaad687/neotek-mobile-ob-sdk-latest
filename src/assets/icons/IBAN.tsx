import * as React from 'react';
import Svg, { type SvgProps, Path } from 'react-native-svg';

interface IBANProps extends SvgProps {
  fillColor1?: string; // Color for the first Path element
  fillColor2?: string; // Color for the second Path element
  xmlns?: String;
  xmlSpace?: String;
}

const IBAN: React.FC<IBANProps> = ({
  fillColor1 = '#1b75bc',
  fillColor2 = '#00bbb4',
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M23.478 5H2.128C1.506 5 1 5.505 1 6.129v14.108c0 .623.505 1.128 1.129 1.128h21.349c.623 0 1.129-.505 1.129-1.128V6.129c0-.624-.506-1.129-1.13-1.129zm-9.674 12.324v.696a1 1 0 1 1-2 0v-.565a2.292 2.292 0 0 1-.841-.502c-.338-.324-.74-.91-.74-1.875a1 1 0 1 1 2 0c0 .458.197.52.409.52.209 0 .752-.139.752-.774 0-.475-.27-.684-1.203-1.156-.818-.414-1.937-.98-1.937-2.324 0-1.188.581-2.07 1.56-2.417v-.582a1 1 0 1 1 2 0v.663c.64.278 1.131.74 1.391 1.1a1 1 0 0 1-1.617 1.178c-.02-.028-.503-.638-1.053-.5-.11.028-.28.07-.28.558.063.147.549.393.839.54.916.463 2.3 1.164 2.3 2.94 0 1.222-.698 2.088-1.58 2.5z"
      fill={fillColor1}
    />
    <Path
      d="M29.871 10.634h-4.265v9.603a2.131 2.131 0 0 1-2.128 2.129H7.393v3.505c0 .624.506 1.129 1.13 1.129H29.87c.624 0 1.129-.505 1.129-1.129V11.763c0-.623-.505-1.129-1.129-1.129z"
      fill={fillColor2}
    />
  </Svg>
);

export default IBAN;
