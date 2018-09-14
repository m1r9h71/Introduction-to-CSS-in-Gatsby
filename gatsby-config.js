module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial Two: Introduction to using CSS in Gatsby',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography.js`,
          },
      },

          ],
}
