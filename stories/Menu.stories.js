import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '../components';

export default {
  title: 'Example/Menu',
  component: Menu,
};

export const Default = (args) => <Menu>
  <MenuButton>About</MenuButton>
  <MenuList>
    <MenuItem href="#">Our Team</MenuItem>
    <MenuItem href="#">Our Process</MenuItem>
    <MenuItem href="#">Strategy Day</MenuItem>
    <MenuItem href="#">Success Stories</MenuItem>
    <MenuItem href="#">Jobs</MenuItem>
  </MenuList>
</Menu>;
