import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'

export default defineConfig({
  integrations: [
    starlight({
	    plugins: [starlightThemeGalaxy()],
      title: 'My Awesome Docs',

      sidebar: [
        // A link to your homepage
        {
          label: 'Home',
          link: '/', 
        },
        {
          label: 'Home Lab',
          // Automatically generates links from the 'HomeLab' folder
          autogenerate: { directory: 'HomeLab' }, 
        },
        {
          label: 'Helm Charts',
          // Automatically generates links from the 'project-b' folder
          autogenerate: { directory: 'Helm-Charts' },
        },
		{
          label: 'ESPHome',
          // Automatically generates links from the 'project-b' folder
          autogenerate: { directory: 'esphome' },
        },
      ],
    }),
  ],
});