import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

const Card = (props) => {
  const property = {
    imageUrl: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Nazirini_Keyword_hero_resized.max-1000x1000.jpg",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
  }
  
  return <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={property.imageUrl} alt={property.imageAlt} />
    <Heading as="h4" size="lg" fontWeight="semibold" isTruncated mt="1" lineHeight="tight">
      {property.title}
    </Heading>
  </Box>
}
Card.displayName = 'Card';

export default Card;