//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Img from "gatsby-image"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative`}
`
const ContentWithVerticalPadding = styled.div`
  ${tw`py-20 lg:py-24`}
`
const Row = styled.div`
  ${tw`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-xl mx-auto sm:px-8`}
`
const Column = styled.div`
  ${tw``}
`
const TextColumn = styled(Column)`
  ${tw`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`}
`
const Heading = styled.h2`
  ${tw`text-4xl font-black leading-snug tracking-wide text-left text-center sm:text-5xl text-primary-900 xl:text-6xl`}
`
const Description = styled.p`
  ${tw`max-w-lg max-w-xl mt-4 text-sm font-medium leading-relaxed text-gray-700 lg:text-base md:text-base lg:text-lg text-secondary-100`}
`
const PrimaryButton = styled.a`
  ${tw`inline-block w-56 px-8 py-3 py-5 mt-8 font-bold tracking-wide text-center text-gray-100 transition duration-300 rounded bg-primary-500 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none cursor-pointer`}
`
const SkillList = styled.ul`
  ${tw`mt-12 leading-loose`}
`
const Skill = styled.li`
  ${tw`flex items-center`}
`
const SkillDescription = styled.p`
  ${tw`ml-2 font-medium text-gray-700`}
`
const ImageColumn = styled(Column)`
  ${tw`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`}
`
const ImageContainer = styled.div`
  ${tw`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`}
`
const Image = styled(Img)`
  ${tw`relative z-20 max-w-full rounded-t shadow w-96 sm:rounded`}
`
const OffsetBackground = styled.div`
  ${tw`absolute inset-0 bg-gray-300 rounded xl:-mb-8`}
`
const Appeal = styled.div`
  ${tw`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`}
`
const Quote = styled.blockquote``
const Name = styled.p`
  ${tw`mt-4 font-bold`}
`
const Title = styled.p`
  ${tw`mt-1 text-sm text-gray-500`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── localize ───┐
const localized = {
  heading: (
    <Trans ns="resume" i18nKey="heading">
      You are not seeking for a mediocre one. So I strive my best to not let you
      down.
    </Trans>
  ),
  description: (
    <Trans ns="resume" i18nKey="description">
      Despite the skills and experiences I have, I will not limit my
      contribution toward a single field of interest. I fully embrace the needs
      of my team and constantly evolving to provide the best service toward my
      teammate.
    </Trans>
  ),
  download: (
    <Trans ns="resume" i18nKey="download">
      Download Resume
    </Trans>
  ),

  skills: [
    <Trans ns="resume" i18nKey="skills.1" key="s1">
      Speaks 4 Language
    </Trans>,
    <Trans ns="resume" i18nKey="skills.2" key="s2">
      iOS / Web Development
    </Trans>,
    <Trans ns="resume" i18nKey="skills.3" key="s3">
      UI / UX Design
    </Trans>,
  ],
  appeal: {
    quote: (
      <Trans ns="resume" i18nKey="appeal.quote">
        The world is increasing in need of a person that can think and act
        interdisciplinary, with the skills to work with people internationally.
        I am determined to just become that person.
      </Trans>
    ),
    name: (
      <Trans ns="resume" i18nKey="appeal.name">
        Oscar Jin
      </Trans>
    ),
    title: (
      <Trans ns="resume" i18nKey="appeal.title">
        iOS / Web Developer, Designer
      </Trans>
    ),
  },
}
// <───────────────────────────────────────────────────────────────────────┘

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      kinchan: file(relativePath: { eq: "kinchan-profile-use.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const linkURL =
    "https://www.dropbox.com/s/6acwcs3hy4jk7ga/2020%20Resume.pdf?dl=1"

  return (
    <>
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>{localized.heading}</Heading>
              <Description>{localized.description}</Description>
              <PrimaryButton href={linkURL} target="_blank">
                {localized.download}
              </PrimaryButton>
              <SkillList>
                {localized.skills.map((skill, index) => (
                  <Skill key={index}>
                    <SkillDescription>{skill}</SkillDescription>
                  </Skill>
                ))}
              </SkillList>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image
                  fluid={data?.["kinchan"]?.childImageSharp?.fluid}
                ></Image>
                <Appeal>
                  <Quote>{localized.appeal.quote}</Quote>
                  <Name>{localized.appeal.name}</Name>
                  <Title>{localized.appeal.title}</Title>
                </Appeal>
              </ImageContainer>
              <OffsetBackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  )
}
