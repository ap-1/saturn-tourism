import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: "fontshare",
			fonts: {
				sans: "Satoshi",
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
