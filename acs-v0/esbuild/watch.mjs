import { build } from 'esbuild';

import { NodeModulesPolyfillPlugin as esbuildPluginNodeModulePolyfills } from '@esbuild-plugins/node-modules-polyfill';
import NodeGlobalsPolyfillPluginPkg from '@esbuild-plugins/node-globals-polyfill';
const { NodeGlobalsPolyfillPlugin } = NodeGlobalsPolyfillPluginPkg;
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');

const esbuildOptions = {
    bundle: true,
    entryPoints: [path.resolve(ROOT_DIR, 'src', 'index.ts')],
    outdir: path.resolve(ROOT_DIR, 'dist', 'esbuild'),
    plugins: [
        NodeGlobalsPolyfillPlugin(),
        esbuildPluginNodeModulePolyfills(),
    ],
    watch: true,
}

await build(esbuildOptions);