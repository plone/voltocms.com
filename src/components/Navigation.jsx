import React, { useState } from "react"
import cx from "classnames"
import hamburgerIcon from "../static/hamburger_icon.svg"
import logo from "../layouts/Logo.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Navigation = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header
      className={cx("container", {
        mobile: MobileMenuOpen,
      })}
    >
      <div className="logo">
        <img src={logo} alt="logo" height="80px" />
      </div>
      <div
        role="button"
        className="hamburger-menu"
        onClick={() => {
          setMobileMenuOpen(!MobileMenuOpen)
        }}
      >
        <img src={hamburgerIcon}></img>
      </div>
      <nav>
        <ul>
          <li>
            <AnchorLink
              href="#get-started"
              onClick={() => {
                setMobileMenuOpen(false)
              }}
            >
              Get Started
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#demo"
              onClick={() => {
                setMobileMenuOpen(false)
              }}
            >
              Demo
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#open-source"
              onClick={() => {
                setMobileMenuOpen(false)
              }}
            >
              Open Source
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#roadmap"
              onClick={() => {
                setMobileMenuOpen(false)
              }}
            >
              Roadmap
            </AnchorLink>
          </li>
          <li className="call-to-action">
            <AnchorLink
              href="#get-involved"
              onClick={() => {
                setMobileMenuOpen(!MobileMenuOpen)
              }}
            >
              Get Involved
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
