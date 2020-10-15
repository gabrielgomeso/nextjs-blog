import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getLastPost } from '../lib/posts'

import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const lastPostData = getLastPost()
  return {
    props: {
      lastPostData
    }
  }
}

export default function Home({ lastPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Brazilian, self-taught developer, tech lover and, sometimes, Dungeon Master. <a href="https://www.linkedin.com/in/gabrielgomeso">LinkedIn</a></p>
        
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Last post</h2>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem} key={lastPostData.id}>
              <Link href={`/posts/${lastPostData.id}`}>
                <a>{lastPostData.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={lastPostData.date} />
              </small>
            </li>
        </ul>
      </section>
    </Layout>
  )
}