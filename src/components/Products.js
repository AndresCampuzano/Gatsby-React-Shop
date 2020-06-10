import React from 'react';
import { Link } from 'gatsby';
import formatPrice from '../utils/priceFormat';
import { StyledProducts } from '../styles/components';

export default function Products({ products }) {
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({ node }) => {
          const price = formatPrice(node.price);
          return (
            <article key={node.id}>
              <img src={node.product.images} alt={node.product.name} />
              <p>{node.product.name}</p>
              <small>USD {price}</small>
              <Link to={`/${node.id}`}>
                Buy now{' '}
                <span role="img" arial-label="img">
                  ▶
                </span>
              </Link>
            </article>
          );
        })}
      </section>
    </StyledProducts>
  );
}
