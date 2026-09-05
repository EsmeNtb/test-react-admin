import polyglotI18nProvider from 'ra-i18n-polyglot';
import {spanishMessages} from './spanishMessages';

export const I18nProvider = polyglotI18nProvider(
    locale => spanishMessages, 'es' 
);