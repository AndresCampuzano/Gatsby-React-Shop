import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Button, StyledCart } from '../styles/components';
import priceFormat from '../utils/priceFormat';
import { CartContext } from '../context';

export default function Cart() {
  const { cart } = useContext(CartContext);
  console.log('from cart: ', cart);
  return (
    <StyledCart>
      <h2>Your cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantify</th>
            <th>Total</th>
          </tr>
          {cart.map(x => (
            <tr key={x.id}>
              <td>
                <img src={x.product.images} alt={x.product.name} />{' '}
                {x.product.name}
              </td>
              <td>USD {priceFormat(x.price)}</td>
              <td>{x.qty}</td>
              <td>{priceFormat(x.qty * x.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>Total</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
          <Button>Buy</Button>
        </div>
      </nav>
    </StyledCart>
  );
}
