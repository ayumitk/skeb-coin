import { Container } from '@/components'
import Image from 'next/future/image'

import SkebLogo from '@/images/logos/skeb.svg'
import TuringumLogo from '@/images/logos/turingum.svg'
import DaomakerLogo from '@/images/logos/daomaker.svg'

const logos = [
  {
    name: 'Skeb',
    image: SkebLogo,
    url: 'https://skeb.jp/company',
  },
  {
    name: 'Turingum',
    image: TuringumLogo,
    url: 'https://turingum.com/en/',
  },
  {
    name: 'DAO Maker',
    image: DaomakerLogo,
    url: 'https://daomaker.com/',
  },
]

export default function PartneringCompany(props) {
  return (
    <section id="PartneringCompany" {...props}>
      <Container>
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-800 sm:text-5xl">
            Partnering Company
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
                    className="h-20 sm:h-24"
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
