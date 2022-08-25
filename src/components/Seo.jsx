import Head from 'next/head'

export default function Seo({ pageTitle, pageDescription, path }) {
  const DOMAIN = 'https://skebcoin.com'

  const title = 'The Largest Creator Commission Platform in Japan'
  const siteName = 'Skeb Coin'

  const content = pageTitle
    ? `${pageTitle} | ${siteName} – ${title}`
    : `${siteName} – ${title}`
  const description = pageDescription
    ? pageDescription
    : 'Skeb is a Japanese commission platform with over 45,000 native creators. The marketplace connects a global base of Japanese art and content enthusiasts with native talent.'

  const canonical = path ? `${DOMAIN}${path}` : DOMAIN
  const ogImage = 'https://skebcoin.com/og-image.jpg'
  const ogType = 'website'
  const twitterHandle = '@SkebCoin'

  return (
    <Head>
      <title key="title">{content}</title>

      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={content} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical} />
      <meta key="og_image" property="og:image" content={ogImage} />
      <meta key="og_image:alt" property="og:image:alt" content={content} />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta key="twitter:title" property="twitter:title" content={content} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={canonical} />

      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  )
}
