import type { NextPage } from 'next'
import Head from 'next/head'
import MainBody from '../components/MainBody'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Henry's website</title>
        <meta name="description" content="Henry's personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/umunu" rel="stylesheet" />
      </Head>
                
      <main>
        <MainBody />
      </main>
    </div>
  )
}

export default Home
