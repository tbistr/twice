import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				popup: resolve(__dirname, "popup.html"),
				background: resolve(__dirname, "src/background.ts"),
				content: resolve(__dirname, "src/content.ts"),
			},
			output: {
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
				assetFileNames: "[name].[ext]",
			},
		},
	},
});
