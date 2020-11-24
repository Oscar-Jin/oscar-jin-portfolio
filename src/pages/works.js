//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Img from "gatsby-image"
import { BiLink } from "react-icons/bi"
import tw, { styled } from "twin.macro"
import { FaGithub } from "react-icons/fa"
import { projects } from "../data/works.json"
import { useStaticQuery, graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import Layout from "../components/page-structures/layout"
import { SectionDescription } from "../components/designer-uis/heading"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import SEO from "../components/advanced-optimizations/seo"
// <───────────────────────────────────────────────────────────────────────┘

//  ──────────────────────────────────────────────────────────── styled ───┐
const Container = styled.div`
  ${tw`relative`}
`
const ContentWithPaddingXl = styled.div`
  ${tw`max-w-screen-xl py-20 mx-auto lg:py-24`}
`
const HeadingContainer = styled.div`
  ${tw`text-center `}
`
const Subheading = styled.h3`
  ${tw`mb-4 font-bold text-primary-500 `}
`
const Heading = styled.h2`
  ${tw`text-4xl font-black tracking-wide text-center sm:text-5xl`}
`
const Description = styled(SectionDescription)`
  ${tw`mx-auto `}
`
const Cards = styled.div`
  ${tw`relative flex flex-wrap mt-12 -mr-3 `}
`
const Card = styled.div`
  ${tw`flex flex-col h-full overflow-hidden transition duration-150 bg-gray-100 rounded-md shadow-sm hover:shadow`}
`
const ImageContainer = styled.div`
  ${tw`flex-1 overflow-hidden`}
  max-height: 16rem;
`
const Flex = styled.div`
  ${tw`flex items-start`}
`
const Image = styled(Img)`
  ${tw`object-contain `}
`
const CardText = styled.div`
  ${tw`flex-1 px-6 py-8`}
`
const CardTitle = styled.h6`
  ${tw`text-lg font-bold`}
`
const LinksContainer = styled.div`
  ${tw`flex my-6 mr-2`}
`
const ProjectInfo = styled.div`
  ${tw`flex `}
`
const ProjectDescription = styled.div`
  ${tw`text-xs text-gray-600 `}
`
const Category = styled.div`
  ${tw`mt-2 font-semibold`}
`
const CardContainer = styled.div`
  ${tw`relative z-20 w-full max-w-sm pr-3 mx-auto mt-10 sm:pt-3 sm:w-1/2 lg:w-1/3 sm:max-w-none sm:mx-0 `}
`
const SiteLink = styled.div`
  ${tw`p-2 m-2 transition duration-300 bg-white rounded-full shadow bg-primary-500 hover:bg-primary-900`}
`
const GithubLink = styled.div`
  ${tw`p-2 m-2 ml-1 transition duration-300 bg-white rounded-full shadow bg-primary-500 hover:bg-primary-900`}
`
const GitHubIcon = styled(FaGithub)`
  ${tw`w-6 h-6 text-white`}
`
const LinkIcon = styled(BiLink)`
  ${tw`w-6 h-6 text-white`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── localize ───┐
const localized = {
  subheading: (
    <Trans ns="works" i18nKey="subheading">
      Made all by myself!
    </Trans>
  ),
  heading: (
    <Trans ns="works" i18nKey="heading">
      My Awesome Projects
    </Trans>
  ),
  description: "Web, iOS, Apps Script",
}

// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function MyWorks() {
  const { t } = useTranslation()
  const { language } = useI18next()
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lacomsHub: file(relativePath: { eq: "lacoms-hub.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bentoApp: file(relativePath: { eq: "bento-app.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      poleStar: file(relativePath: { eq: "pole-star.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentCenter: file(relativePath: { eq: "student-center-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      polarExpress: file(relativePath: { eq: "polar-express-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studentAdmin: file(relativePath: { eq: "student-admin-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lhk: file(relativePath: { eq: "lhk-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nxWorkspace: file(relativePath: { eq: "nx-workspace.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nxProfile: file(relativePath: { eq: "nx-profile-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      checklist: file(relativePath: { eq: "checklist.png" }) {
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
      <SEO title={t("nav:Works")} lang={language} />
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            <Subheading>{localized.subheading}</Subheading>
            <Heading>{localized.heading}</Heading>
            <Description>{localized.description}</Description>
          </HeadingContainer>
          <Cards>
            {projects.map((project, index) => (
              <CardContainer featured={project.featured} key={index}>
                <Card>
                  <ImageContainer>
                    <Image
                      fluid={data?.[project.imageName]?.childImageSharp?.fluid}
                    ></Image>
                  </ImageContainer>
                  <Flex>
                    <CardText>
                      <CardTitle>{project.title}</CardTitle>
                      <ProjectInfo>
                        <ProjectDescription>
                          <Category>{project.category}</Category>
                        </ProjectDescription>
                      </ProjectInfo>
                    </CardText>
                    <LinksContainer>
                      <SiteLink className={project.url ? "block" : "hidden"}>
                        <a href={project.url} rel="noreferrer" target="_blank">
                          <LinkIcon />
                        </a>
                      </SiteLink>
                      <GithubLink
                        className={project.repository ? "block" : "hidden"}
                      >
                        <a
                          href={project.repository}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <GitHubIcon />
                        </a>
                      </GithubLink>
                    </LinksContainer>
                  </Flex>
                </Card>
              </CardContainer>
            ))}
          </Cards>
        </ContentWithPaddingXl>
      </Container>
    </Layout>
  )
}

// <───────────────────────────────────────────────────────────────────────┘
