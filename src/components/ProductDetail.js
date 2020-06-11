import React, { useState, useContext } from 'react';
import priceFormat from '../utils/priceFormat';
import { CartContext } from '../context';
import {
  Tag,
  SizeButton,
  // QtyButton,
  SizeSelect,
  Button,
  QtySelect,
  StyledProductDetail,
} from '../styles/components';
import { SEO, Stars } from './';

export default function ProductDetail({ id, price, product, inventory }) {
  const formatePrice = priceFormat(price);
  const [size, setSize] = useState(2);
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);
  // console.log(product.metadata.wear);

  const handleSubmit = () => {
    addToCart({ price, id, product, inventory, qty });
  };
  return (
    <StyledProductDetail>
      <SEO title={product.name} />
      <img src={product.images} alt={product.name} />
      <div>
        <Tag>Top products</Tag>
        <h2>{product.name}</h2>
        <b>USD {formatePrice}</b>
        <Stars />
        <small>{product.description}</small>
        {product.metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Quantity: </p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Add to cart</Button>
      </div>
    </StyledProductDetail>
  );
}
