export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    host: true, 
    port: process.env.PORT || 3000, 
  },
});
