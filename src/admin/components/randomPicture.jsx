import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@adminjs/design-system';

const RandomPicture = (props) => {
  // Picsum generates a random 200x200 photo
  const url = 'https://picsum.photos/200';

  return <img alt="Avatar Image" src={url} />;
};

RandomPicture.propTypes = {
  // Define your prop types here
  // For example, if props should have a property 'record' which is an object:
  record: PropTypes.object,
  // If you have more props, define them similarly
};

export default RandomPicture;
