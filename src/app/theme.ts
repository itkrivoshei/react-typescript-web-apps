import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    body: {
      bg: '#111827',
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
