import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      // VERCEL=1 is set automatically in all Vercel CI builds.
      // Locally this falls back to the plain node server.
      preset: process.env.VERCEL ? "vercel" : "node",
    }),
    react(),
  ],
});
