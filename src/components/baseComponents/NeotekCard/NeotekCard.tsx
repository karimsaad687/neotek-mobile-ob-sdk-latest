import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import type { CardProps } from './NeotekCard.types';
import styles from './NeotekCard.styles';
import type { Theme } from '../../../theme/them.types';

const NeotekCard: React.FC<CardProps> = ({
  title,
  description,
  icon,
  onPress,
}) => {
  const theme = useTheme<Theme>();
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const Title = () => {
    return title?.toString();
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: theme.colors?.card || '#fff',
          overflow: 'hidden',
          borderColor: theme.colors?.primary,
        },
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.rowContainer,
          { flexDirection: isRtl ? 'row-reverse' : 'row' },
        ]}
      >
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              {
                color: theme.colors?.heading || '#000',
                textAlign: isRtl ? 'right' : 'left',
              },
            ]}
          >
          </Text>
          <Text
            style={[
              styles.description,
              {
                color: theme.colors?.subheading || '#666',
                textAlign: isRtl ? 'right' : 'left',
              },
            ]}
          >
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NeotekCard;
