import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If this is a project page (e.g. username.github.io/repo),
// set base to "/repo/".
// For a user page or custom domain (dreamknowself.com), "/" is correct.
export default defineConfig({
  plugins: [react()],
  base: "/",
});

