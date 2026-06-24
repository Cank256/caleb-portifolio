import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import "nitro/vite"; // activates the `nitro` key on Vite's UserConfig type

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  // Tells the Nitro vite plugin which deployment target to build for.
  // When VERCEL=1 (set automatically by Vercel CI), use the vercel preset;
  // otherwise fall back to the plain node server for local dev/preview.
  nitro: {
    preset: process.env.VERCEL ? "vercel" : "node",
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
  ],
});
