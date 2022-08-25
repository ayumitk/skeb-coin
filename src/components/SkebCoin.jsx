import Image from 'next/future/image'
import skebCoinImage from '@/images/skeb-coin.svg'
import { Container } from '@/components'

import {
  StatusOnlineIcon,
  FireIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/outline'

const features = [
  {
    text: 'Conforms to the most common standard ERC20 on Ethereum',
    icon: StatusOnlineIcon,
  },
  {
    text: 'Burns Skeb Coins as requests for creators on Skeb increases',
    icon: FireIcon,
  },
  {
    text: 'Uses instant payment method for low-cost and high-frequency transactions',
    icon: SwitchHorizontalIcon,
  },
]

export default function SkebCoin(props) {
  return (
    <section id="SkebCoin" {...props}>
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-neutral-800 sm:mb-6 sm:text-5xl lg:text-6xl">
            What is <span className="text-teal-500">Skeb Coin</span>?
          </h2>

          <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className="order-2 my-8 sm:order-1">
              <p className="text-lg text-neutral-600 lg:text-xl lg:leading-loose">
                Skeb Coin is a crypto asset that enables smooth transactions
                between creators and their fans. For instance, users can use
                their sales to make requests to other users with Skeb Coin,
                facilitating the mutual exchange of value in the creative
                industry.
              </p>
              <ul className="mt-10 space-y-8 sm:space-y-5">
                {features.map((item) => (
                  <li key={item.text} className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal-500 text-white sm:h-14 sm:w-14">
                      <item.icon
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-lg font-medium leading-snug text-neutral-800 sm:text-xl">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="order-1 mt-8 w-1/3 shrink-0 sm:order-2 sm:ml-9"
              aria-hidden="true"
            >
              <Image
                src={skebCoinImage}
                alt=""
                width={skebCoinImage.width}
                height={skebCoinImage.height}
                layout="fill"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
