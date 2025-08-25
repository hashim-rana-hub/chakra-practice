import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      tablet: "992px",
      desktop: "1200px",
      wide: "1400px",
    },
    tokens: {
      colors: {
        brand: {
          500: { value: "tomato" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
