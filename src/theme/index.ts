import {
   extendTheme,
   theme as base,
   withDefaultColorScheme,
   withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
   variants: {
      filled: {
         field: {
            _focus: {
               borderColor: "brand.500",
            },
         },
      },
   },
   sizes: {
      md: {
         field: {
            borderRadius: "none",
         },
      },
   },
};

const brandRing = {
   _focus: {
      ring: 2,
      ringColor: "brand.500",
   },
};

// To override the default theme served by chakra ui,
// you can even have your custom properties like 'brand' in the below.
const theme = extendTheme(
   {
      colors: {
         brand: {
            50: "#f5fee5",
            100: "#e1fbb2",
            200: "#cdf781",
            300: "#b8ee56",
            400: "#a2e032",
            500: "#8ac919",
            600: "#71ab09",
            700: "#578602",
            800: "#3c5e00",
            900: "#203300",
         },
      },
      // Modify the default style configuration.
      fonts: {
         heading: `Montserrat, ${base.fonts?.heading}`,
         body: `Inter, ${base.fonts?.body}`,
      },
      components: {
         Button: {
            variants: {
               primary: (props: any) => ({
                  rounded: "none",
                  ...brandRing,
                  // To define the color based on the active color mode ( light / dark ).
                  color: mode("white", "gray.800")(props),
                  backgroundColor: mode("brand.500", "brand.200")(props),

                  _hover: {
                     backgroundColor: mode("brand.600", "brand.300")(props),
                  },

                  _active: {
                     backgroundColor: mode("brand.700", "brand.400")(props),
                  }
               }),
            },
         },
         Input: { ...inputSelectStyles },
         Select: { ...inputSelectStyles },
         Checkbox: {
            baseStyle: {
               control: {
                  borderRadius: "none",
                  ...brandRing,
               },
            },
         },
      },
   },
   // Override the default value of color scheme or variant of
   // the components provided inside the array.
   withDefaultColorScheme({
      colorScheme: "brand",
      components: ["Checkbox"],
   }),
   withDefaultVariant({
      variant: "filled",
      components: ["Input", "Select"],
   })
);

export default theme;
