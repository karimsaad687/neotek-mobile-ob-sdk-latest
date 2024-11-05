import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import type { Theme } from '../../theme/them.types';
// Import your single SVG icon correctly
import ProgressBarIcon from '../../assets/progressBar/progressBar';
import { WP, HP } from '../../utils/helper';

interface ProgressBarProps {
  step: number;
}

const ProgressBar = ({ step }: ProgressBarProps) => {
  const { colors } = useTheme<Theme>();
  const { i18n, t } = useTranslation();

  const isRTL = i18n.dir() === 'rtl';

  const steps = [
    { title: t('progress.consent'), isActive: step >= 1 },
    { title: t('progress.authenticate'), isActive: step >= 2 },
    { title: t('progress.complete'), isActive: step >= 3 },
  ];

  return (
    <View>
      <View
        style={[
          styles.progressBarContainer,
          { flexDirection: isRTL ? 'row-reverse' : 'row' },
        ]}
      >
        {steps.map((item, index) => (
          <React.Fragment key={index}>
            <View style={styles.lineContainer}>
              <View
                style={[
                  styles.line,
                  {
                    backgroundColor: item.isActive ? colors?.primary : '#ddd',
                    width: WP(15),
                  },
                ]}
              />
              {/* <Text
                style={[
                  styles.circleTitle,
                  isRTL ? styles.circleTitleRTL : styles.circleTitleLTR,
                ]}
              >
                {item.title}
              </Text> */}
            </View>

            {index < steps.length - 1 && <View style={styles.space} />}
          </React.Fragment>
        ))}
      </View>

      <View
        style={[
          styles.iconContainer,
          { flexDirection: isRTL ? 'row-reverse' : 'row' },
        ]}
      >
        <ProgressBarIcon width={WP(90)} height={HP(15)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    alignItems: 'center',
    marginVertical: HP(2),
    paddingHorizontal: WP(25),
    justifyContent: 'space-evenly',
  },
  lineContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  line: {
    height: HP(0.8),
    marginTop: HP(1),
  },
  circleTitle: {
    marginTop: HP(0.5),
    fontSize: WP(3.5),
    color: '#333',
    textAlign: 'center',
  },
  circleTitleLTR: {},
  circleTitleRTL: {
    textAlign: 'right',
  },
  space: {
    width: WP(2),
  },
  iconContainer: {
    marginTop: HP(1),
    alignSelf: 'center',
  },
});

export default ProgressBar;
