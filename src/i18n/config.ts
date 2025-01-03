import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTransaction } from './languages/en';
import { ptBrTransaction } from './languages/ptBR';

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  resources: { en: enTransaction, 'pt-BR': ptBrTransaction },
});

export default i18next;
