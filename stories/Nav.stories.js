import React from 'react';
import { Nav } from '../components';

export default {
  title: 'Example/Nav',
  component: Nav,
};

const data = [
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

export const Default = (args) => <Nav data={data} />;
