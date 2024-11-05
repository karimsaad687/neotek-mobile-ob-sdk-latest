import { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  type GestureResponderEvent,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import SuccessIcon from '../../../assets/icons/SuccessIcon';
import ErrorIcon from '../../../assets/icons/errorIcon';
import type { Theme } from '../../../theme/them.types';
import { HP, WP } from '../../../utils/helper';

type AlertType = 'success' | 'error' | 'warning';

interface ToastProps {
  alertType?: AlertType; // Use AlertType instead of any
  message: string;
  buttonText?: string;
  onBackPress: (event?: GestureResponderEvent) => void;
  displayDuration?: number;
  showButton?: boolean;
}

const Toast: React.FC<ToastProps> = ({
  alertType = 'success',
  message,
  buttonText = 'Back',
  onBackPress,
  displayDuration = 3000,
  showButton = true,
}) => {
  const { colors } = useTheme<Theme>();

  const alertIcons = {
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    warning: require('../../../assets/toastscreen/warning.png'),
  };

  useEffect(() => {
    if (!showButton) {
      const timer = setTimeout(() => {
        onBackPress();
      }, displayDuration);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [displayDuration, showButton, onBackPress]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: '#f0f0f0' },
        !showButton && styles.centerContent,
      ]}
    >
      <Animatable.View
        animation="bounceIn"
        duration={1500}
        style={styles.iconContainer}
      >
        {alertIcons[alertType]}
      </Animatable.View>
      <Text style={[styles.message, { color: colors?.heading }]}>
        {message}
      </Text>
      {showButton && (
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: colors?.primary }]}
          onPress={onBackPress}
        >
          <Text style={styles.backButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP(100),
    height: HP(50),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  centerContent: {
    justifyContent: 'center',
  },
  iconContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: '500', // Use string instead of number for fontWeight
    marginVertical: 50,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    bottom: 40,
    width: '80%',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Toast;
