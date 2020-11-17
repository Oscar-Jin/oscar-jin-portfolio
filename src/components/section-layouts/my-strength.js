//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import worldJourney from "../../images/journey.svg"
import LinkButton from "../designer-uis/link-button"
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const SectionHeading = styled.h2`
  ${tw`text-4xl font-black tracking-wide text-center sm:text-5xl`}
`
const SubheadingBase = styled.h5`
  ${tw`font-bold text-primary-500`}
`
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
  ${tw`relative flex-shrink-0 py-10 md:w-6/12`}
`
const TextColumn = styled(Column)`
  ${tw`mt-16 md:w-6/12 md:mt-0 md:ml-12 lg:ml-16 md:order-last`}
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
const Paragraph = styled.p`
  ${tw`mt-5 text-gray-600`}
`
const Highlight = styled.span`
  ${tw`text-primary-500`}
`
const Lists = styled.ul`
  ${tw`mt-12 mb-4`}
`
const List = styled.li`
  ${tw`flex flex-col items-center mt-8 md:flex-row md:items-start`}
`
const ListCount = styled.div`
  ${tw`text-4xl font-semibold leading-none text-gray-400`}
`
const ListContent = styled.div`
  ${tw`mt-3 md:mt-0 md:ml-6`}
`
const ListHeading = styled.h6`
  ${tw`text-xl font-semibold leading-none`}
`
const ListDescription = styled.p`
  ${tw`max-w-xs mt-3 text-sm font-medium leading-loose text-gray-600`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function MyStrength() {
  const languages = [
    {
      heading: "English",
      description: "Used in more than 80+ countries.",
    },
    {
      heading: "Chinese",
      description: "Spoken by 1.2 billion across the world.",
    },
    {
      heading: "Japanese",
      description: "The language of 4.97 trillion GDP",
    },
  ]

  return (
    <Container>
      <TwoColumn>
        <TextColumn>
          <TextContent>
            <Subheading>My Strength</Subheading>
            <Heading>
              One world, one <Highlight>mind</Highlight>.
            </Heading>
            <Paragraph>
              Internationalization is hard. But if there is anything so called
              language barrier, now you’ve got the power to break it.
            </Paragraph>
            <Lists>
              {languages.map((language, index) => (
                <List key={index}>
                  <ListCount>
                    {(index + 1).toString().padStart(2, "0")}
                  </ListCount>
                  <ListContent>
                    <ListHeading>{language.heading}</ListHeading>
                    <ListDescription>{language.description}</ListDescription>
                  </ListContent>
                </List>
              ))}
            </Lists>
            <LinkButton>And More...</LinkButton>
          </TextContent>
        </TextColumn>
        <ImageColumn>
          <Image src={worldJourney} />
        </ImageColumn>
      </TwoColumn>
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
