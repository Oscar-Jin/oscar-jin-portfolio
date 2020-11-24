//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import Layout from "../components/page-structures/layout"
import { Trans } from "gatsby-plugin-react-i18next"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative`}
`
const ContentWithPaddingXl = styled.div`
  ${tw`max-w-screen-xl py-20 mx-auto lg:py-24`}
`
const Heading = styled.h2`
  ${tw`text-4xl font-black tracking-wide sm:text-5xl`}
`
const Table = styled.table`
  ${tw`w-full border-collapse table-auto`}
  th, td {
    ${tw`p-1 text-xs sm:text-base`}
  }
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
SiteFiles.propTypes = {
  data: PropTypes.any,
}

export default function SiteFiles(props) {
  return (
    <Layout>
      <Container>
        <ContentWithPaddingXl>
          <Heading>
            <Trans ns="site-files" i18nKey="title">
              My Site&apos;s Files
            </Trans>
          </Heading>
          <Table>
            <thead>
              <tr>
                <th>name</th>
                <th>extension</th>
                <th className="hidden sm:table-cell">relativeDirectory</th>
                <th>prettySize</th>
                <th>birthTime</th>
              </tr>
            </thead>
            <tbody>
              {props.data.allFile.edges.map((edge, index) => (
                <tr key={index}>
                  <td>{edge.node.name}</td>
                  <td>{edge.node.extension}</td>
                  <td className="hidden sm:table-cell">
                    {edge.node.relativeDirectory}
                  </td>
                  <td>{edge.node.prettySize}</td>
                  <td>{edge.node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ContentWithPaddingXl>
      </Container>
    </Layout>
  )
}
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────────── query ───┐
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          extension
          relativeDirectory
          prettySize
          birthTime(fromNow: true)
        }
      }
    }
  }
`
// <───────────────────────────────────────────────────────────────────────┘
