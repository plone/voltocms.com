import React from 'react';
import Link from 'gatsby-link';
import { Header } from '../layouts';
import editorPreviewImg from '../static/editor-preview.png';
import iconsPreviewImg from '../static/icons-preview.png';

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
    <div className="footer-wrapper">
    <footer>
      <p>
        The <a href="https://plone.org">Plone</a> community
      </p>
      <p>The Guillotina community</p>
      <p>
        Hosted by <a href="https://kitconcept.com">kitconcept</a>
      </p>
  </footer> 
  </div>
  </div>
);

export default IndexPage;