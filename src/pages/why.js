//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import { Trans } from "gatsby-plugin-react-i18next"
import Layout from "../components/page-structures/layout"
import SEO from "../components/advanced-optimizations/seo"
import GetStarted from "../components/section-layouts/get-started"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const HeadingTitle = styled.h2`
  ${tw`text-4xl font-black tracking-wide text-center sm:text-5xl`}
`
const SingleColumn = styled.div`
  ${tw`max-w-screen-xl py-20 mx-auto lg:py-24`}
`
const HeadingInfoContainer = styled.div`
  ${tw`flex flex-col items-center`}
`
const HeadingDescription = styled.p`
  ${tw`max-w-sm mt-4 font-medium text-center text-gray-600`}
`
const Content = styled.div`
  ${tw`mt-16`}
`
const Details = styled.div`
  ${tw`mx-4 mt-4 md:mt-0 md:max-w-md sm:mx-8 md:mx-4 lg:mx-8`}
`
const Subtitle = styled.div`
  ${tw`text-xl font-bold tracking-wide opacity-50 text-secondary-100`}
`
const Title = styled.h4`
  ${tw`text-3xl font-bold text-gray-900`}
`
const Description = styled.p`
  ${tw`mt-2 leading-loose`}
`
// <───────────────────────────────────────────────────────────────────────┘

const Card = styled.div(props => [
  tw`items-center justify-center mt-24 md:flex`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
])

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`flex-shrink-0 mx-4 bg-center bg-cover rounded md:w-1/2 lg:w-5/12 xl:w-1/3 h-80 md:h-144 sm:mx-8 md:mx-4 lg:mx-8`,
])

//  ────────────────────────────────────────────────────────── localize ───┐
const localized = {
  headingTitle: (
    <Trans ns="why" i18nKey="title">
      Why choose oscar?
    </Trans>
  ),
  headingDescription: (
    <Trans ns="why" i18nKey="description">
      11 reasons why Oscar is your best candidate.
    </Trans>
  ),
  reasons: [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1525555390759-ea48437c1771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      subtitle: "1",
      title: (
        <Trans ns="why" i18nKey="reason.01.title">
          Growth Mindset
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.01.description">
          No matter what the circumstance is, Oscar can quickly identify
          people&apos;s need and respond to it through self guided education for
          the attainment of the necessary skills. This quality enable him to
          quickly adapt to changing environment and provide outstanding services
          in which the market demands.
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      subtitle: "2",
      title: (
        <Trans ns="why" i18nKey="reason.02.title">
          Teamwork
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.02.description">
          Prioritize his work to the demand of his team. When area of weakness
          has identified, re will be overcome by the passion and willingness to
          learn. be supplemented by continuous learning and willingness to go
          beyond comfort zone. For areas of that can be strength,
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1561101904-da649fcbf03f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YWlycG9ydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60",
      subtitle: "3",
      title: (
        <Trans ns="why" i18nKey="reason.03.title">
          Communication Skills
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.03.description">
          lorem
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1522547902298-51566e4fb383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80",
      subtitle: "4",
      title: (
        <Trans ns="why" i18nKey="reason.04.title">
          Language Skills
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.04.description">
          lorem
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
      subtitle: "5",
      title: (
        <Trans ns="why" i18nKey="reason.05.title">
          Leadership
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.05.description">
          lorem
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1587612049655-c1030366a74a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
      subtitle: "6",
      title: (
        <Trans ns="why" i18nKey="reason.06.title">
          Multidisciplinary
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.06.description">
          lorem
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1528857227159-ab26314d8b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
      subtitle: "7",
      title: (
        <Trans ns="why" i18nKey="reason.07.title">
          Informative
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.07.description">
          lorem
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      subtitle: "8",
      title: (
        <Trans ns="why" i18nKey="reason.08.title">
          Disciplined
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.08.description">
          lorem
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2514&q=80",
      subtitle: "9",
      title: (
        <Trans ns="why" i18nKey="reason.09.title">
          Stay Hungry. Stay Foolish.
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.09.description">
          lorem
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1528217580778-96e570819666?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80",
      subtitle: "10",
      title: (
        <Trans ns="why" i18nKey="reason.10.title">
          Character Ethic
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.10.description">
          lorem
        </Trans>
      ),
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1490698900541-76d9b74bdcac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      subtitle: "11",
      title: (
        <Trans ns="why" i18nKey="reason.11.title">
          A Sense of Purpose
        </Trans>
      ),
      description: (
        <Trans ns="why" i18nKey="reason.11.description">
          lorem
        </Trans>
      ),
    },
  ],
}
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function WhyOscar() {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <Layout>
      <SEO title={t("nav:Why Oscar")} lang={language} />
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{localized.headingTitle}</HeadingTitle>
          <HeadingDescription>
            {localized.headingDescription}
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {localized.reasons.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1} id={card.subtitle}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </Details>
            </Card>
          ))}
        </Content>
        <GetStarted />
      </SingleColumn>
    </Layout>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
