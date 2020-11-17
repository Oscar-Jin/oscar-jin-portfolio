//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import Header from "./header"
import Footer from "./footer"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import useInView from "use-in-view"
import { motion } from "framer-motion"
import "../../styles/tailwind.css"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`min-h-screen p-8 overflow-hidden font-display text-secondary-500`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
Layout.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default function Layout({ animate, children }) {
  const directions = ["left", "right"]

  if (Array.isArray(children) === false) {
    children = [children]
  }

  if (animate) {
    const animated = children.map((child, i) => (
      <AnimatedSlideIn key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideIn>
    ))
    return <Site>{animated}</Site>
  }

  return <Site>{children}</Site>
}
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────────── site ───┐
Site.propTypes = {
  children: PropTypes.node.isRequired,
}

function Site({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘

//  ──────────────────────────────────────────────────────────── motion ───┐
AnimatedSlideIn.propTypes = {
  direction: PropTypes.string,
  offset: PropTypes.number,
  children: PropTypes.element.isRequired,
}

function AnimatedSlideIn({ direction = "left", offset = 20, children }) {
  const [ref, inView] = useInView(offset)

  const x = { target: "0%" }

  if (direction === "left") {
    x.initial = "-150%"
  } else {
    x.initial = "150%"
  }

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={{
        x: inView && x.target,
        transitionEnd: {
          x: inView && 0,
        },
      }}
      transition={{ type: "spring", damping: 20 }}
      ref={ref}
    >
      {children}
    </motion.section>
  )
}
// <───────────────────────────────────────────────────────────────────────┘
