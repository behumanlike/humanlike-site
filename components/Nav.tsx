import React from 'react';
import { Box } from '@chakra-ui/react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import NavLink from './NavLink';
import MenuList from './MenuList';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const sampleNav = [
  {
    title: 'About Us',
    href: '#',
    children: [
      { title: 'Our Team', href: '#' },
      { title: 'Our Process', href: '#' },
      { title: 'Strategy Day', href: '#' },
      { title: 'Success Stories', href: '#' },
      { title: 'Jobs', href: '#' },
    ]
  },
  { title: 'Blog', href: '#', isExternal: true },
  { 
    title: 'Resources', 
    href: '#',
    children: [
      { title: 'Best ML Articles', href: '#' },
      { title: 'ML Toolkit', href: '#' },
    ]
  },
  { title: 'Contact', href: '#' },
]

const Nav = ({ data = sampleNav, ...props }) => (
  <Box as="nav" {...props}>
    {
      data.map(({title, href, children, isExternal, ...props}) => {
        if (children) {
          return <Menu wrapperProps={{ as: 'li' }}>
            <MenuButton href={href} {...props}>
              {title} {isExternal ? <ExternalLinkIcon /> : null}
            </MenuButton>
            <MenuList>
            {
              children.map(({href, title, ...props}) => (
                <MenuItem as='a' href={href} {...props}>{title}</MenuItem>
              ))
            }
            </MenuList>
          </Menu>
        }

        return <Box as='li' display="inline-flex">
          <NavLink href={href} {...props}>
            {title} {isExternal ? <ExternalLinkIcon /> : null}
          </NavLink>
        </Box>
      })
    }
  </Box>
)
Nav.displayName = 'Nav';

export default Nav;