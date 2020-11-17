import Head from 'next/head'
import { name, siteTitle } from '../components/layout'

import { 
    PageContainer,
    NameHeader,
    ProfileImage,
    OptionsList,
    Option,
} from '../styles/MobileStyles'

import Link from 'next/link'

export default function Mobile() {
  return (
    <>
        <Head>
        <title>{siteTitle}</title>
        </Head>
        <PageContainer>
            <ProfileImage
                src="/images/profile.jpg"
                alt={name}
              />
            <NameHeader>
                {name}
            </NameHeader>
            <OptionsList>
                <Option>
                    <Link href='/about'>
                        Sobre mim
                    </Link>
                </Option>
                <Option>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </Option>
                <Option>
                    <Link href='/portifolio'>
                        Portifólio
                    </Link>
                </Option>
                <Option>
                    <Link href='/contact'>
                        Contato
                    </Link>
                </Option>
            </OptionsList>
        </PageContainer>
    </>
  )
}