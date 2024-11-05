import React, { useState } from 'react';
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
import Card from '../../../assets/icons/Card';
import Check from '../../../assets/icons/check';

interface NeotekStatemtnCardProps {
  bankName: string;
  status: string;
  transactionDate: string;
  expiryDate: string;
  accountsLinkId: string;
  accountId?: string;
  onPressCard?: () => void;
  onManagePress?: (
    accountsLinkId: string,
    transactionDate: string,
    expiryDate: string
  ) => void; // Updated
  icon?: React.ComponentType<any>;
  iconProps?: any;
  multiSelect?: boolean;
}
export function NeotekStatemntCard({
  bankName,
  status,
  transactionDate,
  expiryDate,
  accountsLinkId,
  accountId,
  onManagePress,
  onPressCard,
  multiSelect,
}: NeotekStatemtnCardProps) {
  const [checked, setChecked] = useState<Boolean>(false);
  const { colors } = useTheme<Theme>();
  const { t, i18n } = useTranslation();
  const statusColor = status === 'Active' ? colors?.positive : colors?.negative;
  const isRtl = i18n.dir() === 'rtl';
  const handleManagePress = () => {
    if (onManagePress) {
      onManagePress(accountsLinkId, transactionDate, expiryDate);
    }
  };

  return (
    <Pressable style={styles.card} onPress={onPressCard}>
      <View
        style={[styles.header, isRtl ? styles.headerRtl : styles.headerLtr]}
      >
        <View style={{ flexDirection: 'row' }}>
          {multiSelect && (
            <Pressable onPress={() => setChecked(!checked)}>
              <Icon
                color={colors?.primary}
                source={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={22}
              />
            </Pressable>
          )}
          <Text style={styles.bankName}>{bankName}</Text>
        </View>
        <TouchableOpacity
          style={[styles.statusButton, { backgroundColor: statusColor }]}
        >
          <Text style={styles.statusText}>{t(`${status}`)}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View
          style={[
            styles.dateContainer,
            isRtl ? styles.dateContainerRtl : styles.dateContainerLtr,
          ]}
        >
          <Card width={20} height={20} />

          <Text
            style={styles.dateText}
          >{`${t('accountId')}: ${"\n"+accountId}`}</Text>
        </View>
        <View
          style={[
            styles.dateContainer,
            isRtl ? styles.dateContainerRtl : styles.dateContainerLtr,
          ]}
        >
          <Check width={20} height={20} />
          <Text
            style={styles.dateText}
          >{`${t('accountLinkId')}: ${"\n"+accountsLinkId}`}</Text>
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
            <Text style={[styles.manageButtonText, { color: colors?.card }]}>
              {t('viewDetails')}
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
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
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
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
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
    alignItems: 'flex-end',
  },
  manageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
