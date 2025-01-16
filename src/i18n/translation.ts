import { siteConfig } from '@/config';
import type I18nKey from './i18nKey';

import { en } from './langs/en';
import { zh_CN } from './langs/zh_CN';
import { zh_TW } from './langs/zh_TW';

export type Translation = {
  [K in I18nKey]: string;
};

const defaultTranslation = en;

const map: { [key: string]: Translation } = {
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
};

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation;
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'en';
  return getTranslation(lang)[key];
}
