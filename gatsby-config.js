const cfg = {
  siteMetadata: {
    title: `Volto`,
    description: `Volto, a new experience for editing the web.`,
    author: `@plone`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Volto CMS`,
        short_name: `voltocms`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/volto_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

if (process.env.GATSBY_ENV === "production") {
  const googleAnalyticsCfg = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA_TRACKING_ID || "UA-1907133-11",
      head: false,
      anonymize: true,
      respectDNT: true,
    },
  }
  cfg.plugins.push(googleAnalyticsCfg)
}

module.exports = cfg
