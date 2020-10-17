import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Gabriel Gomes de Oliveira'
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
      </Head>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem} >
            <Link href='/blog'><a>Blog</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/portfolio'><a>Portifólio</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/contact'><a>Contato</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/about'><a>Sobre</a></Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : ('')}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}