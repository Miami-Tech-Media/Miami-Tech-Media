import { defineConfig } from 'astro/config';

// Miami Tech Media — static output by default, no integrations added.
// Per approved architecture: lean by default, no React/Vue/Tailwind/CMS
// or other dependencies unless explicitly approved.
export default defineConfig({
  output: 'static',
  // Per Decision 009 (approved Company Decisions), MiamiTech.media is the
  // primary domain. Used here only to enable canonical URL support.
  site: 'https://miamitech.media',
});
