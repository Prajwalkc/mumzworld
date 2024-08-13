import {useTranslation} from 'react-i18next';
import log from '../utils/logs';

interface IUseIntlHook {
  translate: (translatedString: TranslatedString) => string;
}

export interface TranslatedString {
  defaultMessage: string;
  id: string;
  data?: Record<string, string>;
}

const useIntl = (): IUseIntlHook => {
  const {t: translateString} = useTranslation();

  const getTranslateWithData = (translatedString: TranslatedString): string => {
    let translated =
      translateString(translatedString?.id) ?? translatedString?.defaultMessage;
    if (translatedString?.data !== undefined) {
      Object.keys(translatedString.data).forEach(dataKey => {
        if (translatedString.data !== undefined) {
          translated = translated.replaceAll(
            '{' + dataKey + '}',
            translatedString?.data[dataKey],
          );
        }
      });
    }

    return translated;
  };

  const translate = (translatedString: TranslatedString): string => {
    if (translatedString?.data !== null) {
      return getTranslateWithData(translatedString);
    }

    if (translatedString?.id !== null) {
      if (translatedString?.defaultMessage === null) {
        log.warn(
          `😾 You forgot to add the default message for the translation id : "${translatedString.id}..."`,
        );
      }
    }
    if (translatedString?.id !== null) {
      if (translateString(translatedString.id) === translatedString.id) {
        return translatedString?.defaultMessage;
      } else {
        return translateString(translatedString.id);
      }
    }

    return __DEV__
      ? `${translatedString.defaultMessage} ⚠`
      : translatedString.defaultMessage;
  };

  return {translate};
};

export default useIntl;
