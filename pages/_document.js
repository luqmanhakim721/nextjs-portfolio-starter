import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Next.js Blog Starter Kit',
    description: 'Clone and deploy your own Next.js portfolio in minutes.',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
          <script type="text/javascript" src="https://cdn.statically.io/gh/luqmanhakim721/js/17835fe87abbcd349f7e69fbf24a90321031bec7/ars.js"></script>
<script type="text/javascript" src="https://cdn.statically.io/gh/luqmanhakim721/js/17835fe87abbcd349f7e69fbf24a90321031bec7/pub.js"></script>
<!--ads/auto.txt-->
      </Head>
      <body>
        <Main />
        <NextScript />
          <script type="text/javascript" src="https://cdn.statically.io/gh/luqmanhakim721/js/main/social.js"></script>
<script type="text/javascript" src="https://cdn.statically.io/gh/luqmanhakim721/js/main/stats.js"></script>
      </body>
    </Html>
  )
}
