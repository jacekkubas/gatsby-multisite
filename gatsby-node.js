const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const aboutTemplate = path.resolve(`src/templates/about.js`);

  return graphql(
    `
      query aboutQuery {
        allWpPage(filter: { slug: { in: ["about-us", "about-us-zurich"] } }) {
          nodes {
            slug
          }
        }
      }
    `,
    { limit: 2 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    const nodes = result.data.allWpPage.nodes;

    createPage({
      // Path for this page — required
      path: "about",
      component: aboutTemplate,
      context: {
        slug: process.env.CITY ? nodes[0].slug : nodes[1].slug,
      },
    });
  });
};
