import React from 'react';
import { graphql } from 'gatsby';
import { Jumbo, SEO, Products } from '../components';

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
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
        }
      }
    }
  }
`;

// Rendering each product in Home:
// index > Products

// Rendering each product in it's dynamic page:
// gatsby-node.js > ProductTemplate > ProductDetail

const IndexPage = ({ data }) => {
  console.log('from Index: ', data);
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripeSku.edges} />
    </>
  );
};

export default IndexPage;
