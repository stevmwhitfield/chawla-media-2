/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Chawla Media",
    description:
      "Chawla Media offers professional photography, editing, and content creation services in the Orlando area. Contact @chawlamedia on Instagram for bookings.",
    author: "Steven Whitfield",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://chawla-media-strapi.herokuapp.com"
          : "http://localhost:8082",
        queryLimit: 1000,
        collectionTypes: [
          "image-galleries",
          "portfolio-cards",
          "bookings",
          "faqs",
        ],
        singleTypes: [],
      },
    },
  ],
};
