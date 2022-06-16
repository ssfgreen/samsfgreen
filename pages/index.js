import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Green</title>
        <meta name="description" content="Sam Green Online Portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Header />
    </div>
  )
}
