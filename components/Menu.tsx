import { Box, Menu as XMenu } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from 'react';

function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

const Menu = ({ wrapperProps, ...props}) => {
  const [hoverRef, isHovered] = useHover();

  return <Box display="inline-flex" ref={hoverRef} {...wrapperProps}>
    <XMenu isOpen={isHovered} {...props} />
  </Box>
}
Menu.displayName = 'Menu';

export default Menu;