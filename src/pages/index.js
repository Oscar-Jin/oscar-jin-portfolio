//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Layout from "../components/page-structures/layout"
import SEO from "../components/advanced-optimizations/seo"
import WhatIDo from "../components/section-layouts/what-i-do"
import Teaching from "../components/section-layouts/teaching"
import DreamBig from "../components/section-layouts/dream-big"
import Introduce from "../components/section-layouts/introduce"
import MyStrength from "../components/section-layouts/my-strength"
import GetStarted from "../components/section-layouts/get-started"
import WhatIStudy from "../components/section-layouts/what-I-study"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
const HomePage = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <Layout animate>
      <SEO title={t("nav:Books")} lang={language} />
      <DreamBig />
      <MyStrength />
      <WhatIStudy />
      <WhatIDo />
      <Teaching />
      <Introduce />
      <GetStarted />
    </Layout>
  )
}
// <───────────────────────────────────────────────────────────────────────┘

export default HomePage
