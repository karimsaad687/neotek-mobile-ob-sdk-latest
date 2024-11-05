import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Button, Icon, useTheme } from 'react-native-paper';
import type { Theme } from '../../../theme/them.types';
import { useTranslation } from 'react-i18next';
import { WP } from '../../../utils/helper';
import type { Status } from '../../../utils/types';

type Language = 'en' | 'ar';

interface NeotekAccountCardProps {
  bankName: string;
  status: Status;
  transactionDate: string;
  expiryDate: string;
  accountsLinkId: string;
  onPressCard?: () => void;
  onManagePress?: (
    accountsLinkId: string,
    transactionDate: string,
    expiryDate: string
  ) => void;
  icon?: React.ComponentType<any>;
  iconProps?: any;
  multiSelect?: boolean;
  onPressCheckBox?: () => void;
  selectedAccountsList?: any;
}

export function NeotekAccountCard({
  bankName,
  status,
  transactionDate,
  expiryDate,
  accountsLinkId,
  onManagePress,
  icon: IconComponent,
  iconProps = {},
  onPressCard,
  onPressCheckBox,
  multiSelect,
  selectedAccountsList = [],
}: NeotekAccountCardProps) {
  const { colors } = useTheme<Theme>();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const getStatusText = (status: Status, lang: Language): string => {
    if (lang === 'ar') {
      return status === 'Active' ? 'نشط' : 'غير نشط';
    }
    return status;
  };

  const statusColor =
    status === 'Active' ? colors?.secondary : colors?.lightpink;

  const handleManagePress = () => {
    if (onManagePress) {
      onManagePress(accountsLinkId, transactionDate, expiryDate);
    }
  };

  const lang = i18n.language as Language;
  const textColor = status === 'Active' ? colors?.positive : colors?.negative;

  return (
    <Pressable
      style={[
        styles.card,
        {
          backgroundColor: colors?.Background,
          shadowColor: colors?.shadow,
        },
      ]}
      onPress={onPressCard}
    >
      <View
        style={[styles.header, isRtl ? styles.headerRtl : styles.headerLtr]}
      >
        <View
          style={{
            flexDirection: i18n?.language == "ar" ? 'row-reverse':'row',
       
            alignItems: 'center',
          }}
        >
          {multiSelect && (
            <Pressable onPress={onPressCheckBox}>
              <Icon
                color={colors?.primary}
                source={
                  selectedAccountsList.length &&
                  selectedAccountsList.some(
                    (selectedItem: any) => selectedItem == accountsLinkId
                  )
                    ? 'checkbox-marked'
                    : 'checkbox-blank-outline'
                }
                size={22}
              />
            </Pressable>
          )}
          <Text style={styles.bankName}>{bankName}</Text>
        </View>

        <TouchableOpacity
          style={[styles.statusButton, { backgroundColor: statusColor }]}
        >
          <Text style={[styles.statusText, { color: textColor }]}>
            {getStatusText(status, lang)}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View
          style={[
            styles.dateContainer,
            isRtl ? styles.dateContainerRtl : styles.dateContainerLtr,
          ]}
        >
          {IconComponent && <IconComponent {...iconProps} />}
          <Text
            style={styles.dateText}
          >{`${t('transaction_from')}: ${transactionDate}`}</Text>
        </View>
        <View
          style={[
            styles.dateContainer,
            isRtl ? styles.dateContainerRtl : styles.dateContainerLtr,
          ]}
        >
          {IconComponent && <IconComponent {...iconProps} />}
          <Text
            style={styles.dateText}
          >{`${t('expiry_date')}: ${expiryDate}`}</Text>
        </View>
      </View>
      {onManagePress && (
        <TouchableOpacity
          style={styles.manageButton}
          onPress={handleManagePress}
        >
          <Button
            mode="contained"
            onPress={handleManagePress}
            style={[styles.manageButton, { backgroundColor: colors?.primary }]}
          >
            <Text
              style={[styles.manageButtonText, { color: colors?.buttonText }]}
            >
              {t('manage')}
            </Text>
          </Button>
        </TouchableOpacity>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRtl: {
    flexDirection: 'row-reverse',
  },
  headerLtr: {
    flexDirection: 'row',
  },
  bankName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusButton: {
    width: '25%', // Set a fixed width
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    justifyContent: 'center', // Center the text within the button
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'center'
  },
  footer: {},
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  dateContainerRtl: {
    flexDirection: 'row-reverse',
  },
  dateContainerLtr: {
    flexDirection: 'row',
  },
  dateText: {
    margin: 8,
    fontSize: 14,
  },
  manageButton: {
    marginTop: 5,
    padding: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  manageButtonText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});
