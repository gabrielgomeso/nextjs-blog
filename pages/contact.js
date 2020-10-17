import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contato</h2>
        <p> 
            Para entrar em contato comigo é só mandar mensagem em uma das minhas redes sociais:
        </p>
        <div className={utilStyles.contactContainer}>
          <div className={utilStyles.contactItem}>
            <a href="https://www.linkedin.com/in/gabrielgomeso" className={utilStyles.contactLink} target="_blank">
            <FontAwesomeIcon id={utilStyles.contactImg} icon={faLinkedin} className='fas fa-camera fa-lg' />
              LinkedIn
            </a>
          </div>
          <div className={utilStyles.contactItem}>
            <a href="https://twitter.com/gabriel_narr" className={utilStyles.contactLink} target="_blank">
            <FontAwesomeIcon id={utilStyles.contactImg} icon={faTwitter} className='fas fa-camera fa-lg' />
              Twitter
            </a>
          </div>
          <div className={utilStyles.contactItem}>
          <a href="https://wa.link/bmlrfv" className={utilStyles.contactLink} target="_blank">
            <FontAwesomeIcon id={utilStyles.contactImg} icon={faWhatsapp} className='fas fa-camera fa-lg' />
              Whatsapp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}