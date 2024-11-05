import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IBANVerificationScreen from '../screens/IBAN/IbanVerificationScreen';
import HomeScreen from '../screens/HOME/home';
import { IncomeVerificationScreen } from '../screens/IncomeVerificationScreen/IncomeVerificationScreen';
import SingleApiScreen from '../screens/SingleApiScreen/SingleApiScreen';
import ThemeProvider from '../providers/ThemeProvider';
import type { Theme } from '../theme/them.types';
import i18n from '../i18n';
import { ObConnectScreen } from '../screens/ObConnect/obConnectScreen';
import { AddNewAccountScreen } from '../screens/ObConnect/addAccount';
import MangeAccount from '../screens/ObConnect/mangeAccount';
import { setApiConfig } from '../config';
import { EStatementScreen } from '../screens/EStatement/EStatement';
import { RequestedStatementScreen } from '../screens/EStatement/RequestedStatement';
import StatmentDetails from '../screens/EStatement/StatmentDetails';
import { IncomeVerificationDetails } from '../screens/IncomeVerificationScreen/IncomeVerificationDetails';
import { LogBox } from 'react-native';

interface NeotekOBProps {
  initialRoute?: string;
  mode?: 'dark' | 'light' | 'default';
  theme?: Partial<Theme>;
  lang?: string;
  psuId: string;
  clientId: string;
  clientSecret: string;
  products?: string[];
}

const Stack = createStackNavigator();
const NeotekOB: React.FC<NeotekOBProps> = ({
  initialRoute = 'HOME',
  mode = 'light',
  theme,
  lang = 'en',
  psuId,
  clientId,
  clientSecret,
  products = [
    'ob_connect',
    'iban_verification',
    'income_verification',
    'single_api',
    'e_statements',
  ],
}) => {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);
  const Statement = () => EStatementScreen();
  useEffect(() => {

    LogBox.ignoreLogs([
      'fontFamily "material-community" is not a system font and has not been loaded through expo-font.',
    ]);

    // Initialize i18n
    i18n
      .init()
      .then(async () => {
        i18n.checkRtl(lang);
        setIsI18nInitialized(true);
      })
      .catch((error) => {
        console.warn('i18n initialization failed', error);
      });

    // Set API config
    setApiConfig({
      psuId,
      clientId,
      clientSecret,
    });
  }, [psuId, clientId, clientSecret, lang]);

  if (!isI18nInitialized) {
    return null;
  }

  return (
    <ThemeProvider mode={mode} theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="HOME"
            options={{
              headerShown: false,
            }}
            children={(props) => <HomeScreen {...props} products={products} />}
          />

          <Stack.Screen
            name="IbanVerification"
            component={IBANVerificationScreen}
            options={{
              headerShown: false,
            }}
          />


          <Stack.Screen
            name="IncomeVerification"
            component={IncomeVerificationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="obConnect"
            component={ObConnectScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MangeAccount"
            component={MangeAccount}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="addAccount"
            component={AddNewAccountScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="singleapi"
            component={SingleApiScreen}
            options={{
              headerTitle: 'Single Api',
              headerStyle: { backgroundColor: '#fff' },
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerBackTitleStyle: { color: '#black' },
              headerTitleAlign: 'center',
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="EStatement"
            component={Statement}
            options={{
              headerTitle: 'E-Statement',
              headerStyle: { backgroundColor: '#fff' },
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerBackTitleStyle: { color: '#black' },
              headerTitleAlign: 'center',
              headerShown: false,
              // headerRight: ()=><Pressable onPress={

              // }>
              //   <Icon size={24} source={"filter"} />
              // </Pressable>,
              headerRightContainerStyle: {
                marginEnd: 16,
              },
            }}
          />
          <Stack.Screen
            name="RequestedStatment"
            component={RequestedStatementScreen}
            options={{
              headerTitle: 'E-Statement',
              headerStyle: { backgroundColor: '#fff' },
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerBackTitleStyle: { color: '#black' },
              headerTitleAlign: 'center',
              headerShown: false,
              headerRightContainerStyle: {
                marginEnd: 16,
              },
            }}
          />
          <Stack.Screen
            name="StatmentDetails"
            component={StatmentDetails}
            options={{
              headerTitle: 'E-Statement',
              headerStyle: { backgroundColor: '#fff' },
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerBackTitleStyle: { color: '#black' },
              headerTitleAlign: 'center',
              headerShown: false,
              headerRightContainerStyle: {
                marginEnd: 16,
              },
            }}
          />
          <Stack.Screen
            name="IncomeVerificationDetails"
            component={IncomeVerificationDetails}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default NeotekOB;
