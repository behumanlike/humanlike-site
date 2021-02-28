import React from 'react';

import { Button } from '../components';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = (args) => <Button>Let's talk</Button>;

export const Example = (args) => <Button>Set up a call with Moiz</Button>;