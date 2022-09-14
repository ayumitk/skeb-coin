import {
  Blog,
  SkebCoin,
  TokenBurning,
  Skeb,
  ListedExchanges,
  PartneringCompany,
  InthePress,
  Layout,
  Expansion,
  Roadmap,
  Empower,
} from '@/components'

import { loadPosts } from '@/lib/load-posts'

export default function Home({ data }) {
  let posts = data.items
  posts.length = 6
  return (
    <Layout home>
      <Skeb />
      <Empower />
      <SkebCoin className="my-20 md:my-36 lg:my-56" />
      <Expansion className="my-20 md:my-36 lg:my-56" />
      <ListedExchanges className="my-20 md:my-36 lg:my-56" />
      <Roadmap className="my-20 md:my-36 lg:my-56" />
      <PartneringCompany className="my-20 md:my-36 lg:my-56" />
      <Blog posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await loadPosts()
  return { props: { data } }
}
