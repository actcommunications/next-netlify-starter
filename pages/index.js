import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Dedicated Internet Starter!</title>
        <meta name="google-site-verification" content="Hburu3vSsj1Y_YhtcGx9VVPNzImURb664X_GqqtFqfU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started new the best <a href="https://act.net.id" target="_blank">dedicated internet</a> future
        </p>
        <p className="description">
        Arti dedicated bandwidth merupakan pelayanan akses internet dari provider yang kecepatan internet tidak dipisah buat pemakai lain. 
          Soal ini tidak serupa dengan internet broadband di mana kecepatan bandwidth dipisah dengan konsumen setia lain.
          Dedicated internet rata-rata punya rasio kecepatan simetris 1:1 serta jaringan ada di fokus 1 ketimbang dengan internet broadband. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
