import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About me</h2>
        <p> 
            I'm Gabriel Gomes, a self-taught developer that lives in Brazil.
            Currently I study ReactJS, React Native, NextJS and NodeJS. 
            My biggest dream is to work as a dev in Europe. 
        </p>
      </section>
    </Layout>
  )
}