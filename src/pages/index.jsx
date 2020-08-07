import React from "react"
import Link from "gatsby-link"
import { Header } from "../layouts"
import CodeBlock from "../components/codeBlock"
import TimeLine from "../components/timeLine"
import editorPreviewImg from "../static/editor-preview.png"
import iconsPreviewImg from "../static/icons-preview.png"
import voltoDemoImg from "../static/volto_demo.png"
import heartSVG from "../static/heart-regular.svg"
import peopleSVG from "../static/users-solid.svg"
import kitconceptLogo from "../static/kitconcept_logo.png"
import voltoLogo from "../static/volto_logo.png"
import Navigation from "../components/Navigation"

const IndexPage = () => (
  <div className="view">
    <div className="landing">
      <Navigation />
      <div className="introduction">
        <div className="wrapper">
          <h1>
            Volto, a new experience for<br></br> editing the web
          </h1>
          <h2>Start editing your content the intuitive way.</h2>
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
    <div className="get-started" id="get-started">
      <div className="wrapper">
        <h1>Features</h1>
        <h3>Fast</h3>
        <p>
          Built on ReactJS, Volto is ready to use and speedy out of the box by
          design.
        </p>
        <h3>Simplicity with batteries included</h3>
        <p>
          Assemble your content in an intuitive way. The{" "}
          <a href="https://plone.org">Plone</a> backend provides Volto with
          a full feature set of an Enterprise Content Management System.
        </p>
        <h3>Securely organized content</h3>
        <p>
          A granular security system allows you to manage the visibility and
          access to your content.
        </p>
      </div>
      {/* <h1>Get Started</h1>
      <h2>Getting started with Volto</h2>
      <CodeBlock
        title="Clone the   'create-volto-app'   GitHub repository"
        code="git clone git@github.com:plone/create-volto-app.git"
      />
      <CodeBlock
        title="cd into the create-volto-app folder"
        code="cd create-volto-app"
      />
      <CodeBlock
        title="Get the boilerplate"
        code="create-volto-app <app-name>"
      />
      <CodeBlock
        title="Run the project in development mode."
        code="yarn start"
        description=" You can view your application at http://localhost:3000. The page supports hot reload."
      /> */}
    </div>
    <div className="demo" id="demo">
      <div className="wrapper">
        <h1>Why using Volto</h1>
        <p>
          The world is colorful and <b>multilingual</b>. With Volto it’s
          convenient to manage translations.
        </p>
        <p>
          Your content is <b>searchable</b>. Volto indexes out of the box the
          complete content including files like PDFs.
        </p>
        <p>
          Community driven software is <b>healthy and future-proof</b>. Volto is
          a child of a strong Open Source Community: 800 contributors are
          refining Plone and Volto.
        </p>
      </div>
      {/* <h1>Volto Demo</h1>
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
      <div
        className="image-wrapper"
        style={{
          width: "900pt",
          margin: "30pt auto 0 auto",
        }}
      >
        <img
          className="volto-demo-image"
          src={voltoDemoImg}
          alt="Image showing the Volto Demo"
          style={{ borderRadius: "20pt" }}
        />
      </div> */}
    </div>
    <div className="open-source" id="open-source">
      <div className="wrapper">
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
        <div className="image-wrapper">
          <img
            className="volto-demo-image"
            src={voltoDemoImg}
            alt="Image showing the Volto Demo"
            style={{ borderRadius: "20pt", maxWidth: "80%" }}
          />
        </div>
        <h1>Volto in action</h1>
        <h1>TBD...</h1>
      </div>
      {/* <h1>Open Source</h1>
      <div className="image-wrapper">
        <img
          src={peopleSVG}
          alt="people icon"
          className="people-icon"
          height="105pt"
        ></img>
      </div>
      <p>
        Volto is an Open Source project, everybody can participate and use it.
        There are no fees or anything!
      </p> */}
    </div>
    <div className="roadmap" id="roadmap">
      <div className="wrapper">
        <h1>Roadmap</h1>
        <h2>Timeline...</h2>
        <TimeLine
          date1="Right now"
          event1="Volto Remote Sprint"
          date2="April 2020"
          event2="Volto 5.0 released"
          date3="February 2020"
          event3="Volto is now the standard frontend for Plone!"
          date4="January 2020"
          event4="Happy New Year Volto!"
          date5="End of 2019"
          event5="Volto 4.0 released"
          date6="End of 2019"
          event6="Introducing the Listing-Block!"
        />
      </div>
      {/* <h1>Roadmap</h1>
      <h2>Timeline...</h2>
      <TimeLine
        date1="Right now"
        event1="Volto Remote Sprint"
        date2="April 2020"
        event2="Volto 5.0 released"
        date3="February 2020"
        event3="Volto is now the standard frontend for Plone!"
        date4="January 2020"
        event4="Happy New Year Volto!"
        date5="End of 2019"
        event5="Volto 4.0 released"
        date6="End of 2019"
        event6="Welcome to the Volto family, Listing-Block!"
      />
    </div>
    <div className="get-involved" id="get-involved">
      <h1>Get Involved</h1>
      <h2>Join our Community and become a part of Volto!</h2>
      <div className="image-wrapper">
        <img
          src={heartSVG}
          alt="heart-svg"
          className="heart-icon"
          height="106pt"
          width="120pt"
        />
      </div>
      <p>React, Python & Plone Developers: Help us to further develop Volto</p>
      <p>
        Visit us on <a href="https://github.com/plone/volto">github</a> or join
        our <a href="">Slack Channel</a>
      </p> */}
    </div>
    <div className="starting">
      <div className="wrapper">
        <h1>Get started</h1>
        <p>The prerequisites for a local installation are</p>
        <p>
          Node.js, Python and for a first taste install also Docker.
          <p>Get the Plone backend</p>
        </p>
        <CodeBlock
          title="Clone the   'create-volto-app'   GitHub repository"
          code={`docker run -it --rm --name=plone -p 8080:8080 -e SITE=Plone -e ADDONS="kitconcept.volto" -e ZCML="kitconcept.volto.cors" -e PROFILES="kitconcept.volto:default-homepage" plone
        `}
        />
        <CodeBlock
          title="Get Volto"
          code="create-volto-app myvoltoapp; cd myvoltoapp; yarn start"
        />
        <CodeBlock
          title="Your Volto is ready under:"
          code="http://localhost:3000"
        />
        <p>
          For editing, login with <b>admin:admin</b>
        </p>
        <p>
          More options and detailed instructions how to install, <br></br>
          <a href="https://docs.voltocms.com/getting-started/install/">
            check out the Volto Docs
          </a>
        </p>
      </div>
    </div>
    <div className="why-volto">
      <div className="wrapper">
        <h1>Why developers love Volto</h1>
        <h3>Build faster</h3>
        <p>
          Volto is designed to start creating content out of the box. You need a
          different view on your content? We use component shadowing to override
          an existing view with a custom version, without having to modify
          Volto’s source. Just copy and modify the markup.
        </p>
        <h3>No reinvention of the wheel</h3>
        <p>
          Concentrate on features and design. The rich ecosystem of React
          components is at hand.
        </p>
        <h3>Do more with less</h3>
        <p>
          Volto supports Semantic UI with declarative APIs providing robust
          features and prop validation.
        </p>
        <CodeBlock
          title="Clone the   'create-volto-app'   GitHub repository"
          code="git clone git@github.com:plone/create-volto-app.git"
        />
        <CodeBlock
          title="cd into the create-volto-app folder"
          code="cd create-volto-app"
        />
        <CodeBlock
          title="Get the boilerplate"
          code="create-volto-app <app-name>"
        />
        <CodeBlock
          title="Run the project in development mode."
          code="yarn start"
        />
        <p>
          {" "}
          You can view your application at <b>http://localhost:3000</b>. The
          page supports hot reload.
        </p>
      </div>
    </div>
    <div className="learn-more">
      <div className="wrapper">
        <h1>Learn more</h1>
        <h3>Training:</h3>
        <p>
          Volto, Volto-Hands-On and Mastering Plone 6 (Plone backend and Volto
          frontend)
        </p>
        <h3>Documentation</h3>
        <p>
          <a href="https://docs.voltocms.com" title="Volto Documentation">docs.voltocms.com</a>
        </p>
        <h1>Get help</h1>
        <p>
          Find the smart Plone people discussing Volto topics on{" "}
          <a href="https://community.plone.org/c/volto/">
            https://community.plone.org/c/volto/
          </a>{" "}
          <br></br>Just a question? We chat on{" "}
          <a href="https://gitter.im/plone/volto">
            https://gitter.im/plone/volto
          </a>
        </p>
      </div>
    </div>
    <div className="help">
      <div className="wrapper">
        <h1>Get Involved</h1>
        <h2>Join our Community and become a part of Volto!</h2>
        <div className="image-wrapper">
          <img
            src={heartSVG}
            alt="heart-svg"
            className="heart-icon"
            height="106pt"
            width="120pt"
          />
        </div>
        <p>
          React, Python & Plone Developers: Help us to further develop Volto
        </p>
        <p>
          Visit us on <a href="https://github.com/plone/volto">github</a> or
          join our <a href="">Slack Channel</a>
        </p>
      </div>
    </div>

    <div className="footer-wrapper">
      <footer>
        <div className="plone">
          <p>
            The <a href="https://plone.org">Plone</a> community
          </p>
        </div>
        <div className="volto">
          <div style={{ marginTop: "6pt" }}>
            <img src={voltoLogo} alt="volto-logo" className="volto-logo" />
          </div>
          <p>The Volto community</p>
        </div>
        <div className="kitconcept">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p>Hosted by </p>
            <div style={{ marginTop: "3pt" }}>
              <img
                src={kitconceptLogo}
                alt="kitconcept-logo"
                className="kitconcept-logo"
              />
            </div>
            <p>kitconcept</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
)

export default IndexPage
