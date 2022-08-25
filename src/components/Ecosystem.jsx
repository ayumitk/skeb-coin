import Image from 'next/future/image'
import ecosystemImage from '@/images/ecosystem.svg'
import ecosystemMobile from '@/images/ecosystem-mobile.svg'
import { Container } from '@/components'

import skebCoinImage from '@/images/skeb-coin.svg'
import burningImage from '@/images/burning.svg'
import rewardImage from '@/images/reward.svg'
import padlockImage from '@/images/padlock.svg'
import benefitsImage from '@/images/benefits.svg'

export default function Ecosystem(props) {
  const data = [
    {
      title: 'Buy-back mechanism',
      text: 'The more Skeb service is used, the more Skeb Coins are bought back. Up to 50% of commission that Skeb receives through their service is used to buy tokens on the market. Skeb receives as commission around 5-10% of the transaction volume which includes optional services such as picture framing. There will be more services in the future as well.',
      image: skebCoinImage,
    },
    {
      title: 'Burning Skeb Coin',
      text: 'According to the governance, up to 60% of bought-back tokens are burnt.',
      image: burningImage,
    },
    {
      title: 'Staking for core Skeb users',
      text: 'Skeb users benefit by staking Skeb Coins in the contract. Your share increases with the square of the amount of staked tokens. The more you stake, the more benefits you get within the service, including tickets to offline events, waiver of fees, and more coming in the future.',
      image: rewardImage,
    },
    {
      title: 'Lock up',
      text: 'There is a mechanism to disincentivize users from withdrawing staked tokens before their maturity. A certain percentage of tokens are deducted to pool them in the treasury for buying back or benefiting other users.',
      image: padlockImage,
    },
    {
      title: 'More coming up',
      text: 'There are more utilities coming up to benefit Skeb users and Skeb Coin holders to maximize the value of the community.',
      image: benefitsImage,
    },
  ]
  return (
    <section id="TokenEcosystem" {...props}>
      <Container>
        <h2 className="mb-8 text-center text-3xl font-bold text-neutral-800 sm:mb-12 sm:text-5xl">
          Token Ecosystem
        </h2>
        <div className="mx-auto max-w-4xl">
          <Image
            src={ecosystemImage}
            alt="Token Ecosystem image"
            width={ecosystemImage.width}
            height={ecosystemImage.height}
            layout="fill"
            className="hidden w-full sm:block"
          />
          <Image
            src={ecosystemMobile}
            alt="Token Ecosystem image"
            width={ecosystemMobile.width}
            height={ecosystemMobile.height}
            layout="fill"
            className="w-full sm:hidden"
          />
        </div>
        {/* <ul className="mt-20 flex-wrap justify-center sm:mt-28 sm:flex">
          {data.map((item) => (
            <li key={item.title} className="py-6 sm:w-1/2 sm:px-6 lg:w-1/3">
              <Image
                src={item.image}
                alt=""
                width={item.image.width}
                height={item.image.height}
                layout="fill"
                className="mx-auto mb-4 h-16 w-16 sm:mx-0"
              />
              <h3 className="mb-2 text-center text-2xl font-bold leading-tight text-neutral-800 sm:text-left">
                {item.title}
              </h3>
              <p className="text-lg text-neutral-600">{item.text}</p>
            </li>
          ))}
        </ul> */}
      </Container>
    </section>
  )
}
