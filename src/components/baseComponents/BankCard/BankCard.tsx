import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, I18nManager } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AlrajhiBankIcon from '../../../assets/bankIcons/AlrajhiBankIcon';
import AlinmaBankIcon from '../../../assets/bankIcons/AlinmaBankIcon';
import BanqueSaudiFransiIcon from '../../../assets/bankIcons/BanqueSaudiFransiIcon';
import SamaModelBankIcon from '../../../assets/bankIcons/SamaModelBankIcon';
import { useTheme } from 'react-native-paper';
import { type Theme } from '../../../theme/them.types';

type BankIconType = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

const bankIcons: BankIconType = {
  'Alrajhi Bank': AlrajhiBankIcon,
  'Alinma Bank': AlinmaBankIcon,
  'Banque Saudi Fransi': BanqueSaudiFransiIcon,
  'SAMA Model Bank': SamaModelBankIcon,
};

type BankCardProps = {
  bank: {
    id: string;
    nameEn: string;
    nameAr: string;
  };
  isSelected: boolean;
  onSelect: () => void;
};

const MAX_BANK_NAME_LENGTH = 25;

const isBankNameValid = (bankName: string) => {

  return bankName && bankName.length <= MAX_BANK_NAME_LENGTH;
};

const truncateBankName = (name: string, maxLength: number) => {
  return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
};

const BankCard: React.FC<BankCardProps> = ({ bank, isSelected, onSelect }) => {
  const { colors } = useTheme<Theme>();

  const bankName = I18nManager.isRTL ? bank.nameAr : bank.nameEn;
  const validBankName = isBankNameValid(bankName) ? bankName : 'Invalid Bank Name';
  const displayBankName = truncateBankName(validBankName, MAX_BANK_NAME_LENGTH);
  const BankIcon = bankIcons[bank.nameEn as keyof typeof bankIcons];

  return (
    <TouchableOpacity
      style={[
        styles.bankCard,
        { backgroundColor: isSelected ? colors?.buttonText : colors?.Background },
      ]}
      onPress={onSelect}
    >
      <View style={styles.bankInfo}>
        <View style={styles.iconContainer}>
          {BankIcon ? <BankIcon width={40} height={40} /> : null}
        </View>
        <View style={styles.bankNameContainer}>
          <Text style={styles.bankName}>{displayBankName}</Text>
        </View>
      </View>
      <RadioButton
        value={bank.id}
        status={isSelected ? 'checked' : 'unchecked'}
        onPress={onSelect}
        color={colors?.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bankCard: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  bankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginEnd : 10,
  },
  bankNameContainer: {
    justifyContent: 'center',
  },
  bankName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default BankCard;
