import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Introduction
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/methodology" className={navLinkText}>
              Methodology
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/results" className={navLinkText}>
              Results
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/languages" className={navLinkText}>
              Languages
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/history" className={navLinkText}>
              History
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
