import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gap: {
        '5.5': '5.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {},
    },
    colors: {
      white: 'rgb(255, 255, 255)',
      'purple-dark': '#7B4AE2',
      'purple-dull': 'rgba(123,74,226,0.5)',
      'purple-dull-10': 'rgba(123,74,226,0.1)',
    },
    padding: {
      '7.30%': '7.30%',
    },
  },
  plugins: [],
};
export default config;
