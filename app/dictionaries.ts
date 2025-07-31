import 'server-only';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'es') => {
  if (!(locale in dictionaries)) {
    // fallback to English if locale is not supported
    return dictionaries.en();
  }
  return dictionaries[locale as 'en' | 'es']();
};
