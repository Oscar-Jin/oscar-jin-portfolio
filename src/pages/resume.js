//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Img from "gatsby-image"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/resume-layouts/hero"
import Layout from "../components/page-structures/layout"
import SEO from "../components/advanced-optimizations/seo"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const ContentWithPaddingXl = styled.div`
  ${tw`max-w-screen-xl py-20 mx-auto lg:py-24`}
`
const ResumeContainer = styled.div`
  ${tw`relative max-w-screen-lg pt-3 mt-20 rounded-lg shadow sm:p-3 md:px-5`}
`
const ResumeTag = styled.div`
  ${tw`absolute top-0 right-0 flex items-center justify-center px-4 py-1 mt-3 mr-5 text-sm text-white bg-gray-500 rounded-lg sm:py-2 sm:text-base`}
`
const Padding = styled.div`
  ${tw`p-20`}
`
const Image = styled(Img)`
  ${tw`w-full`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function Resume() {
  const { t } = useTranslation()
  const { language } = useI18next()

  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "resume-2020.png" }) {
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
      <ContentWithPaddingXl>
        <SEO title={t("nav:Resume")} lang={language} />
        <Hero />
        <ResumeContainer>
          <Image fluid={data?.["resume"]?.childImageSharp?.fluid}></Image>
          <ResumeTag>Resume 履歴書</ResumeTag>
        </ResumeContainer>

        <Padding></Padding>
      </ContentWithPaddingXl>
    </Layout>
  )
}

// <───────────────────────────────────────────────────────────────────────┘
