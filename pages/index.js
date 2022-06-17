import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Separator from '../components/separator';
import SectionHeader from '../components/sectionHeader';
import Showcase from '../components/showcase';
import Social from '../components/social';
import Writing from '../components/writing';
import Footer from '../components/Footer';

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
