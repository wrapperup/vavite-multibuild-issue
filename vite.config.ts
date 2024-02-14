import { defineConfig } from 'vite';
import { vavite } from 'vavite';

function examplePlugin(): PluginOption[] {
  return [ 
    // ... other plugins
    vavite({
      serverEntry: 'entry-server.ts',
    }),
  ];
}

export default defineConfig({
  buildSteps: [
    {
      name: "client",
      config: {
        build: {
          outDir: "dist/client",
          rollupOptions: {
            input: 'entry-client.ts',
          },
        },
      }
    },
    {
      name: "server",
      config: {
        build: {
          ssr: true,
          outDir: "dist/server",
        },
      },
    },
  ],
  plugins: [
    examplePlugin(),
  ],
});
