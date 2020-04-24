import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import logo from './Logo.svg';
import favicon from '../static/favicon.ico';
import './main.scss';

export const Header = () => (
  <header className="container">
    <div className="logo">
      <img src={logo} alt="logo" height="80px" />
    </div>
    <nav>
      <ul>
        <li>
          <a href="">Get Started</a>
        </li>
        <li>
          <a href="">Demo</a>
        </li>
        <li>
          <a href="">Open Source</a>
        </li>
        <li>
          <a href="">Roadmap</a>
        </li>
        <li className="call-to-action">
          <a href="/">Get Involved</a>
        </li>
      </ul>
    </nav>
  </header>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Welcome to Pastanaga UI"
      meta={[
        { name: 'description', content: 'Pastanaga UI project home page' },
        {
          name: 'keywords',
          content: 'Pastanaga UI, Pastanaga, Plone, Guillotina, UI, Theme, CSS',
        },
      ]}
    >
      <html lang="en" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <div className="main">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;