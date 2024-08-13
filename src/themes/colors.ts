import {Platform} from 'react-native';

type ColorPalette = {
  // Text Colors
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  textOnDark: string;

  // Icon Colors
  iconPrimary: string;

  // Accent and Link Colors
  accentColor: string;
  linkColor: string;

  // Status Colors
  success: string;
  warning: string;
  error: string;

  // Background Colors
  backgroundMuted: string;
  backgroundLight: string;
  backgroundDefault: string;
  backgroundPrimary: string;
  backgroundPrimaryLight: string;
  backgroundSecondary: string;
  backgroundSecondaryDark: string;

  // Support Colors
  supportCyan: string;
  supportCyanLight: string;
  supportCyanDark: string;
  supportTeal: string;
  supportLime: string;
  supportLimeLight: string;
  supportYellow: string;
  supportYellowLight: string;
  supportYellowDark: string;

  // Feedback Background Colors
  errorBackgroundLight: string;
  errorBackgroundDark: string;
  successBackgroundLight: string;
  successBackgroundDark: string;
  warningBackgroundLight: string;
  warningBackgroundDark: string;
};

export const opacity = {
  blackOpacity: 'rgba(0,0,0,0.5)',
  modalOpacity: 'rgba(72, 72, 72, 0.8)',
  shadowCardOpacity:
    Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
};

const colors: ColorPalette = {
  // Text Colors
  textPrimary: '#27272a', // Main text color
  textSecondary: '#71717a', // Weaker text for less emphasis
  textDisabled: '#d4d4d8', // Disabled text, for inactive elements
  textOnDark: '#ffffff', // Text color for dark backgrounds

  // Icon Colors
  iconPrimary: '#0078e0', // Primary color for icons

  // Accent and Link Colors
  accentColor: '#c30845', // Accent color for highlights
  linkColor: '#5839f2', // Link color

  // Status Colors
  success: '#1ac857', // Success state color
  warning: '#c18a04', // Warning state color
  error: '#f67416', // Error state color

  // Background Colors
  backgroundMuted: '#e4e4e7', // Subtle background color
  backgroundLight: '#f4f4f5', // Light background for less emphasis
  backgroundDefault: '#ffffff', // Default white background
  backgroundPrimary: '#f76b6b', // Main background color
  backgroundPrimaryLight: '#fef1f1', // Light version of the primary background
  backgroundSecondary: '#5839f2', // Secondary background color
  backgroundSecondaryDark: '#2348c8', // Darker version of secondary background

  // Support Colors
  supportCyan: '#7c73fc', // Support color cyan
  supportCyanLight: '#eff7ff', // Light cyan for background or highlights
  supportCyanDark: '#84adbf', // Darker cyan for emphasis
  supportTeal: '#028673', // Support color teal
  supportLime: '#bedf02', // Support color lime
  supportLimeLight: '#ecf0ff', // Light lime for background or highlights
  supportYellow: '#f1be71', // Support color yellow
  supportYellowLight: '#846e0e', // Light yellow for background or highlights
  supportYellowDark: '#864e0e', // Darker yellow for emphasis

  // Feedback Background Colors
  errorBackgroundLight: '#fef6d6', // Light background for error states
  errorBackgroundDark: '#9b3b12', // Dark background for error states
  successBackgroundLight: '#defce9', // Light background for success states
  successBackgroundDark: '#1c713e', // Dark background for success states
  warningBackgroundLight: '#fef9c3', // Light background for warning states
  warningBackgroundDark: '#864e0e', // Dark background for warning states
};

export default colors;
