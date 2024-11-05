/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NeotekCustomTabProps } from './NeotekCustomTab.types';
import { styles } from './NeotekCustomTab.styles';

const NeotekCustomTab: React.FC<NeotekCustomTabProps> = ({
  text,
  icon,
  backgroundColor,
  borderRadius,
  iconColor,
  buttonStyle,
  textStyle,
  screenName,
}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate(screenName as never); // Type assertion
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderRadius }, buttonStyle]}
      onPress={handleNavigation}
    >
      <View style={styles.content}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        <Image source={icon} style={[styles.icon, { tintColor: iconColor }]} />
      </View>
    </TouchableOpacity>
  );
};

export default NeotekCustomTab;
