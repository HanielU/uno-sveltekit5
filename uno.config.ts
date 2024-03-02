import extractorSvelte from "@unocss/extractor-svelte";
import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import { myPreset } from "./my-preset";
import { fontFamily } from "@unocss/preset-mini/theme";

// https://unocss.dev
export default defineConfig({
	configDeps: ["./my-preset.ts"],
	extractors: [extractorSvelte()],
	theme: {
		fontFamily: {
			inter: ['"Inter"', fontFamily.sans],
			match: ['"Match"', fontFamily.sans],
		},
	},
	rules: [],
	shortcuts: [],
	variants: [],

	preflights: [
		{
			getCSS: () => `
      body {
        overflow-x: hidden;
      }
      `,
		},
	],

	presets: [
		myPreset,
		presetUno(),
		presetIcons({ scale: 1 }),
		presetWebFonts({
			fonts: { inter: "Inter:500;" },
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
