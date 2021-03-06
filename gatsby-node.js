const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`./src/templates/ProductTemplate.js`);
  const result = await graphql(`
    query GET_SKUS {
      allStripeSku {
        edges {
          node {
            id
            price
            product {
              name
              description
              images
              metadata {
                wear
              }
            }
            inventory {
              type
              quantity
            }
          }
        }
      }
    }
  `);

  // Rendering each product in Home:
  // index > Products

  // Rendering each product in it's dynamic page:
  // gatsby-node.js > ProductTemplate > ProductDetail

  // In order to update a SKU:
  // stripe skus update sku_HROAoDnqikdMtt -d "inventory[type]=finite" -d "inventory[quantity]=500"

  if (result.errors) {
    throw result.errors;
  }

  result.data.allStripeSku.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    });
  });
};
