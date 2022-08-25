import Image from 'next/future/image'
import roadmapImage from '@/images/roadmap.svg'
import roadmapMobile from '@/images/roadmap-mobile.svg'
import { Container } from '@/components'

export default function Roadmap(props) {
  return (
    <section id="Roadmap" {...props}>
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-neutral-800 sm:mb-12 sm:text-5xl">
            Roadmap
          </h2>
          <Image
            src={roadmapImage}
            alt="Roadmap image"
            width={roadmapImage.width}
            height={roadmapImage.height}
            layout="fill"
            className="hidden w-full md:block"
          />
          <Image
            src={roadmapMobile}
            alt="Roadmap image"
            width={roadmapMobile.width}
            height={roadmapMobile.height}
            layout="fill"
            className="w-full md:hidden"
          />
        </div>
      </Container>
    </section>
  )
}
