import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from '../assets/icons/Calender';
import { useTranslation } from 'react-i18next';

interface TransactionCardProps {
  transactionDate: string;
  expiryDate: string;
  iconColor?: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  transactionDate,
  expiryDate,
  iconColor = '#1F4FDE',
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <View style={styles.card}>
      {/* Transaction Date Row */}
      <View style={[styles.row, isRTL && styles.rowReverse]}>
        <View style={styles.iconContainer}>
          <Calendar fill={iconColor} />
        </View>
        <Text style={[styles.text, isRTL && styles.textRight]}>
          {t('transaction.from')}
        </Text>
        <Text style={[styles.date, isRTL && styles.textRight]}>
          {transactionDate}
        </Text>
      </View>

      {/* Expiry Date Row */}
      <View style={[styles.row, isRTL && styles.rowReverse]}>
        <View style={styles.iconContainer}>
          <Calendar fill={iconColor} />
        </View>
        <Text style={[styles.text, isRTL && styles.textRight]}>
          {t('transaction.expiry_date')}
        </Text>
        <Text style={[styles.date, isRTL && styles.textRight]}>
          {expiryDate}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  textRight: {
    textAlign: 'right',
  },
});

export default TransactionCard;
