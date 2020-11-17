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
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const SectionDescription = styled.p`
  ${tw`max-w-xl mt-4 text-sm font-medium leading-relaxed md:text-base lg:text-lg text-secondary-100`}
`
const SectionHeading = styled.h2`
  ${tw`text-4xl font-black tracking-wide text-center sm:text-5xl`}
`
const SubheadingBase = styled.h5`
  ${tw`font-bold text-primary-500`}
`
const Container = styled.div`
  ${tw`relative`}
`
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-center max-w-screen-lg py-20 mx-auto md:items-stretch md:flex-row md:justify-center md:py-24`}
`
const Subheading = styled(SubheadingBase)`
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
  ${tw`mt-1 font-medium leading-loose text-center md:text-left md:mt-4 md:list-disc text-secondary-100`}
  ::after {
    content: "...";
    opacity: 0.3;
  }
`
const Book = styled.li`
  :last-of-type {
    opacity: 0.9;
  }
`
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────────── data ───┐
const heading = "Leaning into the unknown"
const subheading = "What I Study"
const description =
  "Talent is helpful. But knowledge is far more superior. Through self-education, a person gains the power to open the door to undiscovered territories."
const categories = [
  {
    icon: <BiRun className="w-6 h-6 text-primary-500" />,
    title: "Leadership",
    books: [
      "Good To Great",
      "The Seven Habits of Highly Effective People",
      "Extreme Ownership",
    ],
  },
  {
    icon: <BiBarChartSquare className="w-6 h-6 text-primary-500" />,
    title: "Business & Management",
    books: ["The Lean Startup", "The Startup Owner's Manual"],
  },
  {
    icon: <BiBible className="w-6 h-6 text-primary-500" />,
    title: "Philosophy",
    books: ["Meditations", "Think and Grow Rich", "The Obstacle Is the Way"],
  },
  {
    icon: <BiLandscape className="w-6 h-6 text-primary-500" />,
    title: "Arts & Design",
    books: ["Change by Design", "The Design of Everyday Things"],
  },
  {
    icon: <BiCode className="w-6 h-6 text-primary-500" />,
    title: "Programming",
    books: ["Computer Science An Overview", "Learn Enough To Be Dangerous"],
  },
  {
    icon: <BiBrain className="w-6 h-6 text-primary-500" />,
    title: "Neuropsychology",
    books: [
      "The Willpower Instinct",
      "Mindset",
      "The Principle of Neural Science",
    ],
  },
]
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function WhatILearn() {
  const cards = categories.map(category => (
    <Column key={category}>
      <Card>
        <IconContainer>{category.icon}</IconContainer>
        <TextContainer>
          <CardTitle>{category.title}</CardTitle>
          <BookList>
            {category.books.map(book => (
              <Book key={book}>{book}</Book>
            ))}
          </BookList>
        </TextContainer>
      </Card>
    </Column>
  ))

  return (
    <Container>
      <ThreeColumnContainer>
        <Subheading>{subheading}</Subheading>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        <VerticalSpacer />
        {cards}
        <LinkButton>Explore My Library</LinkButton>
      </ThreeColumnContainer>
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
