require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Chawla Media",
    description:
      "Chawla Media offers professional photography, editing, and content creation services in the Orlando area. Contact @chawlamedia on Instagram for bookings.",
    author: "Steven Whitfield",
    siteUrl: "https://www.chawlamedia.com",
  },
  plugins: [
    "gatsby-plugin-advanced-sitemap",
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.chawlamedia.com/",
        sitemap: "https://www.chawlamedia.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-7LRH8MEVF4",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/404"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
};
