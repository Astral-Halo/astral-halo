import type I18nKey from '@i18n/I18nKey';

export type SiteConfig = {
  title: string;
  subtitle: string;
  lang: string;
  copyrightYear: number;
  favicon: (string | { src: string; theme?: 'light' | 'dark' })[];
  postsPerPage: number;
};

export type ProfileConfig = {
  avatar?: string;
  name: string;
  bio?: string;
  links: {
    name: string;
    url: string;
    icon: string;
  }[];
};

export type NavbarConfig = {
  navbarCenterItems: { text: string | I18nKey; href?: string; onclick?: string }[];
  navbarRightItems: {
    onlyWide: {
      icon: string;
      text: string | I18nKey;
      href?: string;
      onclick?: string;
    }[];
    always: { icon: string; text?: string; href?: string; onclick?: string }[];
  };
};

export type ToolBarConfig = {
  enable: boolean;
  items: {
    icon: string;
    text?: string;
    href?: string;
    onclick?: string;
  }[];
};

export type LicenseConfig = {
  enable: boolean;
  name: string;
  url: string;
};
