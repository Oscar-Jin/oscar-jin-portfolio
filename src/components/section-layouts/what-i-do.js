// ───────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../designer-uis/heading.js"
import programming from "../../images/programming.svg"
import { Link } from "gatsby"

// ────────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative`}
`
const TwoColumn = styled.div`
  ${tw`flex flex-col items-center justify-between max-w-screen-xl py-20 mx-auto md:flex-row md:py-24`}
`
const Column = styled.div`
  ${tw`w-full max-w-md mx-auto md:max-w-none md:mx-0`}
`
const ImageColumn = styled(Column)`
  ${tw`relative flex-shrink-0 px-2 md:w-6/12`}
`
const TextColumn = styled(Column)`
  ${tw`mt-16 md:w-6/12 md:mt-0 md:mr-12 lg:mr-16 md:order-first`}
`
const Image = styled.img`
  ${tw`p-2`}
`
const TextContent = styled.div`
  ${tw`text-center lg:py-8 md:text-left`}
`
const Subheading = styled(SubheadingBase)`
  ${tw`text-center md:text-left`}
`
const Heading = styled(SectionHeading)`
  ${tw`mt-4 text-3xl font-black leading-tight text-left text-center sm:text-4xl lg:text-5xl md:text-left`}
`
const Description = styled.p`
  ${tw`mt-8 text-sm font-medium leading-relaxed text-center md:text-left md:text-base lg:text-lg text-secondary-100`}
`
const Highlight = styled.span`
  ${tw`text-primary-500`}
`
const ListOfSkills = styled.div`
  ${tw`flex flex-col max-w-xs mx-auto md:mx-0 lg:flex-row lg:max-w-none`}
`
const Skill = styled.div`
  ${tw`flex flex-col items-center mt-10 lg:mt-8 md:items-start md:mr-8 last:mr-0`}
`
const SkillHeadingContainer = styled.div`
  ${tw`flex items-center`}
`
const SkillColor = styled.div`
  ${tw`flex-shrink-0 inline-block p-2 mx-auto text-center rounded-full`}
`
const SkillHeading = styled.div`
  ${tw`ml-3 text-xl font-bold`}
`
const SkillDescription = styled.div`
  ${tw`mt-4 leading-relaxed text-center text-gray-600 md:text-left`}
`
const LinkButtonTeal = styled(Link)`
  ${tw`w-40 py-4 my-2 mt-8 font-bold leading-none text-center text-gray-100 transition duration-300 bg-teal-500 rounded-full focus:outline-none hover:bg-primary-900`}
`
const LinkButtonRed = styled(Link)`
  ${tw`w-40 py-4 my-2 mt-8 font-bold leading-none text-center text-gray-100 transition duration-300 bg-red-500 rounded-full focus:outline-none hover:bg-primary-900`}
`
// <───────────────────────────────────────────────────────────────────────┘

export default function WhatIDo() {
  const skills = [
    {
      title: "iOS / Web Dev",
      description:
        "From Mobile to Desktop, the possibilities are endless. Need some new feature?",
      button: <LinkButtonTeal to="/">My Works</LinkButtonTeal>,
      color: "bg-teal-300",
    },
    {
      title: "UI / UX Design",
      description:
        "Great product comes with a greater user experience. Crappy UI? Not on my watch.",
      button: <LinkButtonRed to="/">My Designs</LinkButtonRed>,
      color: "bg-red-300",
    },
  ]

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image src={programming} />
        </ImageColumn>
        <TextColumn>
          <TextContent>
            <Subheading>What I Do</Subheading>
            <Heading>
              Strive to <Highlight>become</Highlight> outstanding.
            </Heading>
            <Description>
              Relentless, what it takes to become exceptional. With a great
              appetite to take in new skills, It will not be your typical
              developer who’s on the project.
            </Description>
            <ListOfSkills>
              {skills.map((skill, index) => (
                <Skill key={index}>
                  <SkillHeadingContainer>
                    <SkillColor className={skill.color} />
                    <SkillHeading>{skill.title}</SkillHeading>
                  </SkillHeadingContainer>
                  <SkillDescription>{skill.description}</SkillDescription>
                  {skill.button}
                </Skill>
              ))}
            </ListOfSkills>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
