import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const commonConfig = {
    plugins: [],
    //root: '.',
    build: {
      minify: false,
      outDir: "build",
      commonjsOptions: {
      }
    },
    define: {
      // fix for hydra-synth
      global: "window"
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      hmr: {
        clientPort: 443 // Run the websocket server on the SSL port
      }
    }
  };
  if (command === 'serve') {
    return {
      ...commonConfig,

    }
  } else {
    // command === 'build'
    return {
      base: "/utc-olp-hydra-toy-cam/",
      resolve: {
        alias: [

        ]
      },
      ...commonConfig
    }
  }
})
