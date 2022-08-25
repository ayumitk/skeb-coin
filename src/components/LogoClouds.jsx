import Image from 'next/future/image'

export default function LogoClouds({ logos }) {
  return (
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
              className="h-20 sm:h-28"
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
  )
}
