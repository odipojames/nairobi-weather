import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App';
import './index.css';
import messages_en from './locales/en.json'; // Import English messages
import messages_sw from './locales/sw.json'; // Import Swahili messages

// Determine the user's preferred language (e.g., from user settings or browser locale)
const userLanguage = 'en'; // Default to English for demonstration purposes

// Define messages object based on the user's preferred language
const messages = {
  en: messages_en,
  sw: messages_sw,
};

createRoot(document.getElementById('root')).render(
  <IntlProvider locale={userLanguage} messages={messages[userLanguage]}>
    <App />
  </IntlProvider>
);
