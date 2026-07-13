import './style.css'

import { GlobalProvider } from '../global-context'
import { NextIntlClientProvider } from 'next-intl'
export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlClientProvider
      locale={pageProps?.locale ?? 'en'}
      messages={pageProps?.messages ?? {}}
    >
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </NextIntlClientProvider>
  )
}
