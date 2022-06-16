import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header';
import Navbar from '../components/navbar';
import Separator from '../components/separator';
import SectionHeader from '../components/sectionHeader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sam Green</title>
        <meta name="description" content="Sam Green Online Portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="space-y-20">
        <Navbar />
        <Header />
        <Separator />
        <SectionHeader title="Showcase" description="A few selected projects that showcase some key areas of interest"></SectionHeader>
      </div>
      
    </div>
  )
}
