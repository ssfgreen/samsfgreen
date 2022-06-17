import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Separator from '../components/separator';
import Showcase from '../components/showcase';
import Writing from '../components/writing';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sam Green</title>
        <meta name="description" content="Sam Green Online Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-10">
        <Navbar />
        <Header />
        <Separator />
        <Showcase />
        <Separator />
        <Writing />
        <Separator />
        <Footer />
      </div>
    </div>
  )
}
