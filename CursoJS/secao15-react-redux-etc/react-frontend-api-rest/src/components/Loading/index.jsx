/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

// Loading component for checking is the current page is loading, if its true, put a component in the ahead 💬
// Of the actual component, in 2000ms, the loading finishes, and show the "real" component 💬
// If its false, just return, and not show anything 💬
export default function Loading({ isLoading }) {
  if (!isLoading) return;

  return (
    <Container>
      <div />
      <span>Carregando</span>
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
