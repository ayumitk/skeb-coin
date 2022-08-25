import { Container, Logo } from '@/components'
import Link from 'next/link'
import { ExternalLinkIcon } from '@heroicons/react/outline'

export default function Footer() {
  const iconClasses = 'h-7 w-7'
  const twitterIcon = (
    <svg viewBox="0 0 512 512" fill="currentColor" className={iconClasses}>
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
  )
  const mediumIcon = (
    <svg viewBox="0 0 640 512" fill="currentColor" className={iconClasses}>
      <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
    </svg>
  )
  const telegramIcon = (
    <svg viewBox="0 0 496 512" fill="currentColor" className={iconClasses}>
      <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
    </svg>
  )
  const links = [
    { name: 'Twitter', url: 'https://twitter.com/SkebCoin', icon: twitterIcon },
    {
      name: 'Medium in English',
      url: 'https://medium.com/skebcoin',
      icon: mediumIcon,
    },
    {
      name: 'Medium in Japanese',
      url: 'https://medium.com/skeb-jp',
      icon: mediumIcon,
    },
    {
      name: 'Telegram Announcement',
      url: 'https://t.me/skeb_coin',
      icon: telegramIcon,
    },
    {
      name: 'Telegram Chat',
      url: 'https://t.me/SkebCoin_chat',
      icon: telegramIcon,
    },
  ]

  return (
    <footer className="bg-neutral-50 py-16">
      <Container>
        <div className="mb-8">
          <Logo className="mx-auto h-12 w-auto" />
        </div>
        <div className="flex flex-col justify-center gap-12 sm:flex-row sm:gap-24">
          <div className="flex flex-col text-lg sm:pl-24">
            <Link href="/" className="text-neutral-500 hover:text-teal-500">
              Home
            </Link>
            <Link
              href="/lightpaper"
              className="text-neutral-500 hover:text-teal-500"
            >
              Lightpaper
            </Link>
            <a
              href="https://skeb.jp"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-teal-500"
            >
              Launch App
              <ExternalLinkIcon className="ml-1 inline-block h-5 w-5" />
            </a>
          </div>
          <div className="order-1 mb-16 flex flex-col gap-y-2 sm:order-2">
            {links.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                key={link.name}
                className="flex text-neutral-500 hover:text-teal-500"
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-neutral-500">
          Copyright &copy; {new Date().getFullYear()} Skeb Coin. All rights
          reserved.
        </p>
      </Container>
    </footer>
  )
}
