import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { PageSection, PageTitle, ContactContainer, ContactItem, ContactLink } from '../styles/UtilStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <PageSection>
        <PageTitle>Contato</PageTitle>
        <p> 
            Para entrar em contato comigo é só mandar mensagem em uma das minhas redes sociais:
        </p>
        <ContactContainer>
          <ContactItem>
            <FontAwesomeIcon width="40" style={{ padding: 0, marginRight: '10px' }} icon={faLinkedin} />
            <ContactLink href="https://www.linkedin.com/in/gabrielgomeso" target="_blank">
              LinkedIn
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon width="40" style={{ padding: 0, marginRight: '10px' }} icon={faTwitter} />
            <ContactLink href="https://twitter.com/gabigol84" target="_blank">
              Twitter
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon width="40" style={{ padding: 0, marginRight: '10px' }} icon={faWhatsapp} />
            <ContactLink href="https://wa.link/bmlrfv" target="_blank">
                Whatsapp
            </ContactLink>
          </ContactItem>
        </ContactContainer>
      </PageSection>
    </Layout>
  )
}