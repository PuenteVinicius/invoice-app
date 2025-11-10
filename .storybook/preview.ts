// .storybook/preview.ts
import type { Preview } from '@storybook/react';
import '../.next/static/css/app/layout.css'; 
import '../.next/static/css/app/page.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true, // Importante para Next.js 13+
    },
  },
};

export default preview;