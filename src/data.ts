import type { TCurrency } from 'src/types'

export const MONO_JAR = 'https://send.monobank.ua/jar/hbxwPtEkH'
export const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=KNFHWWGSVH2JN'
export const PAYPAL_EMAIL = 'olivia.ua@gmail.com'
export const WEBSITE_URL = 'https://save-lev.com'

export enum ELocaleNames {
  en = 'English',
  uk = 'Українська',
}

export enum ESocialLinks {
  facebook = 'https://www.facebook.com/SaveLevSMA/',
  instagram = 'https://instagram.com/save.lev.sma',
  instagramMom = 'https://instagram.com/maryklimenko',
  instagramDad = 'https://instagram.com/nikolaykotlyarchick',
  telegram = '',
}

export interface ICreditCard {
  number: string
  currency: TCurrency
  details: string[]
}

export const creditCards: ICreditCard[] = [
  {
    number: '4149629359490810',
    currency: 'UAH',
    details: [
      'Установа банку - ПриватБанк',
      'МФО банку - 305299',
      'Отримувач платежу - КОТЛЯРЧИК МАРІЯ ВІТАЛІЇВНА',
      'IBAN - UA693052990262086400936482777',
      'Рахунок отримувача - 262086400936482777',
      'Валюта картки - UAH',
      'РНОКПП отримувача - 3417900600',
      'Призначення платежу - Поповнення рахунку КОТЛЯРЧИК МАРІЯ ВІТАЛІЇВНА',
    ],
  },
  {
    number: '4149629359489705',
    currency: 'EUR',
    details: [
      'BENEFICIARY - KOTLIARCHYK MARIIA',
      'IBAN - UA593052990262026400936482562',
      'ACCOUNT - 4149629359489705',
      'BANK OF BENEFICIARY - JSC CB PRIVATBANK, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
      'SWIFT CODE/BIC: PBANUA2X',
      'CORRESPONDENT ACCOUNT - 623-160-5145',
      'INTERMEDIARY BANK - J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY',
      'SWIFT CODE/BIC: CHASDEFX',
    ],
  },
  {
    number: '4149629359487469',
    currency: 'USD',
    details: [
      'BENEFICIARY - KOTLIARCHYK MARIIA',
      'IBAN - UA293052990262046400936482296',
      'ACCOUNT - 4149629359487469',
      'BANK OF BENEFICIARY - JSC CB PRIVATBANK, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
      'SWIFT CODE/BIC: PBANUA2X',
      'CORRESPONDENT ACCOUNT - 0011000080',
      'INTERMEDIARY BANK - JP MORGAN CHASE BANK',
      'SWIFT CODE/BIC: CHASUS33',
    ],
  },
]
