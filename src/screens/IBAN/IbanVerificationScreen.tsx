import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  I18nManager,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import { t } from 'i18next';
import ToastScreen from '../../components/baseComponents/NeotekToast/toastScreen';
import apiConfig from '../../config';
import { useOBServices } from '../../services/useOBServices';
import type { Theme } from '../../theme/them.types';
import { useTranslation } from 'react-i18next';
// import { generateTokenService } from '../../services/tokenServices';
import Header from '../../components/baseComponents/Header/Header';
import BottomSheetDropdown from '../../components/baseComponents/BottomSheetDropdown';

type AlertType = 'success' | 'error' | undefined;


const IBANVerificationScreen: React.FC = () => {
  const { i18n } = useTranslation();

  const { colors } = useTheme<Theme>();

  const [iban, setIban] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [idType, setIdType] = useState<string | null>(null);
  const [error, setError] = useState<{
    iban?: string;
    id?: string;
    idType?: string;
  } | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [alertType, setAlertType] = useState<AlertType>(undefined);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false); // Track if IBAN is verified
  const { verifyIban, getVerfiyIbanInfoRequest } = useOBServices(apiConfig);
  const isRtl = i18n.dir() === 'rtl';
  const isRTL = I18nManager.isRTL;

  console.log(isVerified)
  useEffect(() => {
    const handleDirection = () => {
      if (isRTL !== I18nManager.isRTL) {
        I18nManager.forceRTL(isRTL);
      }
    };

    handleDirection();
  }, []);

  const handleValueChange = (value: string) => {
    setIdType(value);
    console.log(value)
  };

  // const handleClearIdType = () => {
  //   setIdType(null);
  //   if (error?.idType) {
  //     setError((prevError) => ({ ...prevError, idType: undefined }));
  //   }
  // };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleVerifyPress = async () => {
    let hasError = false;
    const newError: { iban?: string; id?: string; idType?: string } = {};

    if (!iban) {
      newError.iban = t('iban_required');
      hasError = true;
    }
    if (!id) {
      newError.id = t('id_required');
      hasError = true;
    }
    if (!idType) {
      newError.idType = t('id_type_required');
      hasError = true;
    }

    if (hasError) {
      setError(newError);
      return;
    }

    setError(null);

    const data = {
      IBAN: iban,
      POIType: idType!,
      POINumber: id,
    };

    try {
      setLoading(true);
      // await generateTokenService();

      const response = await verifyIban(data);

      if (!response) {
        // console.error('IBAN verification failed: No response received');
        setToastMessage(t('verification_failed'));
        setAlertType('error');
        setToastVisible(true);
        return;
      }

      let maxRetries = 5;
      let delayTime = 2000;

      const checkIbanStatus = async () => {
        const isValid = await getVerfiyIbanInfoRequest(response.Data.EventId);
        // console.log(isValid.data.response.Data.RequestStatus)
        if (isValid.data.response.Data.RequestStatus == 'Valid') {
          setToastMessage(t('valid_iban'));
          setAlertType('success');
          setIsVerified(true);
          setToastVisible(true);
        } else if (isValid.data.response.Data.RequestStatus == 'Invalid') {
          setToastMessage(t('invalid_iban'));
          setAlertType('error');
          setIsVerified(true);
          setToastVisible(true);
        } else if (maxRetries > 0) {
          await delay(delayTime);
          delayTime += 2000;
          maxRetries -= 1;
          await checkIbanStatus();
        } else {
          console.error('IBAN verification failed after multiple retries');
          setToastMessage(t('invalid_iban'));
          setAlertType('error');
          setIsVerified(false);
          setToastVisible(true);
        }
      };
      await checkIbanStatus();
    } catch (error) {
      console.error('Error during IBAN verification:', error);
      setToastMessage(t('verification_failed'));
      setAlertType('error');
      setIsVerified(false);
      setToastVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleDone = () => {
    setToastVisible(false);
    setError(null);
  };

  const handleClose = () => {
    setToastVisible(false);
    setIban('');
    setId('');
    setIdType(null);
    setError(null);
  };
  console.log('|i18n.language', i18n.language);


  const idOptions = [
    { label: t('national_id'), value: 'NAT' },
    { label: t('iqa'), value: 'iqama' },
  ];
  return (
    <>
      <Header title={t('iban_verification')} leftIcon={'back'} />
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View
          style={[styles.container, { backgroundColor: colors?.background }]}
        >
          {toastVisible && (
            <ToastScreen
              alertType={alertType}
              message={toastMessage}
              displayDuration={5000000}
              showButton={false}
              onBackPress={() => setToastVisible(false)}
            />
          )}



<BottomSheetDropdown
            options={idOptions}
            selectedValue={idType}
            onValueChange={handleValueChange}
            placeholder={t('select_id_type')}
            title={t('bottomsheet')}

          />
{error?.id && (
          <Text style={[styles.error, { color: colors?.negative }]}>
            {error.id}
          </Text>
        )}



<TextInput
  outlineStyle={{ borderColor: colors?.expired, borderRadius: 10 }}
  // label={t('enter_iban')}
  placeholder={t('enter_iban')}
  style={[
    styles.input,
    {
      backgroundColor: colors?.Background,
      textAlign: isRtl ? 'right' : 'left'
    },
  ]}
  onChangeText={(text) => {
    setIban(text);
    if (error?.iban) {
      setError((prevError) => ({ ...prevError, iban: undefined }));
    }
  }}
  value={iban}
  mode="outlined"
  error={!!error?.iban}
  theme={{
    colors: {
      error: colors?.negative,
      placeholder: colors?.expired,
      text: colors?.text,
    },
  }}
/>

{error?.iban && (
          <Text style={[styles.error, { color: colors?.negative }]}>
            {error.iban}
          </Text>
        )}


<TextInput
  outlineStyle={{ borderColor: colors?.expired, borderRadius: 10 }}
  // label={t('enter_id')}
  placeholder={t('enter_id')}
  style={[
    styles.input,
    {
      backgroundColor: colors?.Background,
      textAlign: isRtl ? 'right' : 'left' // Change alignment based on direction
    },
  ]}
  onChangeText={(text) => {
    setId(text);
    if (error?.id) {
      setError((prevError) => ({ ...prevError, id: undefined }));
    }
  }}
  value={id}
  mode="outlined"
  error={!!error?.id}
  theme={{
    colors: {
      error: colors?.negative,
      placeholder: colors?.expired,
      text: colors?.text,
    },
  }}
/>




          {error?.id && (
            <Text style={[styles.error, { color: colors?.negative }]}>
              {error.id}
            </Text>
          )}

          {!toastVisible && (
            <Button
              mode="contained"
              onPress={handleVerifyPress}
              style={[
                styles.button,
                { backgroundColor: colors?.primary, marginTop: 'auto' },
              ]}
            >
              {loading ? (
                <ActivityIndicator size="small" color={colors?.buttonText} />
              ) : (
                <Text
                  style={[styles.buttonText, { color: colors?.buttonText }]}
                >
                  {t('verify')}
                </Text>
              )}
            </Button>
          )}

          {toastVisible && (
            <View style={styles.buttonContainer}>
              {alertType !== 'error' && (
                <Button
                  mode="outlined"
                  onPress={handleDone}
                  style={[
                    styles.button,
                    { backgroundColor: colors?.secondary, marginBottom: '5%' },
                  ]}
                >
                  <Text style={[styles.buttonText, { color: colors?.primary }]}>
                    {t('button.done')}
                  </Text>
                </Button>
              )}
              <Button
                mode="outlined"
                onPress={alertType === 'error' ? handleDone : handleClose}
                style={[styles.button, { backgroundColor: colors?.primary }]}
              >
                <Text
                  style={[styles.buttonText, { color: colors?.buttonText }]}
                >
                  {alertType === 'error'
                    ? t('close')
                    : t('button.Verify_another_IBAN')}
                </Text>
              </Button>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
    borderWidth: 0,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'none',
    fontWeight: '500',
  },
  error: {
    marginBottom: 8,
    fontSize: 14,
  },
});

export default IBANVerificationScreen;
