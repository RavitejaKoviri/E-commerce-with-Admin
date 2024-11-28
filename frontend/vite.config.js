import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://e-commerce-with-admin-obhe-qcao8akjy.vercel.app/?vercelToolbarCode=FzC_Ilt3jGDnRr4",
      "/uploads/": "https://e-commerce-with-admin-obhe-qcao8akjy.vercel.app/?vercelToolbarCode=FzC_Ilt3jGDnRr4",
    },
  },
});
