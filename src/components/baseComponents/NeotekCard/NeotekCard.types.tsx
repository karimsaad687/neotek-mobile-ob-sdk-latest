import type { TranslationResult } from '../../../i18n';
import type { ReactNode } from 'react'; // Import ReactNode

export interface CardProps {
  title: TranslationResult;
  description: string;
  icon: ReactNode; // Updated type to handle both images and SVG components
  onPress: () => void;
}
