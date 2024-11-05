import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { HP, WP } from '../../../utils/helper';
import { useTranslation } from 'react-i18next';




interface CustomTextInputProps {
  dateValue: Date;
  setDateValue: any;
  title: String;
}

const NeotekDatePicker: React.FC<CustomTextInputProps> = ({
  title,
  dateValue,
  setDateValue,
}) => {
  const [datePickerOpen, setDatePickerOpen] = React.useState<boolean>(false);
  const { i18n } = useTranslation();


  const isRtl = i18n.dir() === 'rtl';

  const onChange = ( selectedDate: any) => {
    // const currentDate = selectedDate || new Date();
    setDatePickerOpen(false);
    setDateValue(selectedDate);
  };

  return (
    <>
      <Pressable
        onPress={() => setDatePickerOpen(true)}
        style={{
          borderRadius: 1,
          borderColor: 'gray',
          borderWidth: 0.1,
          flexDirection: isRtl?'row-reverse':'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: WP(1),
          paddingVertical: HP(1),
          height: HP(8),
          marginBottom: HP(2),
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          <Text style={{          textAlign: isRtl?'right':'left',
}}>{moment(dateValue).format('DD-MM-YY')}</Text>
        </View>
        <Icon size={24} source={'calendar'} />
      </Pressable>
      {datePickerOpen && (
        <DateTimePicker
          value={dateValue}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default NeotekDatePicker;
