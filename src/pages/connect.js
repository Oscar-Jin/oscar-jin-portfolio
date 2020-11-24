//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Layout from "../components/page-structures/layout"
import SEO from "../components/advanced-optimizations/seo"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
export default function Connect() {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <Layout>
      <SEO title={t("nav:Connect")} lang={language} />
      <div>Connect</div>
    </Layout>
  )
}

// <───────────────────────────────────────────────────────────────────────┘
