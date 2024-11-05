import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import ArrowIcon from '../assets/FaqAccordion/ArrowIcon';
import CircleIcon from '../assets/FaqAccordion/CircleIcon';
import ContactIcon from '../assets/FaqAccordion/ContactIcon';
import AccountDetailsIcon from '../assets/FaqAccordion/AccountDetailsIcon';
import PaymentsIcon from '../assets/FaqAccordion/PaymentsIcon';
import TransactionIcon from '../assets/FaqAccordion/TransactionIcon';
import { WP, HP } from '../utils/helper';
import useThemeColors from '../utils/themColor';

interface Permission {
  ResourceId: string;
  ResourceDescriptionEn: string;
  ResourceDescriptionAr: string;
  PermissionId: string;
  PermissionDescriptionEn: string;
  PermissionDescriptionAr: string;
}

interface DataGroup {
  DataGroupId: string;
  DescriptionEn: string;
  DescriptionAr: string;
  Permissions: Permission[];
}

interface FAQAccordionProps {
  dataGroups: DataGroup[];
  showLanguage: string;
}

// Icon Mapping
const iconMap: { [key: string]: React.ComponentType } = {
  AccountDetails: AccountDetailsIcon,
  RegularPayments: PaymentsIcon,
  PartyDetails: ContactIcon,
  AccountTransactions: TransactionIcon,
};

export const FAQAccordion = ({
  dataGroups,
  showLanguage,
}: FAQAccordionProps) => {
  const colors = useThemeColors();
  const { i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isRtl = i18n.dir() === 'rtl';

  return (
    <View style={styles.accordionContainer}>
      {dataGroups.map((group, index) => {
        const IconComponent = iconMap[group.DataGroupId] || CircleIcon;

        return (
          <View key={index}>
            <TouchableOpacity
              onPress={() => toggleAccordion(index)}
              style={[
                styles.accordionHeader,
                { flexDirection: isRtl ? 'row-reverse' : 'row' },
              ]}
            >
              <View style={styles.iconContainer}>
                <IconComponent />
              </View>

              <Text style={[styles.groupTitle, isRtl && styles.textRight]}>
                {showLanguage === 'en'
                  ? group.DescriptionEn
                  : group.DescriptionAr}
              </Text>

              <View style={styles.arrowIconContainer}>
                <ArrowIcon
                  style={[
                    styles.arrowIcon,
                    {
                      transform: [
                        { rotate: openIndex === index ? '0deg' : '180deg' },
                      ],
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>

            {openIndex === index && (
              <View
                style={[
                  styles.accordionContainer,
                  { backgroundColor: colors?.Background },
                ]}
              >
                {group.Permissions.map((permission, permIndex) => (
                  <View key={permIndex}>
                    <TouchableOpacity
                      onPress={() => toggleAccordion(index)}
                      style={[
                        styles.permissionItem,
                        { flexDirection: isRtl ? 'row-reverse' : 'row' },
                      ]}
                    >
                      <View style={styles.permissionIconContainer}>
                        <CircleIcon />
                      </View>
                      <Text
                        style={[
                          styles.permissionTitle,
                          isRtl && styles.textRight,
                        ]}
                      >
                        {showLanguage === 'en'
                          ? permission.ResourceDescriptionEn
                          : permission.ResourceDescriptionAr}
                      </Text>
                    </TouchableOpacity>

                    <Text
                      style={[styles.answerText, isRtl && styles.textRight]}
                    >
                      {showLanguage === 'en'
                        ? permission.PermissionDescriptionEn
                        : permission.PermissionDescriptionAr}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    padding: WP('5%'),
    backgroundColor: '#F7F8FA',
    borderRadius: 12,
  },
  accordionHeader: {
    alignItems: 'center',
    paddingVertical: HP('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconContainer: {
    marginHorizontal: WP('3%'),
  },
  groupTitle: {
    fontSize: WP('4.5%'),
    fontWeight: 'bold',
    flex: 1,
  },
  arrowIconContainer: {
    marginLeft: WP('3%'),
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  answerContainer: {
    paddingVertical: HP('1%'),
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: HP('1%'),
  },
  permissionIconContainer: {
    marginRight: WP('2%'),
  },
  permissionTitle: {
    fontSize: WP('4%'),
    fontWeight: 'bold',
    color: '#333',
    marginStart: WP('2%'),
    marginEnd: WP('2%'),
    flex: 1,
  },

  answerText: {
    fontSize: WP('3.5%'),
    color: '#666',
    marginStart: WP('5%'),
  },
  textRight: {
    textAlign: 'right',
    marginStart: WP('5%'),
  },
});
