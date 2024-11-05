import { Dimensions, PixelRatio } from 'react-native';
const widthPercentageToDP = (widthPercent: any) => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: any) => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// Utility function to format dates
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', // Correct type
    month: 'long', // Correct type
    day: 'numeric', // Correct type
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};



export { widthPercentageToDP as WP, heightPercentageToDP as HP };
