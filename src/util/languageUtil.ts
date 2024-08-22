import { translateLan } from '../constants/languageTranslate';

export const translateText = (text: string, ln?: string) => {
  if (!ln) ln = 'us';
  const lang: any = translateLan[ln as keyof typeof translateLan];
  if (lang && typeof lang === 'object') {
    return lang[text];
  }
  return '';
};
