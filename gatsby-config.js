module.exports = {
  pathPrefix: `/ibm-family-science`,
  siteMetadata: {
    title: 'IBM Family Science',
    description: 'IBM Family Science is a hands-on science program offered by IBM Research to inspire 4th and 5th grade students to learn about science.',
    keywords: 'IBM,family,science',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        theme: {
          homepage: "light",
          interior: "g10",
        },
        name: 'IBM Family Science',
        icon: 'src/images/favicon.svg',
        short_name: 'Family Science',
        start_url: '/program-overview',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',

    },
  ],
};
