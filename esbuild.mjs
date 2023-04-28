import { build } from "esbuild";
import { glob } from 'zx';

await build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: false,
    sourcemap: true,
    outdir: 'build',
})
await build({
    entryPoints: await glob('src/jsxfactory/*.js'),
    format: 'esm',
    outdir: 'build/jsxfactory',
})