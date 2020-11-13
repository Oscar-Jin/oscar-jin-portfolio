//  ──────────────────────────────────────────────────────────── import ───┐
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/tailwind.css"

// <───────────────────────────────────────────────────────────────────────┘

//  ─────────────────────────────────────────────────────────── graphql ───┐
const title = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── menu icon ───┐
const Menu = () => {
  return (
    <>
      <button className="transition ease-out duration-200 hover:bg-gray-100 hover:opacity-75 rounded-md p-2 md:p-3 ">
        <svg
          className="mx-auto w-6 h-6 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  )
}
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────── component ───┐
const Layout = ({ children }) => {
  const data = useStaticQuery(title)

  return (
    <>
      <div className="container mx-auto">
        <header className="border p-2 flex items-center justify-between md:p-5 ">
          <div className="flex items-center  p-1">
            <div className="w-4 h-5 border-blue-400 border-l-4 md:w-6 md:h-8"></div>
            <h1 className="font-semibold text-lg md:text-2xl ">
              {data.site.siteMetadata.title}
            </h1>
          </div>
          <Menu></Menu>
          <nav className="hidden md:inline-block">
            <ul className="flex border">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Study</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="col-span-3 p-2 border">{children}</main>

        <footer className="border">
          {new Date().getFullYear()}, Oscar Jin
        </footer>
      </div>
    </>
  )
}
// <───────────────────────────────────────────────────────────────────────┘

export default Layout
