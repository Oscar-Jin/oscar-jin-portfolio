/* eslint-disable react/no-unescaped-entities */
//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import {
  BiBrain,
  BiBarChartSquare,
  BiBible,
  BiRun,
  BiLandscape,
  BiCode,
} from "react-icons/bi"
import LinkButton from "../designer-uis/link-button"
import { RiBookLine } from "react-icons/ri"
import {
  SectionDescription,
  SectionHeading,
  SectionSubheading,
} from "../designer-uis/heading"
import { Trans } from "gatsby-plugin-react-i18next"
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative`}
`
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center max-w-screen-lg py-20 mx-auto md:flex-wrap md:items-stretch md:flex-row md:justify-center md:py-24`}
`
const Subheading = styled(SectionSubheading)`
  ${tw`mb-4`}
`
const Heading = styled(SectionHeading)`
  ${tw`w-full`}
`
const Description = styled(SectionDescription)`
  ${tw`w-full text-center`}
`
const VerticalSpacer = styled.div`
  ${tw`w-full mt-10`}
`
const Column = styled.div`
  ${tw`max-w-sm md:w-1/2 lg:w-1/3`}
`
const Card = styled.div`
  ${tw`flex flex-col items-center h-full px-2 py-8 mx-4 text-center md:flex-row md:items-start md:text-left`}
`
const IconContainer = styled.div`
  ${tw`flex-shrink-0 p-5 text-center border rounded-full`}
`
const TextContainer = styled.span`
  ${tw`mt-4 md:ml-4 sm:mt-2`}
`
const CardTitle = styled.span`
  ${tw`mt-4 text-2xl font-bold leading-none tracking-wide`}
`
const BookList = styled.ul`
  ${tw`mt-1 font-medium leading-loose text-center md:text-left md:mt-4 text-secondary-100`}
  ::after {
    content: "...";
    opacity: 0.3;
  }
`
const Book = styled.li`
  ${tw`mx-auto md:truncate md:w-56`}
  :last-of-type {
    opacity: 0.9;
  }
`
const BookIconForSmallDevice = styled(RiBookLine)`
  ${tw`inline-block w-4 h-4 opacity-50 md:hidden`}
`
const BookIconForLargeDevice = styled(RiBookLine)`
  ${tw`hidden mr-2 md:inline-block`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── localize ───┐
const localized = {
  heading: (
    <Trans ns="index" native>
      Leaning into the unknown
    </Trans>
  ),
  subheading: (
    <Trans ns="index" native>
      What I Study
    </Trans>
  ),
  description: (
    <Trans ns="index" native>
      Talent is helpful. But knowledge is far more superior. Through
      self-education, reading books give us the power to explore the unknown
      territories.
    </Trans>
  ),
  categories: [
    {
      key: "Leadership",
      icon: <BiRun className="w-6 h-6 text-primary-500" />,
      title: (
        <Trans ns="index" native>
          Leadership
        </Trans>
      ),
      books: [
        <Trans ns="index" native key="01">
          Good To Great
        </Trans>,
        <Trans ns="index" native key="02">
          The Seven Habits of Highly Effective People
        </Trans>,
        <Trans ns="index" native key="03">
          Extreme Ownership
        </Trans>,
      ],
    },
    {
      key: "Business & Management",
      icon: <BiBarChartSquare className="w-6 h-6 text-primary-500" />,
      title: (
        <Trans ns="index" native>
          Business & Management
        </Trans>
      ),
      books: [
        <Trans ns="index" native key="01">
          The Lean Startup
        </Trans>,

        <Trans ns="index" native key="02">
          The Startup Owner's Manual
        </Trans>,
      ],
    },
    {
      key: "Philosophy",
      icon: <BiBible className="w-6 h-6 text-primary-500" />,
      title: (
        <Trans ns="index" native>
          Philosophy
        </Trans>
      ),
      books: [
        <Trans ns="index" native key="01">
          Meditations
        </Trans>,
        <Trans ns="index" native key="02">
          Think and Grow Rich
        </Trans>,
        <Trans ns="index" native key="03">
          The Obstacle Is the Way
        </Trans>,
      ],
    },
    {
      key: "Arts & Design",
      icon: <BiLandscape className="w-6 h-6 text-primary-500" />,
      title: (
        <Trans ns="index" native>
          Arts & Design
        </Trans>
      ),
      books: [
        <Trans ns="index" native key="01">
          Change by Design
        </Trans>,
        <Trans ns="index" native key="02">
          The Design of Everyday Things
        </Trans>,
      ],
    },
    {
      key: "Programming",
      icon: <BiCode className="w-6 h-6 text-primary-500" />,
      title: (
        <Trans ns="index" native>
          Programming
        </Trans>
      ),
      books: [
        <Trans ns="index" native key="01">
          Computer Science An Overview
        </Trans>,
        <Trans ns="index" native key="02">
          Learn Enough To Be Dangerous
        </Trans>,
      ],
    },
    {
      key: "Neuropsychology",
      icon: <BiBrain className="w-6 h-6 text-primary-500" />,
      title: (
        <Trans ns="index" native>
          Neuropsychology
        </Trans>
      ),
      books: [
        <Trans ns="index" native key="01">
          The Willpower Instinct
        </Trans>,
        <Trans ns="index" native key="02">
          Mindset
        </Trans>,
        <Trans ns="index" native key="03">
          The Principle of Neural Science
        </Trans>,
      ],
    },
  ],
  linkButton: (
    <Trans ns="index" native>
      Explore My Library
    </Trans>
  ),
}
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function WhatIStudy() {
  const cards = localized.categories.map(category => (
    <Column key={category.key}>
      <Card>
        <IconContainer>{category.icon}</IconContainer>
        <TextContainer>
          <CardTitle>{category.title}</CardTitle>
          <BookList>
            <BookIconForSmallDevice />
            {category.books.map((book, index) => (
              <Book key={index}>
                <BookIconForLargeDevice />
                {book}
              </Book>
            ))}
          </BookList>
        </TextContainer>
      </Card>
    </Column>
  ))

  return (
    <Container>
      <ThreeColumnContainer>
        <Subheading>{localized.subheading}</Subheading>
        <Heading>{localized.heading}</Heading>
        <Description>{localized.description}</Description>
        <VerticalSpacer />
        {cards}
        <LinkButton to="/">{localized.linkButton}</LinkButton>
      </ThreeColumnContainer>
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
