import Image from 'next/future/image'
import statsImage1 from '@/images/stats1.jpg'
import statsImage2 from '@/images/stats2.jpg'
import statsImage3 from '@/images/stats3.jpg'
import statsImage4 from '@/images/stats4.jpg'
import lightpaperImage from '@/images/image-lightpaper.jpg'
import Container from './Container'

const stats = [
  { name: 'Number of Users', number: 2.23, unit: 'M+', image: statsImage1 },
  { name: 'Number of Requests', number: 900, unit: 'k+', image: statsImage2 },
  { name: 'Accepted Requests', number: 610, unit: 'k+', image: statsImage3 },
  {
    name: 'Transaction Volume',
    number: 7.18,
    unit: 'JPY+',
    image: statsImage4,
  },
]

export default function Skeb() {
  return (
    <>
      <section
        id="Skeb"
        className="bg-teal-50 pt-20 pb-6 sm:pb-16 sm:pt-20 lg:pt-12 lg:pb-32"
      >
        <Container>
          <div className="mx-auto flex max-w-5xl items-center justify-center">
            <div
              className="hidden w-72 shrink-0 sm:block lg:w-1/2"
              aria-hidden="true"
            >
              <Image
                src={lightpaperImage}
                alt=""
                width={lightpaperImage.width}
                height={lightpaperImage.height}
                layout="fill"
              />
            </div>
            <div>
              <h2 className="mb-4 text-center text-4xl font-bold text-neutral-800 sm:text-left sm:text-5xl lg:mb-8 lg:text-6xl">
                What is <span className="text-teal-500">Skeb</span>?
              </h2>
              <p className="mb-8 text-lg text-neutral-600 lg:text-xl lg:leading-loose">
                Skeb is a Japanese commission platform with over 113,000 native
                creators. The marketplace connects a global base of Japanese art
                and content enthusiasts with native talent.
              </p>
              <p className="text-lg text-neutral-600 lg:text-xl lg:leading-loose">
                Skeb has recorded 10-20% month-on-month growth. This has
                propelled the platform to a 1,000x adoption growth, and the
                curve continues.
              </p>
            </div>
          </div>
          <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 sm:grid-cols-2">
            {stats.map((stat) => (
              <li key={stat.name}>
                <Image
                  src={stat.image}
                  alt={stat.name}
                  width={stat.image.width}
                  height={stat.image.height}
                  layout="fill"
                  className="overflow-hidden rounded-3xl"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
