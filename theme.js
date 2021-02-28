import { extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    default: '#F6AE2D',
    50: '#FCE1B0',
    100: '#FBD796',
    200: '#FACD7B',
    300: '#F8C361',
    400: '#F7BA47',
    500: '#F6AE2D',
    600: '#F4A20A',
    700: '#D18B09',
    800: '#AE7407',
    900: '#8C5D06',
  },
}

const fonts = {
  body: "'Inter', sans-serif;",
  heading: "Inter, serif",
  mono: "Menlo, monospace",
}

const Button = {
  // The styles all button have in common
  baseStyle: {
    borderRadius: "2xl",
    fontWeight: "medium",
    transition: "none",
    "&:hover": {
      transform: "translateY(-1px)"
    }
  },
  variants: {
    primary: {
      border: "2px solid",
      borderColor: "gray.200",
      color: "gray.600",
      "&:hover": {
        boxShadow: "sm",
      },
      "&:active": {
        borderColor: "brand.500",
        bgColor: "brand.500",
        color: "gray.900",
      },
      "&:focus": {
        boxShadow: "none"
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "primary",
  },
}

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
  },
})

export default theme;