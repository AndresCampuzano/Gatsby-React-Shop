import React from 'react';
import { StyledJumbo } from '../styles/components';
import Image from './image.js';

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Get the best exclusive and special swap from us!</h2>
        <small>{description}</small>
      </div>
      <Image />
    </StyledJumbo>
  );
}
