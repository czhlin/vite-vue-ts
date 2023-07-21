import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import BUILD_MAP from './build';
export default defineConfig(({ command, mode }) => BUILD_MAP[command](loadEnv(mode, process.cwd(), '')));
