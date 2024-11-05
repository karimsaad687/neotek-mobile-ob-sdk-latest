import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import type { Theme } from '../../theme/them.types';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { HP, WP } from '../../utils/helper';

import Header from '../../components/baseComponents/Header/Header';
import { NeotekStatemntCard } from '../../components/baseComponents/NeotekStatemntCard/NeotekStatemntCard';
import Card from '../../assets/icons/Card';
import { requstsList } from '../../sampleData/E_STATMENT';
import type { RootStackParamList } from '../../utils/types';
const { width } = Dimensions.get('window');

export function RequestedStatementScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { i18n } = useTranslation();
  const { colors } = useTheme<Theme>();
  // const { generateTokenService, getAccountsLinks } = useOBServices(apiConfig);
  const [cardData, setCardData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      // await generateTokenService();
      setLoading(true);
      // const response = await getAccountsLinks();
      const response = requstsList;
      if (response?.Data?.EStatements) {
        const accountsLinks = response.Data.EStatements.map((account) => ({
          AccountsLinkId: account.AccountsLinkId,
          AccountId: account.AccountId,
          status: account.Status,
          transactionDate: account.AccountId,
        }));
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
  const handleManagePress = () => {
    navigation.navigate('StatmentDetails');
  };

  const isRtl = i18n.dir() === 'rtl';

  const reloadAPI = () => {
    console.log('Reload API');
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Requested Statments'}
        leftIcon={'back'}
        rightIcon={'reload'}
        onPressRightIcon={reloadAPI}
      ></Header>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors?.primary}
            style={styles.loader}
          />
        ) : (
          cardData.map((card, index) => (
            <NeotekStatemntCard
              key={index}
              bankName={isRtl ? card.bankNameAr : card.bankNameEn}
              status={card.status}
              transactionDate={card.transactionDate}
              expiryDate={card.expiryDate}
              accountsLinkId={card.AccountsLinkId}
              accountId={card.AccountId}
              icon={Card}
              iconProps={{ fill: colors?.secondary }}
              onPressCard={() => console.log('pressed')}
              onManagePress={() => handleManagePress()}
            />
          ))
        )}
      </ScrollView>
    </View>
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
  buttonModal: {
    // flex: 1,
    marginHorizontal: 8,
    borderRadius: 10,
    elevation: 2,
    height: HP(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: WP(80),
  },
  modalText: {
    marginBottom: 15,
  },
});
