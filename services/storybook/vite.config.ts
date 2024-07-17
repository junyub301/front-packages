/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ["./stories/**/*.test.ts?(x)"],
    environment: "happy-dom",
  },
});
