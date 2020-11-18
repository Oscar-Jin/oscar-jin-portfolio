//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import SEO from "../components/advanced-optimizations/seo"
import Layout from "../components/page-structures/layout"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const StretchToFill = styled.div`
  ${tw`flex flex-col`}
  min-height: calc(100vh - 114px - 511px)
`
const PageNotFound = styled.div`
  ${tw`flex items-center flex-1 max-w-screen-xl py-20 mx-auto mb-16`}
`
const Section = styled.div`
  ${tw`text-center`}
`
const Title = styled.h2`
  ${tw`text-6xl font-semibold text-gray-500`}
`
const Subtitle = styled.h3`
  ${tw`text-2xl font-bold capitalize`}
`
const Description = styled.p`
  ${tw`mt-3 text-gray-500`}
`

// <───────────────────────────────────────────────────────────────────────┘

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StretchToFill>
      <PageNotFound>
        <Section>
          <Title>404</Title>
          <Subtitle>page not found</Subtitle>
          <Description>
            The page you are looking for was moved, removed, renamed or might
            never existed.
          </Description>
        </Section>
      </PageNotFound>
    </StretchToFill>
  </Layout>
)

export default NotFoundPage
