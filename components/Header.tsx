import { Box, Container, Flex, Heading } from "@chakra-ui/react"
import React from 'react';
import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

/**
 * Primary UI component for user interaction
 */
const Header = React.forwardRef(() => {

  return (
    <Container as="header" maxW="container.xl" py={5}>
      <Flex>
        <Box py={2} mr={6}>
          <Logo />
        </Box>
        <Box py={2} mr={5} flex="1">
          <Nav />
        </Box>
        <Box>
          <Button>Let's talk</Button>
        </Box>
      </Flex>
    </Container>
  );
});

Header.displayName = 'Header';

export default Header;