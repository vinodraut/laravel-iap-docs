import React, {useEffect} from 'react';
import MDXContent from '@theme-original/MDXContent';
import Head from '@docusaurus/Head';

export default function MDXContentWrapper(props) {
  useEffect(() => {
    // This is a workaround for google adsense
    const adsbygoogle = window.adsbygoogle || [];
    adsbygoogle.push({});
  }, []);
  return (
      <>
        <Head>
          <script async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9706318396052314"
                  crossOrigin="anonymous"></script>
        </Head>

        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-pub-9706318396052314"
             data-ad-slot="3682979857"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>

        <MDXContent {...props} />
      </>
  );
}
