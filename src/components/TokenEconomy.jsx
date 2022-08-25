import Image from 'next/future/image'
import { Container } from '@/components'

import ecosystemIncome from '@/images/ecosystem-income.svg'
import tokenValue from '@/images/token-value.svg'
import tokenStaking from '@/images/token-staking.svg'

export default function TokenEconomy(props) {
  const data = [
    {
      title: '1. Ecosystem Income',
      content: [
        '1.1. Transaction Fees: Fee on platform payments',
        '1.2. Merchandise: Art buyers can schedule frames for their purchase',
      ],
      image: ecosystemIncome,
    },
    {
      title: '2. Token Value',
      content: [
        '2.1. DAO Treasury: Skeb ecosystem feeds transaction fees to a DAO treasury',
        '2.2. Buy backs: DAO can vote to use treasury fees for buy backs',
        '2.3. Staking: DAO can vote to use bought back tokens for staking rewards',
        '2.4. Burns: DAO can vote to burn bought back tokens',
      ],
      image: tokenValue,
    },
    {
      title: '3. Token Staking',
      content: [
        '3.1. DAO Participation: Only stakers can participate in the community DAO',
        '3.2. Lock-up: Staking is liquid but has a cooldown mechanism',
        '3.3. Deflation: Stakers who try to withdraw faster than the cooldown pay a fee',
        '3.4. Yield: Fees paid by early staking exits pays yield to stakers',
      ],
      image: tokenStaking,
    },
  ]
  return (
    <section id="TokenEconomy" className="" {...props}>
      <Container>
        <h2 className="mb-8 text-center text-3xl font-bold text-neutral-800 sm:mb-12 sm:text-5xl">
          Token Economy
        </h2>
        <ol className="mx-auto max-w-5xl space-y-12 text-xl text-neutral-600">
          {data.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center justify-between text-2xl font-bold text-neutral-800 sm:flex-row sm:text-3xl"
            >
              <Image
                src={item.image}
                alt=""
                width={item.image.width}
                height={item.image.height}
                layout="fill"
                className="mb-8 sm:mb-0"
              />
              <div className="flex-1 sm:ml-8 lg:ml-12">
                {item.title}
                <ol className="mt-4 space-y-2 text-lg font-normal text-neutral-600 sm:text-xl">
                  {item.content.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
