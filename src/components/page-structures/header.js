//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import logo from "../../images/logo.svg"
import LanguageSelector from "../advanced-optimizations/language-selector"
import useNavToggler from "../../hooks/useNavToggler"
import { BiX, BiMenu } from "react-icons/bi"
import { motion } from "framer-motion"
import { Link } from "gatsby"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.header`
  ${tw`flex items-center justify-between max-w-screen-xl mx-auto`}
`
const NavLinks = styled.div`
  ${tw`flex flex-col items-center lg:inline-block`}
`
const NavLink = styled(Link)`
  ${tw`pb-1 my-2 text-lg font-semibold tracking-wide transition duration-300 border-b-2 border-transparent lg:text-sm lg:mx-6 lg:my-0 hover:border-primary-500 hover:text-primary-500 focus:text-primary-500`}
`
const PrimaryLink = styled(NavLink)`
  ${tw`px-6 py-3 text-gray-100 border-b-0 rounded lg:mx-0 lg:ml-3 bg-primary-500 hover:bg-primary-700 focus:bg-primary-700 hover:text-gray-200 focus:text-gray-200 focus:shadow-outline`}
`
const LogoLinks = styled.div`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`}
`
const Logo = styled.img`
  ${tw`inline-block w-10 h-10 pb-1 mr-3`}
`
const Title = styled.h1`
  ${tw`inline-block`}
`
const MobileNavLinksContainer = styled.nav`
  ${tw`flex items-center justify-between lg:hidden`}
`
const NavToggle = styled.button`
  ${tw`z-20 transition duration-300 lg:hidden focus:outline-none hover:text-primary-500 focus:text-primary-500`}
`
const DesktopNavLinks = styled.nav`
  ${tw`items-center justify-between hidden lg:flex`}
`
const MobileNavLinks = motion.custom(styled.div`
  ${tw`fixed inset-x-0 top-0 z-10 p-8 mx-4 my-6 text-center text-gray-900 bg-white border rounded-lg lg:hidden`}
`)
const XIcon = styled(BiX)`
  ${tw`w-6 h-6`}
`
const MenuIcon = styled(BiMenu)`
  ${tw`w-6 h-6`}
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
function Header() {
  const { showNavLinks, animation, toggleNavbar } = useNavToggler()

  const links = [
    <NavLinks key={1}>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/">Works</NavLink>
      <NavLink to="/">Designs</NavLink>
      <NavLink to="/">Connect</NavLink>
      <PrimaryLink to="/">Resume</PrimaryLink>
    </NavLinks>,
  ]

  const link = (
    <Link to="/">
      <Logo src={logo} alt="logo" />
      <Title>Oscar Jin</Title>
    </Link>
  )

  return (
    <Container>
      <LogoLinks>
        {link}
        <LanguageSelector />
      </LogoLinks>

      <DesktopNavLinks>{links}</DesktopNavLinks>

      <MobileNavLinksContainer>
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? <XIcon /> : <MenuIcon />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Container>
  )
}
// <───────────────────────────────────────────────────────────────────────┘

export default Header
