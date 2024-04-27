import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { locale, toggleLocale } = useLanguage();

  // Dynamically load messages based on the current locale
  const messages = locale === 'en' ? require('../locales/en.json') : require('../locales/sw.json');

  return (
    <div>
      <button onClick={toggleLocale}>{messages.swtchLanguage}</button>
      <p>{messages.currentLanguage}: {locale}</p>
      <p>{messages.welcomeMessage}</p>
    </div>
  );
};

export default LanguageSwitcher;
