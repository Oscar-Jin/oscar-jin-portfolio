//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Img from "gatsby-image"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import Layout from "../components/page-structures/layout"
import SEO from "../components/advanced-optimizations/seo"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-center max-w-screen-xl py-20 mx-auto md:items-stretch md:flex-row md:justify-center md:py-24`}
`
const Heading = styled.h2`
  ${tw`w-full text-4xl font-black tracking-wide text-center sm:text-5xl`}
`
const Column = styled.div`
  ${tw`flex px-6 md:w-1/2 lg:w-1/3`}
`
const Image = styled(Img)`
  ${tw`object-cover w-full h-full`}
`
const ImageContainer = styled.div`
  ${tw`w-16 h-16 p-3 `}
`
const Card = styled.a`
  ${tw`flex flex-col items-center max-w-xs px-6 py-10 mx-auto mt-12 transition duration-300 border-dashed rounded-lg rounded-full border-primary-500 hover:shadow`}
  min-width: 9rem;
`
const TextContainer = styled.span`
  ${tw`mt-6 text-center`}
`
const Title = styled.span`
  ${tw`mt-2 text-xl font-bold leading-none text-primary-500`}
`
const Description = styled.span`
  ${tw`mt-3 text-sm font-semibold leading-loose text-secondary-100`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── localize ───┐
const localized = {
  heading: (
    <Trans ns="connect" i18nKey="heading">
      いろんな方法で繋がりましょう！
    </Trans>
  ),
}
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function Connect() {
  const { t } = useTranslation()
  const { language } = useI18next()
  const cards = [
    {
      image: "gitHubIcon",
      title: "GitHub",
      url: "https://github.com/Oscar-Jin",
    },
    {
      image: "twitterIcon",
      title: "Twitter",
      url: "https://twitter.com/kintininn",
    },
    {
      image: "qiitaIcon",
      title: "Qiita",
      url: "https://qiita.com/kintininn",
    },
    {
      image: "wantedlyIcon",
      title: "Wantedly",
      url:
        "https://www.wantedly.com/secret_profiles/o0IvgHwPD8z6uj7v45xIhxmzDDQ4LOH9",
    },
    {
      image: "lineIcon",
      title: "Line",
      url: "https://www.dropbox.com/s/brs5yz3sw4qdw7s/IMG_0159.JPG?dl=0",
    },
    {
      image: "gmailIcon",
      title: "Mail",
      url: "mailto:kintininn@gmail.com?subject=Hello Oscar! 金ちゃん！",
    },
  ]
  const data = useStaticQuery(graphql`
    query {
      gitHubIcon: file(relativePath: { eq: "github-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitterIcon: file(relativePath: { eq: "twitter-4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      qiitaIcon: file(relativePath: { eq: "qiita.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wantedlyIcon: file(relativePath: { eq: "wantedly.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lineIcon: file(relativePath: { eq: "line.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gmailIcon: file(relativePath: { eq: "gmail-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={t("nav:Connect")} lang={language} />
      <ThreeColumnContainer>
        <Heading>{localized.heading}</Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card href={card.url} target="_blank">
              <ImageContainer>
                <Image
                  fluid={data?.[card.image]?.childImageSharp?.fluid}
                ></Image>
              </ImageContainer>
              <TextContainer>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </TextContainer>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Layout>
  )
}

// <───────────────────────────────────────────────────────────────────────┘
