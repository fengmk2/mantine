import { oxfmt, oxlint } from 'oxc-config-mantine';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*.{ts,tsx,css}': 'vp check --fix',
  },
  fmt: {
    ...oxfmt,
    ignorePatterns: [...oxfmt.ignorePatterns, '**/*.{json,yml,yaml}'],
  },
  lint: {
    ...oxlint,
    ignorePatterns: ['**/*.{mjs,cjs,js,d.ts,d.mts}'],
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: { ...oxlint.rules, 'vite-plus/prefer-vite-plus-imports': 'error' },
  },
});
