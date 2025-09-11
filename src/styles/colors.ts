export const colors = {
  // Primary brand colors
  brand: {
    primary: '#662d91',
    secondary: '#302e9c',
    gradientStart: '#662d91',
    gradientEnd: '#302e9c',
  },

  // Text colors
  text: {
    primary: '#181d27',
    secondary: '#414651',
    tertiary: '#535862',
    disabled: '#a4a7ae',
    light: '#e9d7fe',
    white: '#ffffff',
    black: '#000000',
    dark: '#252b37',
    lighter: '#717680',
  },

  // Background colors
  background: {
    white: '#ffffff',
    light: '#f9fafb',
    lighter: '#f3f4f6',
    lightest: '#e5e7eb',
    transparent: 'transparent',
  },

  // Border colors
  border: {
    primary: '#d5d7da',
    secondary: '#c1c4c9',
    tertiary: '#b8bcc5',
    light: '#e9eaeb',
    brand: '#7f56d9',
    white: 'rgba(255, 255, 255, 0.12)',
  },

  // State colors
  state: {
    hover: {
      light: '#f5f5f5',
      lighter: '#fafafa',
      medium: '#d9d9d9',
      background: 'rgba(255, 255, 255, 0.05)',
      backgroundMedium: 'rgba(255, 255, 255, 0.12)',
    },
    focus: {
      outline: '#4285f4',
      ring: '#9e77ed',
    },
  },

  // Shadow colors (rgba values)
  shadow: {
    light: 'rgba(10, 13, 18, 0.05)',
    medium: 'rgba(10, 13, 18, 0.08)',
    dark: 'rgba(10, 13, 18, 0.1)',
    darker: 'rgba(10, 13, 18, 0.12)',
    inset: 'rgba(10, 13, 18, 0.18)',
    ring: 'rgba(158, 119, 237, 0.4)',
    ringTransparent: 'rgba(158, 119, 237, 0)',
    ringLight: 'rgba(158, 119, 237, 0.2)',
  },

  // Overlay colors
  overlay: {
    dark: 'rgba(0, 0, 0, 0.5)',
    light: 'rgba(255, 255, 255, 0.3)',
    gradientDark: 'rgba(0, 0, 0, 0.2)',
    gradientMedium: 'rgba(0, 0, 0, 0.1)',
    gradientDarker: 'rgba(0, 0, 0, 0.4)',
  },
} as const;

export type Colors = typeof colors;
