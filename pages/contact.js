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
            Para entrar em contato comigo, só mandar mensagem em uma das minhas redes sociais:
        </p>
        <div className={utilStyles.contactContainer}>
          <div className={utilStyles.contactItem}>
            <img href="" className={utilStyles.contactImg} />
            <a className={utilStyles.contactLink}>
              LinkedIn
            </a>
          </div>
          <div className={utilStyles.contactItem}>
            <img href="" className={utilStyles.contactImg} />
            <a className={utilStyles.contactLink}>
              LinkedIn
            </a>
          </div>
          <div className={utilStyles.contactItem}>
            <img href="" className={utilStyles.contactImg} />
            <a className={utilStyles.contactLink}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}