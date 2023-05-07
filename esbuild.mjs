import { build } from "esbuild";
import { glob } from 'zx';

await build({
    entryPoints: await glob('src/**/*.js'),
    // bundle: true,
    outdir: 'build',
})
