//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { Trans } from "gatsby-plugin-react-i18next"
import Layout from "../components/page-structures/layout"
import SEO from "../components/advanced-optimizations/seo"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const HeadingTitle = styled.h2`
  ${tw`text-4xl font-black tracking-wide text-center sm:text-5xl`}
`
const Subheading = styled.h5`
  ${tw`font-bold text-primary-500`}
`
const Content = styled.div`
  ${tw`max-w-screen-xl py-20 mx-auto lg:py-24`}
`
const ThreeColumn = styled.div`
  ${tw`flex flex-col flex-wrap items-center lg:items-stretch lg:flex-row`}
`
const Column = styled.div`
  ${tw`mt-16 lg:w-1/3`}
`
const HeadingInfoContainer = styled.div`
  ${tw`flex flex-col items-center`}
`
const HeadingDescription = styled.p`
  ${tw`max-w-sm mt-4 font-medium text-center text-gray-600`}
`
const Card = styled.div`
  ${tw`flex flex-col h-full max-w-sm lg:mx-4 xl:mx-8`}
`
const Details = styled.div`
  ${tw`flex flex-col items-center flex-1 p-6 text-center transition duration-300 border-2 rounded border-primary-100 lg:block lg:text-left hover:shadow-lg hover:bg-gray-100`}
`
const MetaContainer = styled.div`
  ${tw`flex items-center`}
`
const Meta = styled.div`
  ${tw`flex items-center mr-6 text-sm font-medium leading-none text-secondary-100 last:mr-0`}
`
const Title = styled.h5`
  ${tw`mt-4 text-lg font-bold leading-snug`}
`
const Description = styled.p`
  ${tw`mt-2 text-sm text-secondary-100`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── localize ───┐
const localized = {
  subheading: (
    <Trans ns="books" i18nKey="subheading">
      Markdown
    </Trans>
  ),
  heading: (
    <Trans ns="books" i18nKey="heading">
      My Learning Journal
    </Trans>
  ),
  description: (
    <Trans ns="books" i18nKey="description">
      These are the books and materials I recently studied.
    </Trans>
  ),
}
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
Books.propTypes = {
  data: PropTypes.any,
}

export default function Books(props) {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <Layout>
      <SEO title={t("nav:Books")} lang={language} />
      <Content>
        <HeadingInfoContainer>
          <Subheading>{localized.subheading}</Subheading>
          <HeadingTitle>{localized.heading}</HeadingTitle>
          <HeadingDescription>{localized.description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {props.data.allMarkdownRemark.edges.map(edge => {
            console.log(edge.node.frontmatter?.type)
            return (
              <Column key={edge.node.id}>
                <Link to={edge.node.fields.slug}>
                  <Card>
                    <Details>
                      <MetaContainer>
                        {edge.node.frontmatter?.type && (
                          <Meta>{edge.node.frontmatter?.type}</Meta>
                        )}
                        {edge.node.frontmatter?.category && (
                          <Meta>{edge.node.frontmatter?.category}</Meta>
                        )}
                      </MetaContainer>
                      <Title>{edge.node.frontmatter.title}</Title>
                      <Description>{edge.node.excerpt}</Description>
                    </Details>
                  </Card>
                </Link>
              </Column>
            )
          })}
        </ThreeColumn>
      </Content>
    </Layout>
  )
}
// <───────────────────────────────────────────────────────────────────────┘

//  ─────────────────────────────────────────────────────────── graphql ───┐
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___category], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
// <───────────────────────────────────────────────────────────────────────┘
