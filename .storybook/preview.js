import React from 'react';
import { addDecorator } from '@storybook/react';

import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];