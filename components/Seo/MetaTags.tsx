import * as React from 'react';
import Head from 'next/head';

const publicUrl = 'https://jackyef.com';
const title = 'jackyef.com';
const description =
  'Personal site of Jacky Efendi. I work with JavaScript and all things web. 🌐';

export const MetaTags: React.FC = () => {
  const themeMetaRef = React.useRef<HTMLMetaElement>(null);

  // React.useEffect(() => {
  //   const themeColor = colorMode === 'light' ? '#fff' : '#1A202C';

  //   const metaThemeTag = document.querySelector('meta[name="theme-color"]');
  //   metaThemeTag?.setAttribute('content', themeColor);
  // })

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={description} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/* <meta ref={themeMetaRef} name="theme-color" content={colorMode === 'light' ? '#fff' : '#1A202C'} /> */}
      <meta ref={themeMetaRef} name="theme-color" content={'#1A202C'} />
      <link rel="canonical" href={publicUrl} />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-title" content="jackyef" />
      <meta name="application-name" content="jackyef" />
      {/* @TODO: og's meta tag for better links */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={publicUrl} />
      <meta property="og:type" content="website" />
      <meta property="twitter:creator" content="@jackyef__" />
    </Head>
  );
};
