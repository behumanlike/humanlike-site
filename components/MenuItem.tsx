import React from 'react';
import { MenuItem as XMenuItem } from '@chakra-ui/react';

const MenuItem = (props) => {
  return <XMenuItem
    fontSize="sm"
    textColor="gray.600"
    _hover={{ bgColor: "gray.50" }}
    {...props}
  />
}

MenuItem.displayName = 'MenuItem';
export default MenuItem;