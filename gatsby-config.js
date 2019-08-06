module.exports = {
  siteMetadata: {
    title: `Git Guts`,
    description: `Git Gits is an initiative meant to educate developers with every level of experience on the most popular version control system worldwide - git. Its purpose is to show git from practical perspective in the form of BYOD workshops and presentations with topics like: introduction to git, git repository structure (internal), hooks configuration, useful tooling and more.`,
    author: `@Cloud Corridor`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: ["src/styles"],
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "GRAPHCMS",
        fieldName: "graphCMSData",
        url: `https://api-euwest.graphcms.com/v1/cjw246tvx0ec901et32e3l0po/master`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5CFC74P",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
          },
          {
            family: `Montserrat`,
          },
          {
            family: `Droid Serif`,
          },
        ],
      },
    },
  ],
}
