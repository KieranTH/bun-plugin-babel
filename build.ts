import dts from 'bun-plugin-dts';

const packageJson = Bun.file('./package.json')
const json: Record<string, string> = await packageJson.json() as Record<string, string>

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  plugins: [dts()],
  external: Object.keys(json.dependencies ?? {}),
  target: "node"
});
