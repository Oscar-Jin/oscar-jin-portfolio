// ───────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Img from "gatsby-image"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import rocketLaunch from "../../images/launch.svg"
import LinkButton from "../designer-uis/link-button"

// ────────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative`}
`
const TwoColumn = styled.div`
  ${tw`flex flex-col max-w-screen-xl py-20 mx-auto lg:flex-row lg:items-center md:py-24`}
`
const LeftColumn = styled.div`
  ${tw`relative max-w-lg mx-auto text-center lg:w-5/12 lg:max-w-none lg:text-left`}
`
const RightColumn = styled.div`
  ${tw`relative flex flex-col justify-center flex-1 mt-12 lg:mt-0 lg:self-end`}
`
const Heading = styled.h1`
  ${tw`text-3xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl xl:text-5xl`}
`
const Highlight = styled.span`
  ${tw`text-primary-500 `}
`
const Paragraph = styled.p`
  ${tw`my-5 mb-3 text-base lg:my-8 lg:mb-5 xl:text-lg`}
`
const IllustrationContainer = styled.div`
  ${tw`flex items-center justify-center lg:justify-end`}
`
const LogoStrip = styled.div`
  ${tw`mt-10 lg:mt-16`}
`
const StripTitle = styled.p`
  ${tw`text-sm font-bold tracking-wider text-gray-500 uppercase lg:text-xs`}
`
const StripImage = styled(Img)`
  ${tw`pr-5 mt-4 opacity-50 lg:pr-16 xl:pr-32`}
`
const Illustration = styled.img`
  ${tw`w-full max-w-lg min-w-0 xl:max-w-3xl lg:p-5 xl:p-16`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function DreamBig() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "skill-set.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <Heading>
            Dream <Highlight>big.</Highlight> No boundary.
          </Heading>
          <Paragraph>
            If you’re desperately seeking for someone who can bring out the best
            in your business. Look no further, you just found the right guy.
          </Paragraph>
          <LinkButton>Find Out More</LinkButton>
          <LogoStrip>
            <StripTitle>Skills I am proud of</StripTitle>
            <StripImage
              fluid={data?.file?.childImageSharp?.fluid}
              alt="list of skills I have"
            />
          </LogoStrip>
        </LeftColumn>
        <RightColumn>
          <IllustrationContainer>
            <Illustration src={rocketLaunch} alt="rocket ready to launch" />
          </IllustrationContainer>
        </RightColumn>
      </TwoColumn>
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
