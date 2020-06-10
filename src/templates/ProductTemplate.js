import React from 'react';
import { ProductDetail } from '../components';

export default function ProductTemplate({ pageContext }) {
  console.log('from ProductTemplate: ', pageContext);
  return <ProductDetail {...pageContext} />;
}
