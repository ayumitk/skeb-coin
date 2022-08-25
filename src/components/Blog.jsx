import Image from 'next/future/image'
import PlaceholderImage from '@/images/placeholder.jpg'
import { Button } from '@/components'
import { ExternalLinkIcon } from '@heroicons/react/outline'

export default function Blog({ posts }) {
  if (!posts) {
    return false
  }

  const BlogPosts = posts.filter((item) => item !== null)

  return (
    <div className="relative bg-neutral-700 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            From the Blog
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {BlogPosts.map((post) => {
            let imageSrc = PlaceholderImage.src
            if (post.thumbnail.match(/cdn-images-1.medium.com/)) {
              imageSrc = post.thumbnail
            }

            return (
              <a
                key={post.title}
                className="flex flex-col overflow-hidden rounded-3xl shadow"
                href={post.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex-shrink-0 border-b">
                  <Image
                    className="h-52 w-full object-cover"
                    src={imageSrc}
                    alt=""
                    unoptimized
                    width={1024}
                    height={537}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <p className="text-xl font-semibold text-neutral-900">
                    {post.title.replace(/&amp;/g, '&')}
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-neutral-900">
                      {post.author}
                    </p>
                    <div className="flex space-x-1 text-sm text-neutral-500">
                      <time dateTime={post.pubDate}>{post.pubDate}</time>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:flex-row">
          <Button
            href="https://medium.com/skebcoin"
            aria-label="Skeb Coin on Medium"
            color="teal"
            target="_blank"
            rel="noreferrer"
          >
            Read More in English
            <ExternalLinkIcon className="ml-1 inline-block h-5 w-5" />
          </Button>
          <Button
            href="https://medium.com/skeb-jp"
            aria-label="Skeb Coin on Medium"
            color="teal"
            target="_blank"
            rel="noreferrer"
          >
            Read More in Japanese
            <ExternalLinkIcon className="ml-1 inline-block h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
