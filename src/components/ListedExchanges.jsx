import { Container } from '@/components'
import Image from 'next/future/image'

import OkxLogo from '@/images/logos/okx.svg'
import HuobiLogo from '@/images/logos/huobi.svg'
import UniswapLogo from '@/images/logos/uniswap.svg'

const logos = [
  {
    name: 'OKX',
    image: OkxLogo,
    url: 'https://www.okx.com/markets/prices/skeb-coin-skeb',
  },
  {
    name: 'Huobi',
    image: HuobiLogo,
    url: 'https://www.huobi.com/en-us/exchange/skeb_usdt/',
  },
  {
    name: 'Uniswap',
    image: UniswapLogo,
    url: 'https://app.uniswap.org/#/swap?inputCurrency=0x6D614686550B9E1c1DF4b2cD8f91C9D4df66C810',
  },
]

export default function ListedExchanges() {
  return (
    <section id="" className="pb-14 sm:pb-20 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-neutral-800 sm:text-5xl">
            Listed Exchanges
          </h2>
          <div className="mx-auto max-w-3xl py-12 sm:mt-10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
              {logos.map((logo) => (
                <a
                  className="col-span-1 flex justify-center hover:opacity-80"
                  key={logo.name}
                  href={logo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="h-12 sm:h-14"
                    src={logo.image.src}
                    alt={logo.name}
                    width={logo.image.width}
                    height={logo.image.height}
                    layout="fill"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
