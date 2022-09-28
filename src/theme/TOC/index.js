import React, {useEffect} from 'react';
import TOC from '@theme-original/TOC';
import Head from '@docusaurus/Head';

export default function TOCWrapper(props) {
  useEffect(() => {
    const adsbygoogle = window.adsbygoogle || [];
    try {
      adsbygoogle.push({});
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  const toc = props.toc || [];
  const styles = {
    ads: {
      container: {
        position: 'sticky',
        top: toc.length * 50 + 120,
        width: '100%',
      },
      content: {},
      title: {
        display: 'block',
        textAlign: 'center',
        color: '#777',
        textTransform: 'uppercase',
      },
      item: {
        display: 'block',
      },
    },
  };

  return (
      <>
        <Head>
          <script async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9706318396052314"
                  crossOrigin="anonymous"></script>
        </Head>
        <TOC {...props} />
        <div style={styles.ads.container}>
          <div style={styles.ads.content}>
            <span style={styles.ads.title}>Ads</span>
            <ins className="adsbygoogle"
                 style={styles.ads.item}
                 data-ad-client="ca-pub-9706318396052314"
                 data-ad-slot="3682979857"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>
        </div>
      </>
  );
}
