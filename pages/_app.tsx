import { createContext, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import type { LocaleCode, Translation } from 'locales'
import * as locales from 'locales'

interface ILocaleContext {
  t: Translation
  setLocale: (locale: 'en' | 'uk') => void
}

export const LocaleContext = createContext<ILocaleContext>({
  t: locales.en,
  setLocale: () => {},
})

function MyApp({ Component, pageProps, router }: AppProps) {
  const { events, locale } = router
  const [t, setT] = useState<Translation>(locales[locale as LocaleCode])
  const setLocale = (l: LocaleCode) => {
    setT(locales[l])
  }

  // Update
  useEffect(() => {
    setLocale(locale as LocaleCode)
  }, [locale])

  return (
    <>
      <LocaleContext.Provider value={{ t, setLocale }}>
        <Component {...pageProps} />
        <Analytics />
      </LocaleContext.Provider>
    </>
  )
}

export default MyApp
