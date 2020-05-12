import React from "react"
import PropTypes from "prop-types"
// import Link from 'gatsby-link';
import Helmet from "react-helmet"
import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from "./Logo.svg"
import favicon from "../static/favicon.ico"
import "./main.scss"

export const Header = () => (
  <header className="container">
    <div className="logo">
      <img src={logo} alt="logo" height="80px" />
    </div>
    <nav>
      <ul>
        <li>
          <AnchorLink href="#get-started">Get Started</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#demo">Demo</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#open-source">Open Source</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#roadmap">Roadmap</AnchorLink>
        </li>
        <li className="call-to-action">
          <AnchorLink href="#get-involved">Get Involved</AnchorLink>
        </li>
      </ul>
    </nav>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Welcome to Pastanaga UI"
      meta={[
        { name: "description", content: "Pastanaga UI project home page" },
        {
          name: "keywords",
          content: "Pastanaga UI, Pastanaga, Plone, Guillotina, UI, Theme, CSS",
        },
      ]}
    >
      <html lang="en" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <div className="main">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
