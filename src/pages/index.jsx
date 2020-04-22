import React from "react"
import Link from "gatsby-link"
import { Header } from "../layouts"
import editorPreviewImg from "../static/editor-preview.png"
import iconsPreviewImg from "../static/icons-preview.png"

const IndexPage = () => (
  <div className="view">
    <div className="atf">
      <Header />
      <div className="introduction">
        <div>
          <h1>VOLTO</h1>
          <h2>The ulimate CMS for editing the web</h2>
        </div>
        <div className="image-wrapper">
          <img
            className="pastanaga-editor-preview"
            src={editorPreviewImg}
            alt="pastanaga-editor-preview"
          />
        </div>
      </div>
    </div>
    <div className="get-started">
      <h1>Get Started</h1>
      <h2>Getting started with Volto</h2>
      <div>
        <p>Lorem Ipsum</p>
      </div>
    </div>
    <div className="demo">
      <h1>Volto Demo</h1>
      <h2>
        Jump into Volto and try out our Demo!<br></br>Try it{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://volto.kitconcept.com"
        >
          here
        </a>
      </h2>
      <div>
        <p>Lorem Ipsum</p>
      </div>
    </div>
    <div className="roadmap">
      <h1>Roadmap</h1>
      <h2>Timeline...</h2>
      <div className="timeline" style={{ width: `900px` }}></div>
    </div>
    <div className="open-source">
      <h1>Open Source</h1>
      <h2>
        Volto is an Open Source project, everybody can participate and use it.
        There are no fees or anything!
      </h2>
      <div>
        <p>Lorem Ipsum</p>
      </div>
    </div>
    <div className="footer-wrapper">
      <footer>
        <p>
          The <a href="https://plone.org">Plone</a> community
        </p>
        <p>The Volto community</p>
        <p>
          Hosted by <a href="https://kitconcept.com">kitconcept</a>
        </p>
      </footer>
    </div>
  </div>
)

export default IndexPage
