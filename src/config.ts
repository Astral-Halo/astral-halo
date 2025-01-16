import type { LicenseConfig, ProfileConfig, SiteConfig, NavbarConfig } from './types/config';

import I18nKey from '@i18n/i18nKey';
import { i18n } from '@i18n/translation';

export const siteConfig: SiteConfig = {
  title: 'Astral Halo',
  lang: 'zh_CN', // "en" | "zh_CN" | "zh_TW"
  favicon: [''],
};

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',
  name: 'John Doe',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  links: [],
};

export const navbarConfig: NavbarConfig = {
  navbarCenterItems: [
    { text: i18n(I18nKey.archive), href: '/archive' },
    { text: i18n(I18nKey.categories), href: '/categories' },
    { text: i18n(I18nKey.tags), href: '/tags' },
    { text: i18n(I18nKey.about), href: '/about' },
  ],
  navbarRightItems: {
    onlyWide: [
      // Items displayed only when the width is greater than 768px.
      // 仅在宽度大于 768px 时显示的项目
      { icon: 'material-symbols:rss-feed-rounded', text: i18n(I18nKey.subscribe), onclick: '' },
    ],
    always: [
      { icon: 'material-symbols:casino', text: i18n(I18nKey.randomPost), onclick: '' },
      { icon: 'material-symbols:search-rounded', text: i18n(I18nKey.search), onclick: '' },
    ],
  },
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
};
