// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    env: {
		schema: {
			PUBLIC_KEY_CONTACT_FORM: envField.string({
				context: "client",
				access: "public",
			}),
		},
	},
});
