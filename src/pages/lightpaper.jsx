import {
  Layout,
  Ecosystem,
  TokenMetrics,
  TokenEconomy,
  InflationChart,
  Container,
} from '@/components'
import { useRouter } from 'next/router'

export default function Lightpaper() {
  const pageTitle = 'Lightpaper'
  const pageDescription =
    'Skeb Coin is the native token of the Skeb ecosystem. Its economy includes transaction fees, staking, locks, liquidity incentives, buy backs, burns, and a DAO treasury. These are powered by fees in the Skeb ecosystem.'
  const router = useRouter()

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      path={router.route}
    >
      <div className="mx-auto max-w-4xl">
        <Container>
          <p className="mb-8 text-lg text-neutral-600 lg:text-xl lg:leading-loose">
            Skeb Coin is the native token of the Skeb ecosystem. Its economy
            includes transaction fees, staking, locks, liquidity incentives, buy
            backs, burns, and a DAO treasury. These are powered by fees in the
            Skeb ecosystem.
          </p>
          <p className="mb-8 text-lg text-neutral-600 lg:text-xl lg:leading-loose">
            Skeb Coin is fundamentally the governance token of the Skeb
            ecosystem.
          </p>
        </Container>
      </div>
      <Ecosystem className="my-20 md:my-36 lg:my-44" />
      <TokenEconomy className="my-20 md:my-36 lg:my-44" />
      <TokenMetrics className="my-20 md:my-36 lg:my-44" />
      <InflationChart className="my-20 md:my-36 lg:my-44" />
    </Layout>
  )
}
