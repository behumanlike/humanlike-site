import { MenuList as XMenuList } from '@chakra-ui/react';
import React from 'react';

const MenuList = (props) => {
  return <XMenuList minWidth={44} borderRadius="2xl" py={3} {...props} />
}
MenuList.displayName = 'MenuList';

export default MenuList;