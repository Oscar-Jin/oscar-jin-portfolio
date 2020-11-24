import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import "../../styles/journal.css"
import "../../styles/github-markdown.css"
import tw, { styled } from "twin.macro"

const Content = styled.div`
  ${tw`max-w-screen-xl py-20 pb-56! mx-auto lg:py-24`}
`

JournalLayout.propTypes = {
  data: PropTypes.any,
}

export default function JournalLayout({ data }) {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <Content>
        <div className="markdown-body">
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="sm:rounded sm:shadow sm:p-8"
          />
          <div className="mt-10">
            <span className="px-2 py-1 text-gray-600 bg-gray-200 rounded-md">
              Edited: {post.parent.ctime}
            </span>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      parent {
        ... on File {
          id
          name
          ctime(fromNow: true)
        }
      }
    }
  }
`
