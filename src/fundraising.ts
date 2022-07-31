import { TCurrency, TForeignCurrency } from './types'

export const fundraisingGoalUSD = 2100000
export const fundraisingStartDate = '2022-07-21'

export interface IFundraisingStatus {
  MonoJar: number
  PayPal: number
  Privat: Record<TCurrency, number>
  NBU: Record<TForeignCurrency, number>
}

export const fundraisingStatus: IFundraisingStatus = {
  MonoJar: 935245.61,
  PayPal: 6131.52,
  Privat: {
    UAH: 3071187.50,
    USD: 580,
    EUR: 906,
  },
  NBU: {
    EUR: 37.25,
    USD: 36.6,
  },
}

const { MonoJar, NBU, PayPal, Privat } = fundraisingStatus

const numberToFixed = (value: number): number => Number(Number(value).toFixed(1))

export const usdToEur = NBU.USD / NBU.EUR

export const totalInUAH = numberToFixed(
  MonoJar + PayPal * NBU.USD + Privat.UAH + Privat.EUR * NBU.EUR + Privat.USD * NBU.USD,
)

export const fundraisingGoals: Record<TCurrency, number> = {
  UAH: numberToFixed(fundraisingGoalUSD * NBU.USD),
  EUR: numberToFixed(fundraisingGoalUSD * usdToEur),
  USD: fundraisingGoalUSD,
}
