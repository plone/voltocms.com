import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Flexbox from 'flexbox-react';
import logo from './Logo.svg';

// import './index.css';
import './main.scss';

const Header = () => (
  <Flexbox flexDirection="row" element="header" height="80px">
    <Flexbox className="logo">
      <img src={logo} alt="logo" />
    </Flexbox>
    <Flexbox element="nav">
      <ul>
        <li>
          <Link to="">Features</Link>
        </li>
        <li>
          <Link to="">Healthy</Link>
        </li>
        <li>
          <Link to="">Experts</Link>
        </li>
        <li>
          <Link to="">Roadmap</Link>
        </li>
      </ul>
    </Flexbox>
  </Flexbox>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
