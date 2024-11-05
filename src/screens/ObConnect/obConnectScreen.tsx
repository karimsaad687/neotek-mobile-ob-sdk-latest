import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { NeotekAccountCard } from '../../components/baseComponents/NeotekAccountCard/NeotekAccountCard';
import { Calendar } from '../../assets/icons/Calender';
import { useTheme, Button } from 'react-native-paper';
import type { Theme } from '../../theme/them.types';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useOBServices } from '../../services/useOBServices';
import apiConfig from '../../config';
import { formatDate } from '../../utils/helper';
import type { RootStackParamList } from '../../utils/types';
import Header from '../../components/baseComponents/Header/Header';
const { width } = Dimensions.get('window');

export function ObConnectScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { t, i18n } = useTranslation();
  const { colors } = useTheme<Theme>();
  const {  getAccountsLinks } = useOBServices(apiConfig);
  const [cardData, setCardData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchData = async () => {
    try {
      // await generateTokenService();
      setLoading(true);
      const response = await getAccountsLinks();

      if (response?.Data?.AccountsLinks) {
        const accountsLinks = response.Data.AccountsLinks.map(
          (account: {
            FinancialInstitution: { NameEn: any; NameAr: any };
            AccountsLinkId: any;
            Status: any;
            TransactionFromDateTime: string;
            TransactionToDateTime: string;
          }) => ({
            bankNameEn: account.FinancialInstitution.NameEn,
            bankNameAr: account.FinancialInstitution.NameAr,
            AccountsLinkId: account.AccountsLinkId,
            status: account.Status,
            transactionDate: formatDate(account.TransactionFromDateTime),
            expiryDate: formatDate(account.TransactionToDateTime),
          })
        );

        setCardData(accountsLinks);
      } else {
        console.warn('No accounts links found in response:', response);
        setCardData([]);
      }
    } catch (error) {
      console.error('Error fetching account data:', error);
      setCardData([]);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleManagePress = (
    accountsLinkId: string,
    transactionDate: string,
    expiryDate: string
  ) => {
    navigation.navigate('MangeAccount', {
      accountsLinkId,
      transactionDate,
      expiryDate,
    });
  };

  const handleConnectAnotherAccount = () => {
    navigation.navigate('addAccount');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const isRtl = i18n.dir() === 'rtl';

  return (
    <>
      <Header title={t('ob_connect')} leftIcon={'back'} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={colors?.primary}
              style={styles.loader}
            />
          ) : (
            cardData.map((card, index) => (
              <NeotekAccountCard
                key={index}
                bankName={isRtl ? card.bankNameAr : card.bankNameEn}
                status={card.status}
                transactionDate={card.transactionDate}
                expiryDate={card.expiryDate}
                accountsLinkId={card.AccountsLinkId}
                onManagePress={() =>
                  handleManagePress(
                    card.AccountsLinkId,
                    card.transactionDate,
                    card.expiryDate
                  )
                }
                icon={Calendar}
                iconProps={{ fill: colors?.subheading }}
              />
            ))
          )}
        </ScrollView>

        <View
          style={[
            styles.buttonContainer,
            { flexDirection: isRtl ? 'row-reverse' : 'row' },
          ]}
        >
          <Button
            mode="contained"
            onPress={handleConnectAnotherAccount}
            contentStyle={styles.buttonContent}
            style={[styles.button, { backgroundColor: colors?.primary }]}
          >
            <Text style={[styles.buttonText, { color: colors?.buttonText }]}>
              {t('button.newAccount')}
            </Text>
          </Button>

          <Button
            mode="outlined"
            onPress={handleBackPress}
            contentStyle={styles.buttonContent}
            style={[
              styles.button,
              {
                borderColor: colors?.primary,
                backgroundColor: colors?.Background,
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: colors?.primary }]}>
              {t('button.back')}
            </Text>
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonContent: {
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: width * 0.028,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
