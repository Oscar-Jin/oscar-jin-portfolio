//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Img from "gatsby-image"
import tw, { styled } from "twin.macro"
import { SectionDescription } from "../components/designer-uis/heading"
import Layout from "../components/page-structures/layout"
import { Trans } from "gatsby-plugin-react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub } from "react-icons/fa"
import { BiLink } from "react-icons/bi"
import { gallery } from "../data/designs.json"

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
    <Trans ns="designs" i18nKey="subheading">
      Delightful Beauty
    </Trans>
  ),
  heading: (
    <Trans ns="designs" i18nKey="heading">
      My Gallery for Designs
    </Trans>
  ),
  description: "Sketch, Illustrator, InDesign",
}

// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function Designs() {
  const data = useStaticQuery(graphql`
    query {
      businessModel: file(relativePath: { eq: "Business Model.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      corporateLogo: file(relativePath: { eq: "Corporate Logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designerWonderland: file(
        relativePath: { eq: "Designer Wonderland.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ikidaneJapanAd: file(relativePath: { eq: "Ikidane Japan Ad.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lacomsConnect: file(relativePath: { eq: "Lacoms Connect Base.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lacomsPayAd: file(relativePath: { eq: "Lacoms Pay Ad.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lacomsStudentUI: file(relativePath: { eq: "Lacoms Student UI.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lacomsTokyoHeadquarter: file(
        relativePath: { eq: "Lacoms Tokyo Headquarter.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lessonUI: file(relativePath: { eq: "Lesson UI.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      membershipCard: file(relativePath: { eq: "Membership Card.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigationUI: file(relativePath: { eq: "Navigation UI.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nextLogo: file(relativePath: { eq: "Next Logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nextWallpaper: file(relativePath: { eq: "Next Wallpaper.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      missionStrip: file(relativePath: { eq: "Mission Strip.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resortInnBanner: file(relativePath: { eq: "Resort Inn Banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resortInnLight: file(relativePath: { eq: "Resort Inn Light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resortInnDark: file(relativePath: { eq: "Resort Inn Dark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teach: file(relativePath: { eq: "Teach.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      unityEmblemLight: file(relativePath: { eq: "Unity Emblem Light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseManual: file(relativePath: { eq: "house-manual-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lacomsSchedule: file(
        relativePath: { eq: "LACOMS 予定登録期間の変更.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wiFiBreakdown: file(relativePath: { eq: "WiFi Breakdown.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      changeClass: file(relativePath: { eq: "LACOMS 授業変更のご案内.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ikidaneAnnex: file(relativePath: { eq: "IKIDANE 別館マニュアル.png" }) {
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
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            <Subheading>{localized.subheading}</Subheading>
            <Heading>{localized.heading}</Heading>
            <Description>{localized.description}</Description>
          </HeadingContainer>
          <Cards>
            {gallery.map((project, index) => (
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
