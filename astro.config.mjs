import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    "/counterspell": "https://counterspell.hackclub.com/tampa",
    "/scrapyard": "https://scrapyard.hackclub.com/tampa",
  },
});
