import Head from 'next/head'

import Search from '../components/search'
import ImageGrid from '../components/image-grid'
import UpdateBanner from '../components/update-banner'

import styles from '../styles/Home.module.css'


export default function Home (props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unsplash Challenge</title>
        <meta name="description" content="Create a simple app to find images on Unsplash" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UpdateBanner />
        <Search searchDetails={ props } />
        { props.searchResults && <ImageGrid searchResults={ props.searchResults } /> }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/martin-banks"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©Martin Banks { new Date().getFullYear() }
        </a>
      </footer>
    </div>
  )
}


export async function getServerSideProps (context) {
  // Will appear in the Node console
  const UNSPLASH_KEY = process.env.UNSPLASH_KEY
  let searchResults = null

  if (context?.query?.search) {
    // a search has been submitted
    const { search, page, per_page } = context.query
    const endpoint = `https://api.unsplash.com/search/photos?page=${page || 5}&per_page=${per_page || 10}&query=${search}&client_id=${UNSPLASH_KEY}`

    const response = await fetch(endpoint).then(r => r.json())
    searchResults = response
  }

  return {
    props: {
      search: context?.query?.search || null,
      searchResults,
      page: context?.query?.page || null,
      per_page: context?.query?.per_page || 10,
    }
  }

}
