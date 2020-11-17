import React from "react"
import DreamBig from "../components/section-layouts/dream-big"
import Layout from "../components/page-structures/layout"
import MyStrength from "../components/section-layouts/my-strength"
import WhatIStudy from "../components/section-layouts/what-I-study"
import WhatIDo from "../components/section-layouts/what-i-do"
import Teaching from "../components/section-layouts/teaching"
import Introduce from "../components/section-layouts/introduce"
import GetStarted from "../components/section-layouts/get-started"
import SEO from "../components/advanced-optimizations/seo"

const HomePage = () => {
  return (
    <Layout animate>
      <SEO title="Home" />
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

export default HomePage
