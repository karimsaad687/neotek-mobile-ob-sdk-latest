import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';
import type { Theme } from '../../theme/them.types';
import { FAQAccordion } from '../../components/HelpAccordion';
import TransactionCard from '../../components/TransactionCard';
import i18next from 'i18next';
import { getAccountLinkAccountsDetailsData } from '../../sampleData/OB'; // data for testing
import React from 'react';

import VisaIcon from '../../assets/mangeOb/visaIcon';
import type { Status } from '../../utils/types';
import Header from '../../components/baseComponents/Header/Header';

type Language = string;

const AccountCard: React.FC<
{
  accountId:any

}
> = ({ accountId }:any) => {

  const { colors } = useTheme<Theme>();
  return (
    <View
      style={[
        styles.card,
        { borderColor: colors?.heading, backgroundColor: "#f0f0f0" },
      ]}
    >
      <View style={styles.iconContainer}>
        <VisaIcon width="30" height="30" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.accountName, { color: colors?.text }]}>
          {accountId}
        </Text>
      </View>
    </View>
  );
};

const ManageAccount = ({
  route
}: {
  navigation: any;
  route: any;
}) => {

  const { t } = useTranslation();
  const { colors } = useTheme<Theme>();
  const lang = i18next.language;
  const { accountsLinkId, transactionDate, expiryDate } = route.params;
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedAccountName, setEditedAccountName] = useState<string>('');
  const [isDisconnecting, setIsDisconnecting] = useState<boolean>(false);

  const getStatusColor = (status: Status): string => {
    switch (status) {
      case 'Active':
        return colors?.secondary || '';
      case 'Inactive':
        return colors?.lightpink || '';
      default:
        return colors?.expired || '';
    }
  };

  useEffect(() => {
    if (accountsLinkId) {
      fetchData();
    }
  }, [accountsLinkId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = getAccountLinkAccountsDetailsData; // data for testing
      if (response) {
        setData(response);
      } else {
        console.warn('No accounts links found in response:', response);
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching account data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    if (isDisconnecting) {
      // Confirm disconnect
      // console.log('Disconnected');
      setIsDisconnecting(false);
    } else {
      // Prompt for confirmation
      setIsDisconnecting(true);
    }
  };

  const accountLink = data?.Data?.AccountsLinks?.[0];
  const accountIds = accountLink?.Accounts || [];
  const accountName =
    lang === 'ar'
      ? accountLink?.FinancialInstitution?.NameAr
      : accountLink?.FinancialInstitution?.NameEn;
  const dataGroups = accountLink?.DataGroups?.flat() || [];
  const accountStatus = accountLink?.Status;

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // console.log('New Account Name:', editedAccountName);
    setIsEditing(false);
  };

  const getStatusText = (status: Status, lang: Language): string => {
    if (lang === 'ar') {
      return status === 'Active' ? 'نشط' : 'غير نشط';
    }
    return status;
  };
  const statusColor = getStatusColor(accountStatus);

  return (
    <>
      <Header title={t('account.manage')} leftIcon={'back'} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors?.background }]}
      >
        <Text style={[styles.title, { color: colors?.text }]}>
          {t('connected_accounts')}
        </Text>

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={colors?.primary} />
            <Text style={[styles.loadingText, { color: colors?.text }]}>
              {t('loading')}
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.header}>
              {isEditing ? (
                <TextInput
                  value={editedAccountName}
                  onChangeText={setEditedAccountName}
                  style={[
                    styles.accountNameInput,
                    { color: colors?.text, borderColor: colors?.primary },
                  ]}
                  placeholder={accountName}
                />
              ) : (
                <Text
                  style={[styles.accountNameLabel, { color: colors?.text }]}
                >
                  {editedAccountName || accountName}
                </Text>
              )}
              <TouchableOpacity
                style={[
                  styles.editButton,
                  { backgroundColor: colors?.primary },
                ]}
                onPress={isEditing ? handleSave : handleEditToggle}
              >
                <Text
                  style={[styles.editButtonText, { color: colors?.buttonText }]}
                >
                  {isEditing ? t('save') : t('edit')}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.statusButton, { backgroundColor: statusColor }]}
              >
                <Text
                  style={{
                    color:
                      accountStatus === 'Active'
                        ? colors?.positive
                        : colors?.negative,
                  }}
                >
                  {getStatusText(accountStatus, lang)}
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.subtitle, { color: colors?.text }]}>
              {t('connected_account_details')}
            </Text>
            <ScrollView
              style={[
                styles.container,
                { backgroundColor: colors?.backgroundAlt },
              ]}
              showsVerticalScrollIndicator={false}
            >
              {accountIds.map((accountId: string) => (
                <AccountCard key={accountId} accountId={accountId} />
              ))}
            </ScrollView>
            <Text style={[styles.footerTitle, { color: colors?.text }]}>
              {t('data_we_get')}
            </Text>
            <FAQAccordion dataGroups={dataGroups} showLanguage={lang} />
            <TransactionCard
              transactionDate={transactionDate}
              expiryDate={expiryDate}
              iconColor="#0BA098FF"
            />

            <View style={styles.buttonContainer}>
              {isDisconnecting ? (
                <>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#FECACA' }]}
                  >
                    <Text
                      style={{ color: '#EF4444' }}
                      onPress={handleDisconnect}
                    >
                      {t('confirm')}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.cancelButton,
                      { backgroundColor: '#D8ECEB', marginTop: 10 },
                    ]}
                  >
                    <Text
                      style={{ color: colors?.primary }}
                      onPress={() => setIsDisconnecting(false)}
                    >
                      {t('cancel')}
                    </Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity
                  style={[
                    styles.disconnectButton,
                    { backgroundColor: colors?.primary },
                  ]}
                >
                  <Text
                    style={{ color: colors?.buttonText }}
                    onPress={handleDisconnect}
                  >
                    {t('disconnect')}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 8,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
  },
  accountNameInput: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    flex: 1,
  },
  editButton: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginEnd: 10,
    marginStart: 10,
  },
  editButtonText: {
    fontWeight: 'bold',
  },
  statusButton: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  footerTitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountNameLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },

  disconnectButton: {
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: '10%',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButton: {
    marginTop: 10,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: '10%',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
  },
});

export default ManageAccount;
