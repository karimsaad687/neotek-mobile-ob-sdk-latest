import React from 'react';
import { View, FlatList, type ListRenderItem } from 'react-native';
import NeotekCard from '../../components/baseComponents/NeotekCard/NeotekCard';
import { useTheme } from 'react-native-paper';
import styles from './home.styles';
import { useTranslation } from 'react-i18next';
import IBAN from '../../assets/icons/IBAN';
import type { Theme } from '../../theme/them.types';
import type { NavigationProp, ParamListBase } from '@react-navigation/native';
import Header from '../../components/baseComponents/Header/Header';

type CardItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  screenName: string;
};

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  products: string[]; // List of products passed from NeotekOB
};

const HomeScreen = ({ navigation, products }: HomeScreenProps) => {
  const theme = useTheme<Theme>();
  const { t } = useTranslation();

  // All possible product cards
  const availableProducts: CardItem[] = [
    {
      id: 'iban_verification',
      title: t('iban_verification'),
      description: t('iban_verification_description'),
      icon: (
        <IBAN
          fillColor1={theme.colors?.primary}
          fillColor2={theme.colors?.secondary}
          width={40}
          height={40}
        />
      ),
      screenName: 'IbanVerification',
    },
    {
      id: 'ob_connect',
      title: t('ob_connect'),
      description: t('ob_connect_description'),
      icon: (
        <IBAN
          fillColor1={theme.colors?.primary}
          fillColor2={theme.colors?.secondary}
          width={40}
          height={40}
        />
      ),
      screenName: 'obConnect',
    },
    {
      id: 'income_verification',
      title: t('income_verification.title'),
      description: t('income_verification_description'),
      icon: (
        <IBAN
          fillColor1={theme.colors?.primary}
          fillColor2={theme.colors?.secondary}
          width={40}
          height={40}
        />
      ),
      screenName: 'IncomeVerification',
    },
    {
      id: 'single_api',
      title: t('single_api.title'),
      description: t('single_api.single_api_desc'),
      icon: (
        <IBAN
          fillColor1={theme.colors?.primary}
          fillColor2={theme.colors?.secondary}
          width={40}
          height={40}
        />
      ),
      screenName: 'singleapi',
    },
    {
      id: 'e_statements',
      title: t('e_statements.title'),
      description: t('e_statements.desc'),
      icon: (
        <IBAN
          fillColor1={theme.colors?.primary}
          fillColor2={theme.colors?.secondary}
          width={40}
          height={40}
        />
      ),
      screenName: 'EStatement',
    },
  ];

  // Filter products based on the passed products prop
  const filteredProducts = availableProducts.filter((product) =>
    products.includes(product.id)
  );

  const renderItem: ListRenderItem<CardItem> = ({ item }) => (
    <View style={[styles.cardContainer]}>
      <NeotekCard
        title={item.title}
        description={item.description}
        icon={item.icon}
        onPress={() => {
          navigation.navigate(item.screenName);
        }}
      />
    </View>
  );

  return (
    <>
      <Header title={t('home')} />
      <FlatList
        data={filteredProducts} // Show only filtered products
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.list}
      />
    </>
  );
};

export default HomeScreen;
