import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  target: 'esnext',
  format: 'esm',
  sourcemap: true,
  minify: false
})
