import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  Modal,
  Pressable,
  type ListRenderItem,
  FlatList,
} from 'react-native';
import { NeotekAccountCard } from '../../components/baseComponents/NeotekAccountCard/NeotekAccountCard';
import { Button, useTheme } from 'react-native-paper';
import type { Theme } from '../../theme/them.types';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { formatDate, HP, WP } from '../../utils/helper';
import { getAccountsLinksData } from '../../sampleData/OB';
import Header from '../../components/baseComponents/Header/Header';
import NeotekDatePicker from '../../components/baseComponents/NeotekDatePicker/NeotekDatePicker';
import NeoTekTextInput from '../../components/baseComponents/NeoTekTextInput/NeoTekTextInput';
import type { RootStackParamList, Status } from '../../utils/types';
const { width } = Dimensions.get('window');

export function EStatementScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { t, i18n } = useTranslation();
  const { colors } = useTheme<Theme>();
  // const { generateTokenService, getAccountsLinks } = useOBServices(apiConfig);
  const [cardData, setCardData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const [fromDateValue, setFromDateValue] = useState(new Date());
  const [toDateValue, setToDateValue] = useState(new Date());
  const [transactionFromAmount, setTransactionFromAmount] = useState<string>();
  const [transactionToAmount, setTransactionToAmount] = useState<string>();
  const [selectedAccountsList, setSelectedAccountsList] = useState<any>([]);
  type CardItem = {
    bankNameAr: string;
    status: Status;
    bankNameEn: string;
    transactionDate: string;
    expiryDate: string;
    AccountsLinkId: string;
  };
  const fetchData = async () => {
    try {
      // await generateTokenService();
      setLoading(true);
      // const response = await getAccountsLinks();
      const response = getAccountsLinksData;
      if (response?.Data?.AccountsLinks) {
        const accountsLinks = response.Data.AccountsLinks.map((account) => ({
          bankNameEn: account.FinancialInstitution.NameEn,
          bankNameAr: account.FinancialInstitution.NameAr,
          AccountsLinkId: account.AccountsLinkId,
          status: t(account.Status),
          transactionDate: formatDate(account.TransactionFromDateTime),
          expiryDate: formatDate(account.TransactionToDateTime),
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleConnectAnotherAccount = () => {
    navigation.navigate('RequestedStatment');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const isRtl = i18n.dir() === 'rtl';
  const filter = () => {
    setShowFilter(false);
  };
  const handleItemClick = (itemId: string) => {
    const itemIndex = selectedAccountsList.findIndex(
      (item: any) => item == itemId
    );
    if (itemIndex !== -1) {
      const updatedItems = [...selectedAccountsList];
      updatedItems.splice(itemIndex, 1);
      setSelectedAccountsList(updatedItems);
    } else {
      setSelectedAccountsList([...selectedAccountsList, itemId]);
    }
  };
  const renderItem: ListRenderItem<CardItem> = ({ item }) => {
    return (
      <NeotekAccountCard
        bankName={isRtl ? item.bankNameAr : item.bankNameEn}
        status={item.status}
        transactionDate={item.transactionDate}
        expiryDate={item.expiryDate}
        accountsLinkId={item.AccountsLinkId}
        onPressCheckBox={() => handleItemClick(item.AccountsLinkId)}
        multiSelect={true}
        selectedAccountsList={selectedAccountsList}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header
        title={t('e_statements.title')}
        leftIcon={'back'}
        rightIcon={'filter'}
        onPressRightIcon={() => setShowFilter(true)}
      />

      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors?.primary}
          style={styles.loader}
        />
      ) : (
        <FlatList
          data={cardData}
          style={{
            paddingHorizontal: WP(5),
            width: WP(100),
          }}
          contentContainerStyle={{ paddingBottom: WP(20) }}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Modal visible={showFilter} transparent={true} animationType="fade">
        <Pressable
          style={styles.modalBackground}
          onPress={() => {
            setShowFilter(!showFilter);
          }}
        >
          <Pressable style={styles.modalContent}>
            <NeotekDatePicker
              title={t('filter.transaction_from')}
              dateValue={fromDateValue}
              setDateValue={setFromDateValue}
            />
            <NeotekDatePicker
              title={t('filter.transaction_to')}
              dateValue={toDateValue}
              setDateValue={setToDateValue}
            />
            <NeoTekTextInput
              placeholder={t('filter.transaction_from_amount')}
              value={transactionFromAmount}
              setValue={setTransactionFromAmount}
            />
            <NeoTekTextInput
              placeholder={t('filter.transaction_to_amount')}
              value={transactionToAmount}
              setValue={setTransactionToAmount}
            />
            <Pressable
              onPress={filter}
              style={[styles.buttonModal, { backgroundColor: colors?.primary }]}
            >
              <Text style={[styles.buttonText, { color: '#fff' }]}>
                {t('filter.title')}
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>

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
          <Text style={[styles.buttonText, { color: colors?.text }]}>
            {t('e_statements.request_statement')}
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
