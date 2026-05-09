import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F1E6',
        cyan: '#00C2CB',
        magenta: '#FF00DF',
        yellow: '#FFF700'
      },
      borderRadius: { brutal: '6px' },
      boxShadow: { brutal: '6px 6px 0 #000000' }
    }
  },
  plugins: []
};

export default config;
