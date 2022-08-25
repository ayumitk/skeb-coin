import { Container } from '@/components'
// import { ExternalLinkIcon } from '@heroicons/react/outline'

export default function Hero() {
  return (
    <Container className="flex h-full w-full items-center">
      <div>
        <h1 className="mx-auto text-4xl font-bold leading-tight tracking-tight text-neutral-800 sm:text-5xl md:text-6xl lg:text-7xl">
          The Largest <br />
          <span className="text-5xl text-teal-500 sm:text-6xl md:text-7xl lg:text-8xl">
            Creator <br />
            Commission <br />
            Platform <br />
          </span>
          in Japan
        </h1>
        {/* <div className="mt-8 flex gap-x-3">
          <Button
            href="/Skeb_Coin_En_20220819 02.pdf"
            color="teal"
            variant="outline"
            target="_blank"
            rel="noreferrer"
            className="sm:text-xl"
          >
            Whitepaper
          </Button>
          <Button
            href="https://skeb.jp"
            color="teal"
            target="_blank"
            rel="noreferrer"
            className="sm:text-xl"
          >
            Launch App
            <ExternalLinkIcon className="ml-1 inline-block h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </Container>
  )
}
