import { Container, LogoClouds } from '@/components'

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

export default function InthePress() {
  return (
    <section
      id="PartneringCompany"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-800 sm:text-5xl">
            In the Press
          </h2>
          <LogoClouds logos={logos} />
        </div>
      </Container>
    </section>
  )
}
