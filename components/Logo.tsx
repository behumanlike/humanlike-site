import { Img } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import React from 'react';

const Logo = (props) => (
  <a id="logo" href="/" title="Humanlike">
    <Img h={5} src="/brand-dark.png" alt="Humanlike logo" />
  </a>
)
Logo.displayName = 'Logo';

export default Logo;