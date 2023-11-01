import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths'

export default defineConfig ({

	plugins: [react(),jsconfigPaths()],
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	}
});