//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative mb-20 lg:mb-24`}
`
const ContentWithPaddingXl = styled.div`
  ${tw`max-w-screen-xl py-20 mx-auto lg:py-24`}
`

const PrimaryBackgroundContainer = styled.div`
  ${tw`relative py-20 rounded-lg lg:py-24 bg-primary-500`}
`
const Row = styled.div`
  ${tw`relative z-10 flex flex-col items-center max-w-screen-lg px-8 mx-auto text-center lg:flex-row lg:text-left`}
`
const ColumnContainer = styled.div`
  ${tw`max-w-lg lg:w-1/2`}
`
const TextContainer = styled(ColumnContainer)`
  ${tw`px-2`}
`
const Text = styled.h5`
  ${tw`text-2xl font-bold text-gray-100 sm:text-3xl`}
`
const LinksContainer = styled(ColumnContainer)`
  ${tw`flex flex-col justify-center mt-6 lg:justify-end lg:mt-0 sm:flex-row`}
`
const LinkBase = styled(Link)`
  ${tw`w-40 px-6 py-3 mt-4 text-sm font-bold tracking-wide text-center transition duration-300 border border-transparent rounded-full sm:text-base sm:px-8 sm:py-4 lg:px-10 lg:py-5 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 focus:outline-none focus:shadow-outline`}
`
const PrimaryLink = styled(LinkBase)`
  ${tw`text-gray-100 bg-red-500 shadow-lg hocus:bg-red-600 hocus:text-gray-200`}
`
const SecondaryLink = styled(LinkBase)`
  ${tw`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function GetStarted() {
  return (
    <Container>
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer>
          <Row>
            <TextContainer>
              <Text>
                Checkout my awesome resume and start to connect with me!
              </Text>
            </TextContainer>
            <LinksContainer>
              <PrimaryLink to="/">Resume</PrimaryLink>
              <SecondaryLink to="/">Connect</SecondaryLink>
            </LinksContainer>
          </Row>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
