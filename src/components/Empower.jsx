import Image from 'next/future/image'
import { Container } from '@/components'
import backgroundImage from '@/images/background-empower.jpg'

export default function Empower() {
  return (
    <section id="Empower" className="bg-neutral-800">
      <div className="mx-4 flex h-full flex-col sm:mx-6 lg:mx-12 lg:flex-row">
        <div className="order-2 py-6 sm:py-10 lg:order-1 lg:mr-8 lg:w-1/2 lg:py-20">
          <Image
            className=""
            src={backgroundImage}
            alt="Skeb image"
            width={backgroundImage.width}
            height={backgroundImage.height}
          />
        </div>
        <div className="order-1 pt-20 pb-8 lg:order-2 lg:w-1/2 lg:pb-20">
          <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl lg:mb-12 lg:text-5xl">
            Empowering Creators in the Massive Japanese Content Industry
          </h2>
          <p className="mb-8 text-lg text-neutral-100 lg:text-xl lg:leading-loose">
            Japanese content market is a $25 billion goliath, and it grows
            bigger every year.
          </p>
          <p className="mb-8 text-lg text-neutral-100 lg:text-xl lg:leading-loose">
            The sector is dominated by a few mainstream media brands, sidelining
            most creators. Skeb gives Japanese creators a powerful opportunity
            to monetize and distribute their art in a manner where the primary
            wealth generation is theirs.
          </p>
          <p className="text-lg text-neutral-100 lg:text-xl lg:leading-loose">
            Through tokenization, Skeb multiplies opportunities for both
            creators and consumers: rapid transactions, content traceability,
            secondary liquidity, and built-in royalties for the creator.
          </p>
        </div>
      </div>
      {/* <div className="relative flex w-screen justify-end lg:h-screen">
        <div className="flex h-full items-center bg-neutral-900 bg-opacity-95 lg:w-1/2">
          <Container>
            <div className="py-20 lg:max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl lg:mb-12 lg:text-5xl">
                Empowering Creators in the Massive Japanese Content Industry
              </h2>
              <p className="mb-8 text-lg text-neutral-100 lg:text-xl lg:leading-loose">
                Japanese content market is a $25 billion goliath, and it grows
                bigger every year.
              </p>
              <p className="mb-8 text-lg text-neutral-100 lg:text-xl lg:leading-loose">
                The sector is dominated by a few mainstream media brands,
                sidelining most creators. Skeb gives Japanese creators a
                powerful opportunity to monetize and distribute their art in a
                manner where the primary wealth generation is theirs.
              </p>
              <p className="text-lg text-neutral-100 lg:text-xl lg:leading-loose">
                Through tokenization, Skeb multiplies opportunities for both
                creators and consumers: rapid transactions, content
                traceability, secondary liquidity, and built-in royalties for
                the creator.
              </p>
            </div>
          </Container>
        </div>
      </div> */}
    </section>
  )
}
