import Image from 'next/future/image'
import { CallToAction, Footer, Header, Hero } from '@/components'
import backgroundImage from '@/images/background-hero.jpg'
import Seo from '@/components/Seo'

export default function Layout({
  children,
  home,
  pageTitle,
  pageDescription,
  path,
}) {
  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        path={path}
      />
      {home ? (
        <div className="relative h-screen w-screen overflow-hidden">
          <Image
            className="absolute h-screen w-screen object-cover"
            src={backgroundImage}
            alt="Skeb image"
            width={backgroundImage.width}
            height={backgroundImage.height}
          />
          <div className="relative flex h-screen w-screen flex-col">
            <Header />
            <Hero />
          </div>
        </div>
      ) : (
        <Header />
      )}
      <main>
        {!home && (
          <div className="mb-12 bg-green-50 sm:mb-28">
            <div className="py-12 sm:py-24 lg:py-32">
              <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight text-neutral-800 sm:text-6xl sm:tracking-tight lg:text-7xl lg:tracking-tight">
                  {pageTitle}
                </h1>
              </div>
            </div>
          </div>
        )}
        {children}
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
