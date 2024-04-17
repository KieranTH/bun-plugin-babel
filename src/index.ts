
import { plugin } from 'bun';
import esbuildbabel from "esbuild-plugin-babel"
const babel = (options?: Record<string, unknown>): import('bun').BunPlugin => {
	return plugin(esbuildbabel(options))
};

export default babel;