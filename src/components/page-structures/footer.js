//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import tw, { styled } from "twin.macro"
import { SiLine } from "react-icons/si"
import logoLight from "../../images/logo-light.svg"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"

// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────── tailwind ───┐
const Container = styled.div`
  ${tw`relative px-8 py-20 -mx-8 -mb-8 text-gray-100 bg-primary-500 lg:py-24`}
`
const Content = styled.div`
  ${tw`relative z-10 max-w-screen-xl mx-auto`}
`
const FiveColumns = styled.div`
  ${tw`flex flex-wrap justify-center -mt-12 text-center sm:text-left sm:justify-start md:justify-between`}
`
const Column = styled.div`
  ${tw`px-4 mt-12 sm:px-0 sm:w-1/3 md:w-auto`}
`
const ColumnHeading = styled.h5`
  ${tw`font-bold uppercase`}
`
const LinkList = styled.ul`
  ${tw`mt-6 text-sm font-medium`}
`
const LinkListItem = styled.li`
  ${tw`mt-3`}
`
const NavLink = styled(Link)`
  ${tw`pb-1 transition duration-300 border-b-2 border-transparent hocus:border-gray-100`}
`
const ExternalLink = styled.a`
  ${tw`pb-1 transition duration-300 border-b-2 border-transparent hocus:border-gray-100`}
`
const Divider = styled.div`
  ${tw`w-full my-16 border-b-2 border-primary-400`}
`
const ThreeColRow = styled.div`
  ${tw`flex flex-col items-center justify-between md:flex-row`}
`
const LogoContainer = styled.div`
  ${tw`flex items-center justify-center md:justify-start`}
`
const LogoImg = styled.img`
  ${tw`w-6 h-6`}
`
const LogoText = styled.h5`
  ${tw`ml-2 text-xl font-black tracking-wider text-gray-100`}
`
const CopyrightNotice = styled.p`
  ${tw`mt-8 text-sm font-medium text-center text-gray-400 sm:text-base md:mt-0`}
`
const SocialLinksContainer = styled.div`
  ${tw`flex mt-8 md:mt-0`}
`
const SocialLink = styled.a`
  ${tw`p-2 mr-4 text-gray-900 transition duration-300 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-400 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`
// <───────────────────────────────────────────────────────────────────────┘

export default function Footer() {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <NavLink to="/books">
                  <Trans ns="nav">Books</Trans>
                </NavLink>
              </LinkListItem>
              <LinkListItem>
                <NavLink to="/works">
                  <Trans ns="nav">Works</Trans>
                </NavLink>
              </LinkListItem>
              <LinkListItem>
                <NavLink to="/designs">
                  <Trans ns="nav">Designs</Trans>
                </NavLink>
              </LinkListItem>
              <LinkListItem>
                <NavLink to="/connect">
                  <Trans ns="nav">Connect</Trans>
                </NavLink>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Feature</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <NavLink to="/why">
                  <Trans ns="nav">Why Oscar</Trans>
                </NavLink>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>External</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <ExternalLink href="https://lacoms-hub.herokuapp.com">
                  LACOMS-HUB
                </ExternalLink>
              </LinkListItem>
              <LinkListItem>
                <ExternalLink href="https://preview-student-center.surge.sh">
                  Student Center
                </ExternalLink>
              </LinkListItem>
              <LinkListItem>
                <ExternalLink href="https://preview-pole-star.surge.sh">
                  Pole Star
                </ExternalLink>
              </LinkListItem>
              <LinkListItem>
                <ExternalLink href="https://preview-polar-express.surge.sh">
                  Polar Express
                </ExternalLink>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Test</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <NavLink to="/site-files">
                  <Trans ns="nav">Site Files</Trans>
                </NavLink>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column></Column>
        </FiveColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={logoLight} />
            <LogoText>Oscar Jin</LogoText>
          </LogoContainer>
          <CopyrightNotice>
            &copy; 2020 Oscar Jin. All Rights Reserved.
          </CopyrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://github.com">
              <AiFillGithub />
            </SocialLink>
            <SocialLink href="mailto:kintininn@gmail.com?subject=Hello Oscar! 金ちゃん！">
              <AiOutlineMail />
            </SocialLink>
            <SocialLink href="">
              <SiLine />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  )
}
