import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./**/resolvers/test/**/*.test.js"],
  },
});
