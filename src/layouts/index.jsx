import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import favicon from "../static/favicon.ico"
import "./main.scss"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Welcome to the Volto Content Management System"
      meta={[
        {
          name: "description",
          content: "Volto Content Management System project home page",
        },
        {
          name: "keywords",
          content:
            "Volto, VoltoCMS, Pastanaga UI, Pastanaga, Plone, Guillotina, UI, Theme, CSS",
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
