/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import NeotekCustomTab from '../../components/baseComponents/CustomTab/NeotekCustomTab';
import { styles } from './NeotekContainer.styles';
import type { Theme } from '../../theme/them.types';

const NeotekContainer: React.FC = () => {
  const theme = useTheme<Theme>();

  return (
    <View style={styles.container}>
      <NeotekCustomTab
        text="Iban Verification"
        icon={require('../../../assets/next.png')}
        backgroundColor={theme.colors?.Background}
        borderRadius={20}
        iconColor={theme.colors?.primary}
        screenName="IbanVerification"
      />
      <NeotekCustomTab
        text="Iban Identification"
        icon={require('../../../assets/next.png')}
        backgroundColor={theme.colors?.Background}
        borderRadius={20}
        iconColor={theme.colors?.primary}
        screenName="BulkVerification"
      />
      <NeotekCustomTab
        text="Alias Inquiry"
        icon={require('../../../assets/next.png')}
        backgroundColor={theme.colors?.Background}
        borderRadius={20}
        iconColor={theme.colors?.primary}
        screenName="AliasInquiry"
      />
      <NeotekCustomTab
        text="Income Verification"
        icon={require('../../../assets/next.png')}
        backgroundColor={theme.colors?.Background}
        borderRadius={20}
        iconColor={theme.colors?.primary}
        screenName="IncomeVerification"
      />
    </View>
  );
};

export default NeotekContainer;
