//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import oscar from "../../images/oscar-avatar.jpg"
import { BiLike } from "react-icons/bi"
import { Trans } from "gatsby-plugin-react-i18next"
import { SectionHeading, SectionSubheading } from "../designer-uis/heading.js"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative`}
`
const ContentWithPaddingXl = styled.div`
  ${tw`max-w-screen-xl py-20 mx-auto lg:py-24`}
`
const Subheading = styled(SectionSubheading)`
  ${tw`mb-4 text-center`}
`
const Heading = styled(SectionHeading)`
  ${tw`w-full`}
`
const Column = styled.div`
  ${tw`flex flex-col items-center`}
`
const HeaderContent = styled.div`
  ${tw``}
`
const FactsContainer = styled.dl`
  ${tw`mt-12 max-w-4xl relative`}
`
const Fact = styled.div`
  ${tw`select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-700 bg-gray-100`}
`
const Description = styled.dt`
  ${tw`flex justify-between items-center`}
`
const DescriptionText = styled.span`
  ${tw`text-lg lg:text-xl font-semibold`}
`
const LikeIcon = styled(BiLike)`
  ${tw`inline-block w-5 h-5 mr-3`}
`
const UserProfileContainer = styled.div`
  ${tw`h-auto px-2 border-t-4 border-b-4 md:shadow-sm md:border-0 md:border-l-4 border-primary-300 md:flex md:flex-row-reverse`}
`
const ProfileDescription = styled.div`
  ${tw`flex-shrink max-w-xl p-3 m-4 mx-auto text-sm font-medium leading-relaxed text-center md:text-left md:text-base lg:text-lg text-secondary-500`}
`
const AuthorSignature = styled.div`
  ${tw`mt-5 font-bold text-primary-300 lg:text-xl`}
`
const ProfilePhotoContainer = styled.div`
  ${tw`flex-shrink-0 mx-auto border border-transparent`}
`
const PhotoContainer = styled.div`
  ${tw`w-32 h-32 m-4 mx-auto mb-8 overflow-hidden border border-gray-100 rounded-full md:m-8 lg:w-40 lg:h-40`}
`
const ProfileImage = styled.img`
  ${tw`w-full h-full`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ─────────────────────────────────────────────────────────────── svg ───┐
const BlobOne = () => (
  <svg
    viewBox="0 0 600 600"
    className="absolute top-0 right-0 w-56 h-56 text-teal-400 transform translate-x-40 pointer-events-none opacity-15 "
    style={{ zIndex: "-1" }}
  >
    <g transform="translate(300,300)">
      <path
        d="M103.9,-95.2C140.4,-67.4,179.7,-33.7,191.6,11.9C203.5,57.5,188,115,151.5,150.2C115,185.4,57.5,198.2,-5.4,203.6C-68.4,209,-136.7,207,-183.4,171.9C-230,136.7,-255,68.4,-233.5,21.6C-211.9,-25.2,-143.8,-50.4,-97.1,-78.3C-50.4,-106.1,-25.2,-136.6,4.2,-140.8C33.7,-145,67.4,-123.1,103.9,-95.2Z"
        fill="currentColor"
      />
    </g>
  </svg>
)

const BlobTwo = () => (
  <svg
    viewBox="0 0 600 600"
    className="absolute bottom-0 left-0 w-64 h-64 transform -translate-x-40 pointer-events-none z-0 opacity-15 text-primary-500"
    style={{ zIndex: "-1" }}
  >
    <g transform="translate(300,300)">
      <path
        d="M134.6,-126.1C171.1,-98.1,195,-49,182.7,-12.4C170.3,24.3,121.6,48.6,85.1,84.6C48.6,120.6,24.3,168.3,-21.9,190.2C-68.1,212.1,-136.2,208.2,-181.1,172.2C-225.9,136.2,-247.5,68.1,-229.7,17.8C-211.9,-32.5,-154.7,-65.1,-109.9,-93.1C-65.1,-121.1,-32.5,-144.5,8.2,-152.8C49,-161,98.1,-154.1,134.6,-126.1Z"
        fill="currentColor"
      />
    </g>
  </svg>
)

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── localize ───┐
const localized = {
  subheading: (
    <Trans ns="index" i18nKey="introduce.subheading">
      Introduce
    </Trans>
  ),
  heading: (
    <Trans ns="index" i18nKey="introduce.heading">
      Say hello to Oscar !
    </Trans>
  ),
  profileDescription: (
    <Trans ns="index" i18nKey="introduce.profileDescription">
      Oscar likes to spend many of his time on creative activities - like coding
      and styling website. He is passionate about learning. He is very proud of
      his work.
    </Trans>
  ),
  authorSignature: (
    <Trans ns="index" i18nKey="introduce.authorSignature">
      Oscar Jin (@Kinchan)
    </Trans>
  ),
  facts: [
    <Trans ns="index" i18nKey="introduce.facts.1" key="01">
      25 years old guy living in Tokyo, Japan.
    </Trans>,
    <Trans ns="index" i18nKey="introduce.facts.2" key="02">
      Speak English, Japanese, Chinese and some bits of Korean.
    </Trans>,
    <Trans ns="index" i18nKey="introduce.facts.3" key="03">
      Code in Swift and JavaScript. JAMStack are his favorite.
    </Trans>,
    <Trans ns="index" i18nKey="introduce.facts.4" key="04">
      Path to become an entrepreneur.
    </Trans>,
    <Trans ns="index" i18nKey="introduce.facts.5" key="05">
      Fanatic in graphic design.
    </Trans>,
  ],
}
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function Introduce() {
  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            <Subheading>{localized.subheading}</Subheading>
            <Heading>{localized.heading}</Heading>
          </HeaderContent>
          <FactsContainer>
            <UserProfileContainer>
              <ProfileDescription>
                {localized.profileDescription}
                <AuthorSignature>{localized.authorSignature}</AuthorSignature>
              </ProfileDescription>
              <ProfilePhotoContainer>
                <PhotoContainer>
                  <ProfileImage src={oscar} alt="oscar jin" />
                </PhotoContainer>
              </ProfilePhotoContainer>
            </UserProfileContainer>
            {localized.facts.map((fact, index) => (
              <Fact key={index}>
                <Description>
                  <DescriptionText>
                    <LikeIcon />
                    {fact}
                  </DescriptionText>
                </Description>
              </Fact>
            ))}
          </FactsContainer>
        </Column>
      </ContentWithPaddingXl>
      <BlobOne />
      <BlobTwo />
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
