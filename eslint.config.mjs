import {defineConfig} from "eslint/config";
import {FlatCompat} from "@eslint/eslintrc";
import js from "@eslint/js";

import path from "node:path";
import {fileURLToPath} from "node:url";
import globals from "globals";
import babelParser from "@babel/eslint-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("airbnb-base"),
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.builtin,
            Routing: true,
        },
        parser: babelParser,
        parserOptions: {
            requireConfigFile: false,
            // ecmaVersion: 'latest',
            // sourceType: "module",
            babelOptions: {
                babelrc: false,
                configFile: false,
                // your babel options
                presets: ["@babel/preset-env"],
            },
        },
    },
}]);
