/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, I18nManager, Pressable } from 'react-native';
import { Icon, useTheme } from 'react-native-paper'; // Import useTheme from react-native-paper
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: String;
  backgroundColor?: any;
  leftIcon?: String;
  rightIcon?: String;
  onPressRightIcon?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  backgroundColor,
  leftIcon,
  rightIcon,
  onPressRightIcon,
}) => {
  //const { language, setLanguage } = useLanguage(); // Use the context
  const { colors } = useTheme(); // Get theme colors
  const navigation = useNavigation();
  const back = () => {
    navigation.goBack();
  };
  // const changeLanguage = () => {
  //   const newLanguage = language === 'en' ? 'ar' : 'en';

  //   setLanguage(newLanguage);
  //   I18nManager.forceRTL(newLanguage === 'ar');
  //   // Note: You might need to reload the app or reset your state for the changes to take effect.
  // };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : colors.background,
        },
      ]}
    >
      {/* <TouchableOpacity onPress={changeLanguage} style={styles.button}>
        <Text style={styles.buttonText}>
          {language === 'ar' ? 'EN' : 'العربيه'}
        </Text>
      </TouchableOpacity> */}
      {leftIcon == 'back' && (
        <Pressable onPress={back}>
          <Icon size={24} source={'arrow-left'} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon == 'filter' ? (
        <Pressable onPress={onPressRightIcon}>
          <Icon size={24} source={'filter'} />
        </Pressable>
      ) : rightIcon == 'reload' ? (
        <Pressable onPress={onPressRightIcon}>
          <Icon size={24} source={'reload'} />
        </Pressable>
      ) : (
        <Pressable></Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  button: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#03dac6',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Header;
