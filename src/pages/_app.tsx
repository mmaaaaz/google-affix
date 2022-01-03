import '@/styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Script
          strategy="lazyOnload"
          id="themeSet"
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `
          }}
        />
      </ThemeProvider>
    </>
  )
}

export default MyApp
