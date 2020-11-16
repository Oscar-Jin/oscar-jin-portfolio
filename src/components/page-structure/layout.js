//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
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
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default function Layout({ animationReveal, children }) {
  const directions = ["left", "right"]

  if (Array.isArray(children) === false) {
    children = [children]
  }

  if (animationReveal) {
    const animated = children.map((child, i) => (
      <AnimatedSlideIn key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideIn>
    ))
    return <Container>{animated}</Container>
  }

  return <Container>{children}</Container>
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
