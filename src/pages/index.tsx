import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from '../styles/Home.module.css'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

const Home: NextPage = ({ product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export default Home
