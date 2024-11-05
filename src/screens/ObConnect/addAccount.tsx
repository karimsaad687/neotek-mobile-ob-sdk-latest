import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import { Button, useTheme, ActivityIndicator } from 'react-native-paper';
import type { Theme } from '../../theme/them.types';
import { FAQAccordion } from '../../components/HelpAccordion';
import { useTranslation } from 'react-i18next';
import ProgressBar from '../../components/baseComponents/ProgressBar';
import { useOBServices } from '../../services/useOBServices';
import apiConfig from '../../config';

import BankCard from '../../components/baseComponents/BankCard/BankCard';
import Header from '../../components/baseComponents/Header/Header';
const { width } = Dimensions.get('window');
interface BankInstitution {
  nameEn: string;
  nameAr: string;
  id: string;
}

export function AddNewAccountScreen() {
  const { i18n } = useTranslation();

  // const navigation = useNavigation();
  const { t } = useTranslation();
  const { colors } = useTheme<Theme>();
  const [step, setStep] = useState(1);
  // const [provider, setProvider] = useState('');

  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { getFinancialInstitutions, getInstitutionDataGroups } =
    useOBServices(apiConfig);
  const [institutions, setInstitutions] = useState<BankInstitution[]>([]);
  const [dataGroups, setDataGroups] = useState<any>([]);

  const isRtl = i18n.dir() === 'rtl';
  type Language = 'ar' | 'en';
  const language: Language = isRtl ? 'ar' : 'en';

  useEffect(() => {
    const fetchInstitutions = async () => {
      setLoading(true);
      try {
        const institutionsData = await getFinancialInstitutions();
        const institutionsList = institutionsData.Data.FinancialInstitution.map(
          (bank) => ({
            nameEn: bank.FinancialInstitutionName.NameEn,
            nameAr: bank.FinancialInstitutionName.NameAr,
            id: bank.FinancialInstitutionId,
          })
        );
        setInstitutions(institutionsList);
      } catch (error) {
        console.error('Error fetching institutions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutions();
  }, []);

  useEffect(() => {
    const fetchDataGroups = async () => {
      if (institutions.length === 0) return;
      setLoading(true);
      try {
        const dataGroupsResponses = await Promise.all(
          institutions.map(() => getInstitutionDataGroups())
        );
        const uniqueDataGroups = Array.from(
          new Set(dataGroupsResponses.flat().map((group) => group.DataGroupId))
        ).map((id) =>
          dataGroupsResponses.flat().find((group) => group.DataGroupId === id)
        );
        setDataGroups(uniqueDataGroups);
      } catch (error) {
        console.error('Error fetching data groups:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataGroups();
  }, [institutions]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors?.primary} />
        <Text style={styles.loaderText}>{t('loading')}</Text>
      </View>
    );
  }

  const handleNextStep = async () => {
    if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        Linking.openURL('https://auth-sb.alfransi.com.sa/perry/login');
        setLoading(false);
      }, 5000);
    } else if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    // navigation.goBack();
    if (step > 1) setStep(step - 1);
  };

  const handleBankSelect = (bank: string) => {
    setSelectedBank(bank === selectedBank ? null : bank);
  };

  return (
    <>
      <Header
        title={t('provider.select')}
        leftIcon={'back'}
        backgroundColor={"white"}
      />
      <View style={styles.container}>
        <ProgressBar step={step} />

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={80} color={colors?.primary} />
            <Text style={styles.loaderText}>{t('loading.message')}</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {step === 1 && (
              <View style={styles.stepContainer}>
                <Text
                  style={[
                    styles.orText,
                    { textAlign: isRtl ? 'right' : 'left' },
                  ]}
                >
                  {t('aaaccount.select')}
                </Text>

                <Text
                  style={[
                    styles.subText,
                    { textAlign: isRtl ? 'right' : 'left' },
                  ]}
                >
                  {t('account.connect_message')}
                </Text>

                <View style={styles.bankList}>
                  {!institutions.length ? (
                    <Text style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      {t('error.no_institutions')}
                    </Text>
                  ) : (
                    institutions
                      // .filter(
                      //   (bank) =>
                      //     bank.nameEn
                      //       .toLowerCase()
                      //       .includes(provider.toLowerCase()) ||
                      //     bank.nameAr
                      //       .toLowerCase()
                      //       .includes(provider.toLowerCase())
                      // )
                      .map((bank) => (
                        <BankCard
                          key={bank.id}
                          bank={bank}
                          isSelected={selectedBank === bank.id}
                          onSelect={() => handleBankSelect(bank.id)}
                        />
                      ))
                  )}
                </View>
              </View>
            )}

            {step === 2 && (
              <View style={styles.stepContainer}>
                <Text style={styles.title}>{t('aaaccount.connect_title')}</Text>
                <Text
                  style={[
                    styles.subText,
                    { textAlign: isRtl ? 'right' : 'left' },
                  ]}
                >
                  {t('aaaccount.connect_message')}
                </Text>
                <FAQAccordion dataGroups={dataGroups} showLanguage={language} />

                {/* <TransactionCard transactionDate="2024-01-01" expiryDate="2025-09-22" iconColor="#72788E" /> */}
                <View style={styles.confirmationCard}>
                  <Text style={styles.confirmationText}>
                    {t('account.confirmation_text')}
                  </Text>
                </View>
              </View>
            )}

            {step === 3 && (
              <View style={styles.stepContainer}>
                <Text style={styles.title}>{t('step.complete')}</Text>
                <Text style={styles.subText}>
                  {t('aaaccount.success_message')}
                </Text>
              </View>
            )}
          </ScrollView>
        )}

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleNextStep}
            contentStyle={styles.buttonContent}
            style={[
              styles.button,
              {
                backgroundColor: selectedBank ? colors?.primary : '#A9A9A9',
              },
            ]}
            disabled={!selectedBank}
          >
            <Text
              style={[
                styles.buttonText,
                { color: colors?.buttonText, textTransform: 'none' },
              ]}
            >
              {step === 3 ? t('button.finish') : t('button.continue')}
            </Text>
          </Button>

          <Button
            mode="contained"
            onPress={handlePreviousStep}
            contentStyle={styles.buttonContent}
            style={[
              styles.button,

              {
                backgroundColor: selectedBank ? colors?.primary : '#A9A9A9',
              },
            ]}
            disabled={!selectedBank}
          >
            <Text
              style={[
                styles.buttonText,
                { color: colors?.buttonText, textTransform: 'none' },
              ]}
            >
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
    backgroundColor: '#FFFFFFFF',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  stepContainer: {
    marginTop: 20,
    justifyContent: 'center',
    padding: '3%',
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  subText: {
    textAlign: 'left',
    fontSize: width * 0.04,
    color: '#666',
    marginBottom: 20,
  },
  orText: {
    fontSize: width * 0.05,
    textAlign: 'left',
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  bankList: {
    marginTop: 15,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
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
    fontSize: width * 0.03,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  confirmationCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#F9F9F9',
  },
  confirmationText: {
    textAlign: 'center',
    color: '#555',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});

export default AddNewAccountScreen;
