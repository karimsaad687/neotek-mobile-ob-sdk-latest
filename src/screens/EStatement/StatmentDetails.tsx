import {
  View,
  Text,
  StyleSheet,
  FlatList,
  type ListRenderItem,
} from 'react-native';
import { Icon, useTheme } from 'react-native-paper';


import type { Theme } from '../../theme/them.types';
import Header from '../../components/baseComponents/Header/Header';
import { HP, WP } from '../../utils/helper';
import type { Double } from 'react-native/Libraries/Types/CodegenTypes';
import { getEstatmentDetails } from '../../sampleData/E_STATMENT';
import moment from 'moment';

type CardItem = {
  id: string;
  TransactionType: string;
  SubTransactionType: string;
  TransactionDateTime: string;
  CreditDebitIndicator: string;
  Currency: string;
  Amount: Double;
  TransactionTypeDescription: string;
  SubTransactionTypeDescription: string;
  Balance: Double;
  TransactionHijriDate: string;
  Notes: string[];
  NotesDescription: string[];
};

const StatmentDetails: React.FC = () => {
  const { colors } = useTheme<Theme>();

  // const { generateTokenService, getAccountLinkAccountsDetails } = useOBServices(apiConfig);
  const RowComponent = ({
    title,
    description,
    icon,
  }: {
    title: String;
    description: String;
    icon: String;
  }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: HP(1),
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon source={icon} size={18} color="black" />
          <Text style={{ marginHorizontal: WP(1) }}>{title}</Text>
        </View>
        <Text style={{ textAlign: 'right', maxWidth: WP(50) }}>
          {description}
        </Text>
      </View>
    );
  };
  const renderItem: ListRenderItem<CardItem> = ({ item }) => (
    <View
      style={{
        borderColor: 'black',
        borderRadius: 2,
        borderWidth: 0.5,
        marginBottom: WP(2),
        flexDirection: 'column',
        padding: WP(2),
      }}
    >
      <RowComponent
        title={'Transaction Type'}
        description={item.TransactionType}
        icon={'reload'}
      />
      <RowComponent
        title={'Transaction Deacription'}
        description={item.TransactionTypeDescription}
        icon={'reload'}
      />
      <RowComponent
        title={'Transaction Date'}
        description={moment(item.TransactionDateTime.toString()).format(
          'dd-MM-yyyy'
        )}
        icon={'reload'}
      />
      <RowComponent
        title={'Amount'}
        description={item.Amount + ''}
        icon={'reload'}
      />
      <RowComponent
        title={'Balance'}
        description={item.Balance + ''}
        icon={'reload'}
      />
      <RowComponent
        title={'Currency'}
        description={item.Currency}
        icon={'reload'}
      />
    </View>
  );

  const filteredProducts = getEstatmentDetails.Data.EStatement
    .Transactions as CardItem[];

  const ListHeaderComponent = () => {
    return (
      <>
        <Text style={{ marginBottom: WP(2) }}>Basic Info</Text>
        <View
          style={{
            borderColor: 'black',
            borderRadius: 2,
            borderWidth: 0.5,
            flexDirection: 'column',
            padding: WP(2),
          }}
        >
          <RowComponent
            title={'Bank Name'}
            description={'Banque Saudi Francsie'}
            icon={'calendar'}
          />
          <RowComponent
            title={'Customer Name'}
            description={'Mussad'}
            icon={'reload'}
          />
          <RowComponent
            title={'Opening Balance'}
            description={'20'}
            icon={'filter'}
          />
          <RowComponent
            title={'Closing Balance'}
            description={'40'}
            icon={'filter'}
          />
          <RowComponent
            title={'Number of Withdraw'}
            description={'40'}
            icon={'filter'}
          />
          <RowComponent
            title={'Total of Withdraw'}
            description={'40'}
            icon={'filter'}
          />
        </View>
        <Text style={{ marginVertical: WP(2) }}>Transaction Info</Text>
      </>
    );
  };
  return (
    <View style={[styles.container, { backgroundColor: colors?.Background }]}>
      <Header title={'Statment Details'} leftIcon={'back'} />
      <FlatList
        data={filteredProducts} // Show only filtered products
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
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
    borderWidth: 1,
    borderRadius: 8,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: '5%',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default StatmentDetails;
