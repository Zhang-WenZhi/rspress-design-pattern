import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  // base: '/rspress-design-pattern/', # https://<USERNAME>.github.io/<REPO>/  base 设置为 '/<REPO>/'
  base: './',
  root: path.join(__dirname, 'docs'),
  title: 'Rspress WenZhi',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
