import type { NextPage } from 'next'
import Head from 'next/head'
import MainBody from '../components/MainBody'
import MenuBar from '../components/MenuBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Henry's website</title>
        <meta name="description" content="Henry's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
                
      <main>
        <MenuBar />

        <MainBody />
      </main>
    </div>
  )
}

export default Home
