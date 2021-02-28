import { MenuButton as XMenuButton } from '@chakra-ui/react';
import React from 'react';

const MenuButton = (props) => (
  <XMenuButton mr={6} fontSize="sm" {...props} />
)
MenuButton.displayName = 'MenuButton';

export default MenuButton;