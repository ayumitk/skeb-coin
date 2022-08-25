import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps, canonical }) {
  return (
    <>
      <Component {...pageProps} canonical={canonical} />
    </>
  )
}
