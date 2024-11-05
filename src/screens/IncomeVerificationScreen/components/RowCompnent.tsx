import React,{ Text, View } from 'react-native';
import { HP, WP } from '../../../utils/helper';
import { useTheme } from 'react-native-paper';
import type { Theme } from '../../../theme/them.types';
import { useTranslation } from 'react-i18next';

export const RowComponent = ({
  title,
  description,
  isLast,
  pending
}: {
  title: String;
  description: String;
  isLast?: boolean;
  pending?: boolean;
}) => {
  const { colors } = useTheme<Theme>();
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  return (
    <View
      style={[
        {
          flexDirection: isRtl ? 'row-reverse' : 'row',
          justifyContent: 'space-between',
          borderBottomWidth: isLast ? 0 : 1,
          borderBottomColor: colors?.primary,
          paddingVertical: HP(1),
          alignItems: 'center',
        },
        pending && { borderBottomColor: colors?.pending },
      ]}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            marginHorizontal: WP(1),
            maxWidth: WP(37),
            fontWeight: 'bold',
          }}
        >
          {title}:
        </Text>
      </View>
      <Text
        style={{
          textAlign: 'right',
          maxWidth: WP(50),
          marginEnd: WP(2),
          marginStart: WP(2),
        }}
      >
        {description}
      </Text>
    </View>
  );
};
