import { TCurrency, TForeignCurrency } from './types'

export const fundraisingGoalUSD = 2100000
export const fundraisingStartDate = '2022-07-21'

export interface IFundraisingStatus {
  Cash: Record<TCurrency, number>
  MonoJarUAH: number
  PayPalUSD: number
  Privat: Record<TCurrency, number>
  NBU: Record<TForeignCurrency, number>
}

export const fundraisingStatus: IFundraisingStatus = {
  Cash: {
    UAH: 516052.5,
    USD: 0,
    EUR: 0,
  },
  MonoJarUAH: 1166738.29,
  PayPalUSD: 7954.31,
  Privat: {
    UAH: 3395041,
    USD: 1647,
    EUR: 1374,
  },
  NBU: {
    EUR: 37.25,
    USD: 36.6,
  },
}

const { Cash, MonoJarUAH, NBU, PayPalUSD, Privat } = fundraisingStatus

const numberToFixed = (value: number): number => Number(Number(value).toFixed(1))

export const usdToEur = NBU.USD / NBU.EUR

export const fundraisingGoals: Record<TCurrency, number> = {
  UAH: numberToFixed(fundraisingGoalUSD * NBU.USD),
  EUR: numberToFixed(fundraisingGoalUSD * usdToEur),
  USD: fundraisingGoalUSD,
}

export const fundraisingTotals: Record<TCurrency, number> = {
  UAH: Cash.UAH + MonoJarUAH + Privat.UAH,
  USD: Cash.USD + PayPalUSD + Privat.USD,
  EUR: Cash.EUR + Privat.EUR,
}

export const totalInUAH = numberToFixed(
  fundraisingTotals.EUR * NBU.EUR + fundraisingTotals.UAH + fundraisingTotals.USD * NBU.USD,
)
