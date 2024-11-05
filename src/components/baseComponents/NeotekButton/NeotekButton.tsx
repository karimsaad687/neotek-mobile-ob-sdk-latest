import React, { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

// Define props interface
interface NeotekButtonProps {
  text: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'expired' | 'active';
  style?: any; // Adjust as per your specific style prop
}

const NeotekButton: React.FC<NeotekButtonProps> = ({
  text,
  onPress,
  variant = 'primary',
  style,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    onPress(); // Call the onPress function passed as prop
  };

  let buttonBackground = '#3498db'; // Default background color

  switch (variant) {
    case 'active':
      buttonBackground = '#27ae60'; // Green color
      break;
    case 'secondary':
      buttonBackground = '#8e44ad'; // Purple color
      break;
    case 'danger':
      buttonBackground = '#c0392b'; // Red color
      break;
    case 'expired':
      buttonBackground = '#f39c12'; // Orange color
      break;
    default:
      buttonBackground = '#3498db'; // Blue color
      break;
  }

  return (
    <Pressable
      onPressIn={handlePress}
      style={[
        styles.button,
        { backgroundColor: buttonBackground, opacity: isPressed ? 0.6 : 1 },
        style,
      ]}
      onPressOut={handlePress}
    >
      <Text style={{ color: variant === 'primary' ? '#000000' : '#ffffff' }}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default NeotekButton;
