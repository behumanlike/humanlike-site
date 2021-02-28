import { Button as XButton } from "@chakra-ui/react"
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Primary UI component for user interaction
 */
const Button = React.forwardRef((props, ref) => {

  return (
    <XButton ref={ref} px={5} {...props} />
  );
});

Button.displayName = 'Button';

export default Button;