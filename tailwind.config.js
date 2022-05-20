const withOpacityValue =
  (colorValue) =>
  ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${colorValue}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${colorValue}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${colorValue}))`
  }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: withOpacityValue('--primary'),
        'primary-2': withOpacityValue('--primary-2'),
        'primary-3': withOpacityValue('--primary-3'),
        secondary: withOpacityValue('--secondary'),
        'secondary-2': withOpacityValue('--secondary-2'),
        'secondary-3': withOpacityValue('--secondary-3'),
        'input-border': withOpacityValue('--input-border'),
      },
      textColor: {
        primary: withOpacityValue('--text-primary'),
        secondary: withOpacityValue('--text-secondary'),
      },
    },
  },
  plugins: [],
}
