import Image from 'next/future/image'
import { Layout, Container } from '@/components'
import { useRouter } from 'next/router'
import { DownloadIcon } from '@heroicons/react/outline'

import LogotypeLightColorSvg from '@/images/brand-assets/logotype-light-color.svg'
import LogotypeLightColorPng from '@/images/brand-assets/logotype-light-color.png'
import LogotypeDarkColorSvg from '@/images/brand-assets/logotype-dark-color.svg'
import LogotypeDarkColorPng from '@/images/brand-assets/logotype-dark-color.png'
import LogotypeLightMonoSvg from '@/images/brand-assets/logotype-light-mono.svg'
import LogotypeLightMonoPng from '@/images/brand-assets/logotype-light-mono.png'
import LogotypeDarkMonoSvg from '@/images/brand-assets/logotype-dark-mono.svg'
import LogotypeDarkMonoPng from '@/images/brand-assets/logotype-dark-mono.png'

import TokenLightColorSvg from '@/images/brand-assets/token-light-color.svg'
import TokenLightColorPng from '@/images/brand-assets/token-light-color.png'
import TokenDarkColorSvg from '@/images/brand-assets/token-dark-color.svg'
import TokenDarkColorPng from '@/images/brand-assets/token-dark-color.png'
import TokenLightMonoSvg from '@/images/brand-assets/token-light-mono.svg'
import TokenLightMonoPng from '@/images/brand-assets/token-light-mono.png'
import TokenDarkMonoSvg from '@/images/brand-assets/token-dark-mono.svg'
import TokenDarkMonoPng from '@/images/brand-assets/token-dark-mono.png'

const logotypes = [
  {
    png: LogotypeLightColorPng,
    svg: LogotypeLightColorSvg,
    name: 'Logotype light color',
  },
  {
    png: LogotypeDarkColorPng,
    svg: LogotypeDarkColorSvg,
    name: 'Logotype dark color',
  },
  {
    png: LogotypeLightMonoPng,
    svg: LogotypeLightMonoSvg,
    name: 'Logotype light mono',
  },
  {
    png: LogotypeDarkMonoPng,
    svg: LogotypeDarkMonoSvg,
    name: 'Logotype dark mono',
  },
]

const tokens = [
  {
    png: TokenLightColorPng,
    svg: TokenLightColorSvg,
    name: 'Token light color',
  },
  {
    png: TokenDarkColorPng,
    svg: TokenDarkColorSvg,
    name: 'Token dark color',
  },
  {
    png: TokenLightMonoPng,
    svg: TokenLightMonoSvg,
    name: 'Token light mono',
  },
  {
    png: TokenDarkMonoPng,
    svg: TokenDarkMonoSvg,
    name: 'Token dark mono',
  },
]

export default function BrandAssets() {
  const pageTitle = 'Brand Assets'
  const pageDescription =
    'Skeb Coin is the native token of the Skeb ecosystem. Its economy includes transaction fees, staking, locks, liquidity incentives, buy backs, burns, and a DAO treasury. These are powered by fees in the Skeb ecosystem.'
  const router = useRouter()

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      path={router.route}
    >
      <div className="mx-auto max-w-5xl">
        <Container>
          <h2 className="mb-6 sm:mb-12 text-center text-3xl font-bold text-neutral-800 sm:text-5xl">
            Logotype
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-20 md:mb-36 lg:mb-56">
            {logotypes.map((logotype) => (
              <li key={logotype.name}>
                <Image
                  className="border border-neutral-200"
                  src={logotype.svg.src}
                  alt={logotype.name}
                  width={logotype.svg.width}
                  height={logotype.svg.height}
                  layout="fill"
                />
                <div className="mt-2 flex justify-center space-x-2">
                  <a
                    href={logotype.png.src}
                    download
                    className="block rounded-xl border border-neutral-300 py-2 pl-4 pr-2 text-neutral-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-500"
                  >
                    PNG
                    <DownloadIcon className="inline-block h-5 w-5" />
                  </a>
                  <a
                    href={logotype.svg.src}
                    download
                    className="block rounded-xl border border-neutral-300 py-2 pl-4 pr-2 text-neutral-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-500"
                  >
                    SVG
                    <DownloadIcon className="inline-block h-5 w-5" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="mb-6 sm:mb-12 text-center text-3xl font-bold text-neutral-800 sm:text-5xl">
            Token
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 mb-20 md:mb-36 lg:mb-56">
            {tokens.map((token) => (
              <li key={token.name}>
                <Image
                  className="border border-neutral-200"
                  src={token.svg.src}
                  alt={token.name}
                  width={token.svg.width}
                  height={token.svg.height}
                  layout="fill"
                />
                <div className="mt-2 flex justify-center space-x-2">
                  <a
                    href={token.png.src}
                    download
                    className="block rounded-xl border border-neutral-300 py-2 pl-4 pr-2 text-neutral-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-500"
                  >
                    PNG
                    <DownloadIcon className="inline-block h-5 w-5" />
                  </a>
                  <a
                    href={token.svg.src}
                    download
                    className="block rounded-xl border border-neutral-300 py-2 pl-4 pr-2 text-neutral-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-500"
                  >
                    SVG
                    <DownloadIcon className="inline-block h-5 w-5" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </Layout>
  )
}
