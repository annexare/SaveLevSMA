import type { Translation } from './en'

export const uk: Translation = {
  title: 'Врятуємо Лева з СМА',
  name: 'Лев Котлярчик',
  description:
    'У віці 8.5 місяців у мене діагностували СМА. Але я хочу жити, допоможіть мені вилікуватись.',
  articleAt: (zine: string) => `Стаття на ${zine}`,
  fundraisingTotal: 'Всього зібрано коштів',
  fundraisingDays: (days = 0): string => {
    const lastDigit: number = Number(`${days}`.split('').pop())
    let plural = 'днів'

    if (lastDigit === 1 && !`${days}`.endsWith('11')) {
      plural = 'день'
    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      !`${days}`.endsWith('12') &&
      !`${days}`.endsWith('13') &&
      !`${days}`.endsWith('14')
    ) {
      plural = 'дні'
    }

    return `за ${days} ${plural}`
  },
  fundraisingClosed:
    'Збір коштів наразі закритий, будь ласка перейдіть у мої соціальні мережі за детальною інформацією. Я щиро дякую кожному з вас за таку підтримку!',
  infoH1: 'Привіт, мене звати Лев і мені діагностували СМА',
  infoBody: [
    'Нажаль, у мене діагностували СМА коли мені було 8.5 місяців.',
    'Але з вашою допомогою я зможу одужати і прожити повноцінне життя.',
    'Дякую!',
  ],
  infoGoal:
    'Зібрані кошти підуть на реабілітацію та відновлення фізичних вмінь та здібностей після введення Zolgensma (препарат генної терапії, що здатний зупинити СМА).',
  infoSMA1Title: 'Що таке СМА?',
  infoSMA1: [
    'СМА (Спінальна м’язова атрофія) - це генетичне захворювання, яке атрофує м’язи. Без лікування - СМЕРТЕЛЬНЕ.',
    'Станом на сьогодні у світі існують наступні ліки від СМА:',
    '1. Zolgensma - укол, що врятує життя і дасть надію на відновлення максимально наближеного до повноцінного життя.',
    '2. Risdiplam (Evrysdi) - підтримуючі краплі. Допомагають не втратити сили та здібності, які вже маю поки чекаю на Zolgensma.',
    '3. Spinraza (Nusinersen) - також підтримуючі ін’єкції.',
  ],
  infoSMA2Title: 'Куди і на що підуть кошти?',
  infoSMA2: [
    'Всі кошти підуть виключно на лікування і що для нього критично необхідно.',
    'В Україні безкоштовної програми від держави, як і лікування від СМА, немає.',
    'Вартість 1 уколу Zolgensma коштує близько $2.1 млн. (точна сума залежить від курсу валют). Плюс довготривала реабілітація та супутні витрати.',
    'Також намагаємось потрапити у безкоштовну програму лікування від СМА за кордоном (в багатьох країнах ЄС ці препарати зареєстровані та закуповуються за рахунок держави). Якщо нам пощастить у цьому і/чи залишаться кошти після одужання — ми обов’язково відправимо увесь залишок на лікування інших діток з СМА в Україні.',
  ],
  ibanPaymentDetails: 'IBAN, реквізити',
  monoBanka: 'Банка Monobank',
  monoDonate: 'Поповнити',
  paymentDetails: 'Збір коштів',
  paypalTemporarilyDisabled:
    'Наразі PayPal перевіряє наші документи і тимчасово вимкнув зарахування коштів. Підтримка сервісу каже що це може зайняти кілька днів :( Ми приберемо це повідомлення як тільки все знову буде працювати.',
  socialDad: 'Мій тато в',
  socialMom: 'Моя мама в',
  socialMy: 'Мій',
  socialNetworks: 'Соціальні мережі',
  socialNetworksInfo: 'Ви можете знайти мої фото, відео та всі оновлення тут:',
  thankYou: 'Щиро дякуємо вам!',
  tvAndNews: 'Про нас: ТБ та новини',
  zolgensmaPrice:
    'Приблизна вартість Zolgensma — 2.1 мільйони доларів США.\nПлюс довготривала реабілітація та супутні витрати.',

  actionClose: 'Закрити',
  actionLanguage: 'Мова',
} as const
