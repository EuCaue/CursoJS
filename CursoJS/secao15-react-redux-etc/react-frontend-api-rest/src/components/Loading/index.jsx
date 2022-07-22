// Global Imports 💬
import React from 'react';
import PropTypes from 'prop-types';

// Local Imports 💬
import { Container } from './styled';

// Loading component for checking is the current page is loading, if its true, put a component in the ahead 💬
// If its false, not show anything 💬
// All magic in css 💬
export default function Loading({ isLoading }) {
  if (!isLoading) return;

  return (
    <Container>
      <div />
      <span>Loading</span>
    </Container>
  );
}

// PropTypes config 💬
Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
