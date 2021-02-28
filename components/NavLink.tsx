import { Link } from '@chakra-ui/react';
import React from 'react';

const MenuLink = (props) => (
  <Link mr={6} fontSize="sm" {...props} />
)
MenuLink.displayName = 'MenuLink';

export default MenuLink;