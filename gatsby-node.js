require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const photoshootTemplateComponent = path.resolve(
    "./src/templates/Photoshoot.js"
  );
  const res = await graphql(`
    {
      allStrapiPortfolioCards {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allStrapiPortfolioCards.edges.forEach(edge => {
    createPage({
      component: photoshootTemplateComponent,
      path: `/portfolio/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
