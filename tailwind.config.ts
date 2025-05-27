import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: {
          default: 'var(--border-default)',
          muted: 'var(--border-muted)',
        },
        table: {
          bg: 'var(--table-bg)',
          border: 'var(--table-border)',
        },
      },
      dropShadow: {
        table: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
