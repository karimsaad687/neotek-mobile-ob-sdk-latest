import React,{ StyleSheet, View, Text, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import type { Theme } from '../../theme/them.types';
import { useEffect, useState } from 'react';
import { HP, WP } from '../../utils/helper';
import Header from '../../components/baseComponents/Header/Header';
import { useTranslation } from 'react-i18next';
import { verificationRequestDetails } from '../../sampleData/INCOMEVERIFICATIONS';
import { RowComponent } from './components/RowCompnent';
import { useIncomeServices } from '../../services/useIncomeServices';
import apiConfig from '../../config';

export function IncomeVerificationDetails({ route }: { route: any }) {
  const { AccountsLinkIds, TransactionFromTimestamp, TransactionToTimestamp } =
    route.params;

  const { t } = useTranslation();

  const { colors } = useTheme<Theme>();
  const [loading, setLoading] = useState<boolean>(true);
  const [dataCompleted, setDataCompleted] = useState<boolean>(false);
  const [cardData, setCardData] = useState<any[]>([]);
  const [status, setStatus] = useState<string>();
  let currentIndex = 0;
console.log(loading)
  const { getIncomeVerificationRequests, getIncomeVerificationDetails } =
    useIncomeServices(apiConfig);

  const getRequestDetails = async () => {
    if (currentIndex < cardData.length) {
      await getIncomeVerificationDetails(
        cardData[currentIndex].IncomeVerificationId
      );
      currentIndex++;
      getRequestDetails();
    } else {
      setDataCompleted(true);
    }
  };

  const fetchData = async () => {
    try {
      // await generateTokenService(apiConfig);
      setLoading(true);
      const response = await getIncomeVerificationRequests({
        AccountsLinkIds,
        TransactionFromTimestamp,
        TransactionToTimestamp,
      });
      const requestStatus = response.Data.Status;
      if (requestStatus != status && requestStatus == 'InProgress') {
        if (response?.Data?.IncomeVerifications) {
          const incomeVerifications = response.Data.IncomeVerifications;
          setCardData(incomeVerifications);
        } else {
          console.warn('No accounts links found in response:', response);
          setCardData([]);
        }
      }
      console.log('response', response.Data.IncomeVerifications);

      if (requestStatus == 'Completed') {
        getRequestDetails();
      }
      setStatus(requestStatus);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: any) => (
    <>
      <View style={styles.parentItemView}>
        {dataCompleted ? (
          <>
            <Text style={{ marginBottom: HP(1), fontWeight: 'bold' }}>
              {t('income_verification.income_verification_details.account') +
                ': ' +
                item.AccountId}
            </Text>
            <View
              style={[styles.childItemView, { borderColor: colors?.primary }]}
            >
              <RowComponent
                title={t(
                  'income_verification.income_verification_details.customer_name'
                )}
                description={item.CustomerName}
              />

              <RowComponent
                title={t(
                  'income_verification.income_verification_details.last_month_salary'
                )}
                description={item.LastMonthSalary}
              />
              <RowComponent
                title={t(
                  'income_verification.income_verification_details.average_salary'
                )}
                description={item.AverageSalary}
              />
              <RowComponent
                title={t(
                  'income_verification.income_verification_details.last_divided_amount'
                )}
                description={item.LastDividendAmount}
              />
              <RowComponent
                title={t(
                  'income_verification.income_verification_details.average_dividend'
                )}
                description={item.AverageDividend}
              />
              <RowComponent
                title={t(
                  'income_verification.income_verification_details.previous_salary_amount'
                )}
                description={item.PerviousSalaryAmount}
                isLast
              />
            </View>
          </>
        ) : (
          <View
            style={[styles.childItemView, { borderColor: colors?.pending }]}
          >
            <RowComponent
              title={t(
                'income_verification.income_verification_details.account'
              )}
              description={item.AccountId}
              pending={true}
            />

            <RowComponent
              title={t('status.title')}
              description={'Pending'}
              isLast
            />
          </View>
        )}
      </View>
    </>
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title={t('income_verification.income_verification_details.title')}
        leftIcon={'back'}
        rightIcon={'reload'}
        onPressRightIcon={fetchData}
      />

      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={
          dataCompleted
            ? verificationRequestDetails.Data.IncomeVerification
            : cardData
        }
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
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
  parentItemView: {
    padding: WP(2),
    width: '100%',
  },
  childItemView: {
    borderColor: '#ddd',
    borderWidth: 2,
    width: WP(90),
    borderRadius: 12,
    paddingVertical: 2,
    backgroundColor: 'white',
  },
});
