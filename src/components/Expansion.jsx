import Image from 'next/future/image'
import { Container } from '@/components'
// import mobileSupport from '@/images/mobile-support.svg'
// import vrArtMarket from '@/images/vr-art-market.svg'
// import vrTechnology from '@/images/vr-technology.svg'
import SkebMobileImage from '@/images/skeb-mobile.jpg'
import SkebverseImage from '@/images/skebverse.jpg'

export default function Milestone(props) {
  const data = [
    {
      title: 'Skeb Mobile',
      text: 'As Japanese art and content is increasingly consumed on mobile, expanding to mobile users is an opportunity to multiply Skeb’s addressable demand base. Direct sync to web3 wallets connects the $1 trillion crypto market to Skeb Mobile.',
      image: SkebMobileImage,
    },
    // {
    //   title: 'Skeb Market',
    //   text: 'Skeb currently serves as an original digital art primary sale platform. Skeb Market expands to the platform to include secondary sales and transactions such as in the form of art prints. Secondary volumes of assets are much higher than primary sales. The expansion would multiply Skeb volume by multiples, while giving creators an additional income line through royalties.',
    //   image: vrArtMarket,
    // },
    {
      title: 'Skebverse: VR and AR Assets',
      text: 'Skeb currently focuses on traditional content. Skebverse expands the platform to be a first mover in the booming market of virtual and augmented reality. With growing global interest in the metaverse, Skeb is poised to provide the world with a go-to market for metaversal Japanese content, direct from the creators.',
      image: SkebverseImage,
    },
  ]
  return (
    <section id="Expansion" {...props}>
      <Container>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-neutral-800 sm:mb-20 sm:text-5xl">
            Skeb&apos;s Expansion
          </h2>
          <div className="relative">
            <span className="absolute left-2 h-full w-1 bg-neutral-300 sm:left-3"></span>
            {data.map((item) => (
              <div
                key={item.title}
                className="relative mb-20 flex flex-col pl-10 sm:flex-row sm:pl-12 lg:pl-20"
              >
                <span className="absolute left-0 h-5 w-5 rounded-full border-4 border-neutral-300 bg-white sm:h-7 sm:w-7"></span>
                <div className="order-2 sm:order-1">
                  <h3 className="mb-2 text-2xl font-bold leading-tight text-neutral-800 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-lg text-neutral-600 lg:text-xl lg:leading-loose">
                    {item.text}
                  </p>
                </div>
                <Image
                  src={item.image}
                  alt=""
                  width={item.image.width}
                  height={item.image.height}
                  layout="fill"
                  className="order-1 mb-6 w-full shrink-0 sm:order-2 sm:mb-0 sm:ml-6 sm:w-1/2"
                  style={{ maxWidth: '500px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
