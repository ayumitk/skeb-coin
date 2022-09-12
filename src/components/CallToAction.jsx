import { Button, Container } from '@/components'
import { ExternalLinkIcon } from '@heroicons/react/outline'

export default function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-teal-500 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get started today!
          </h2>
          <p className="mt-4 text-lg text-white">
            Would you like to have your original character or VRSNS avatar drawn
            by Skeb?
          </p>
          <div className="mt-8 flex justify-center gap-x-3">
            {/* <Button
              href="/Skeb_Coin_En_20220819 02.pdf"
              color="white"
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </Button> */}
            <Button
              href="https://skeb.jp"
              color="white"
              target="_blank"
              rel="noreferrer"
            >
              Launch App
              <ExternalLinkIcon className="ml-1 inline-block h-5 w-5" />
            </Button>
            <Button
              href="https://stake.skebcoin.com/"
              color="white"
              target="_blank"
              rel="noreferrer"
            >
              Launch Staking App
              <ExternalLinkIcon className="ml-1 inline-block h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
