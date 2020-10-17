import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Sobre mim</h2>
        <p className={utilStyles.aboutme}> 
            Meu nome é Gabriel, nascido e criado em uma cidade do Litoral Norte de São Paulo. <br />
            Desde pequeno sou fascinado por computadores, tecnologia e ciência. <br />
            Meu primeiro contato com programação foi em fóruns de RPG, onde conheci HTML, CSS e um pouco de Javascript. <br />
            Já em 2015 entrei em um curso técnico em Informática para Web no Instituto Federal, recebendo uma base ampla de conhecimentos em lógica de programação, desenvolvimento web, banco de 
            dados e hardware. As tecnologias foco, na época, foram PHP, Javascript, JQuery, MySQL e Python. <br /> 
            Em 2016 saí da curva de tecnologia e iniciei uma graduação em Direito, na qual finalizo em junho de 2021. <br />
            Porém, em 2020 decidi que a área jurídica não me servia, então decidi retornar aos estudos em programação. <br />
            Fiz alguns cursos online, gratuitos, li artigos, ouvi podcasts e assisti a videoaulas a respeito de tudo na área. <br />
            Ao longo do ano, participei de eventos online de programação, como a Imersão React, da Alura Cursos, e a 
            Next Level Week, da Rocketseat, ambos voltados para o desenvolvimento Web e Mobile com ReactJS. <br />
            Após uma longa pesquisa, decidi ingressar no Bootcamp GoStack, da Rocketseat. <br />
            Escrevo esse resumo na metade de Outubro de 2020. Estou terminando o Bootcamp, estudando ReactJS e NextJS e, principalmente, em busca de um emprego! <br />
            Minhas competências são: <br />
            <ul className={utilStyles.skills}>
              <li>
              - HTML5 & CSS3;
              </li>
              <li>
              - Javascript & ES6;
              </li>
              <li>
              - Design Responsivo;
              </li>
              <li>
              - ReactJS & React Native;
              </li>
              <li>
              - NextJS;
              </li>
              <li>
              - Bootstrap;
              </li>
              <li>
              - Básico de PHP procedural;
              </li>
              <li>
              - Básico de MySQL;
              </li>
              <li>
              - Básico de Python;
              </li>
              <li>
              - Inglês Intermediário (leitura avançada, conversação e escrita intermediárias);
              </li>
            </ul>

            That's all folks!
        </p>
      </section>
    </Layout>
  )
}