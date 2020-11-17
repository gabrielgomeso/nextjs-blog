import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Description, PageSection, PageTitle, LightText, List, ListItem } from '../styles/UtilStyles'
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
      <Description>
        <p>Programador autodidata com foco em front-end, caiçara e, às vezes, Mestre de RPG. <a href="https://www.linkedin.com/in/gabrielgomeso">LinkedIn</a></p>
      </Description>
      
      <PageSection>
        <PageTitle>Última publicação</PageTitle>
        <List>
            <ListItem key={lastPostData.id}>
              <Link href={`/posts/${lastPostData.id}`}>
                <a>{lastPostData.title}</a>
              </Link>
              <br />
              <LightText>
                <Date dateString={lastPostData.date} />
              </LightText>
            </ListItem>
        </List>
      </PageSection>
    </Layout>
  )
}