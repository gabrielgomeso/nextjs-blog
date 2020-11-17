import Head from 'next/head'
import { Nav, List, ListItem, Container, Header, BackToHome } from './LayoutStyles'
import { ProfileImage, Heading2x1 } from '../styles/UtilStyles'
import Link from 'next/link'

export const name = 'Gabriel Gomes'
export const siteTitle = "Gabriel's Dev Blog"

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
           name="description"
          content="Front-end, Web and Mobile Developer for hire"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&display=swap'></link>
      </Head>
      <Nav>
        <List>
          <ListItem >
            <Link href='/blog'><a>Blog</a></Link>
          </ListItem>
          <ListItem>
            <Link href='/portfolio'><a>Portifólio</a></Link>
          </ListItem>
          <ListItem>
            <Link href='/contact'><a>Contato</a></Link>
          </ListItem>
          <ListItem>
            <Link href='/about'><a>Sobre</a></Link>
          </ListItem>
        </List>
      </Nav>
      <Container>
        <Header>
          {home ? (
            <>
              <ProfileImage
                src="/images/profile.jpg"
                alt={name}
              />
              <Heading2x1>{name}</Heading2x1>
            </>
          ) : ('')}
        </Header>
        <main>{children}</main>
        {!home && (
          <BackToHome>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </BackToHome>
        )}
      </Container>
    </>
  )
}