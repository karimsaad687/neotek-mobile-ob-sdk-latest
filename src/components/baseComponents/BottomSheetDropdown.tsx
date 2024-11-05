import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import type { Theme } from '../../theme/them.types';
import { useTranslation } from 'react-i18next';

interface BottomSheetDropdownProps {
  options: { label: string; value: string }[];
  selectedValue: string | null;
  onValueChange: (value: string) => void;
  placeholder: string;
  title: string; // Add title prop
}

const BottomSheetDropdown: React.FC<BottomSheetDropdownProps> = ({
  options,
  selectedValue,
  onValueChange,
  placeholder,
  title,
}) => {
  const { colors } = useTheme<Theme>();
  const [visible, setVisible] = useState(false);
  const { i18n } = useTranslation();

  const isRtl = i18n.dir() === 'rtl';



  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleOptionSelect = (value: string) => {
    onValueChange(value);
    toggleModal(); // Close modal after selection
  };

  const handleOutsidePress = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
    toggleModal(); // Close modal
  };

  return (
    <View>
<TouchableOpacity
  onPress={toggleModal}
  style={[styles.button, { alignItems: isRtl ? 'flex-end' : 'flex-start', borderColor:colors?.subheading, backgroundColor: colors?.Background,
  }]}
>
          <Text style={[styles.buttonText, { color: colors?.text }]}>
          {selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={visible} animationType="slide">

        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { backgroundColor: colors?.Background,borderColor:colors?.primary,borderWidth:1 }]}>
              <Text style={[styles.title, { color: colors?.text }]}>{title}</Text>

              <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleOptionSelect(item.value)} style={styles.option}>
                    <Text style={[styles.optionText, { color: colors?.text }]}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'flex-start',

    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,



  },
  buttonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  modalContent: {
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    maxHeight: '50%', // Adjust max height as needed
    marginBottom: 20, // Add margin at the bottom of the modal
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign:'center'
  },
  option: {
    padding: 15,
    // No border to create a cleaner look
  },
  optionText: {
    fontSize: 16,
  },
});

export default BottomSheetDropdown;
