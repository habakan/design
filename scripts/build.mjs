// tokens.json から tokens.css と tailwind-preset.js を作る。値は tokens.json にだけ書く
import { readFile, writeFile } from "node:fs/promises";

const t = JSON.parse(await readFile("tokens.json", "utf8"));
const quote = (fonts) => fonts.map((f) => (f.includes(" ") ? `"${f}"` : f));
const vars = (set) => Object.entries(set).map(([k, v]) => `  --${k}: ${v};`).join("\n");
const header = "/* 生成物。tokens.json を直して npm run build する */\n";

await writeFile("tokens.css", `${header}:root {
  color-scheme: light;
  --font-sans: ${quote(t.font.sans).join(", ")};
  --font-mono: ${quote(t.font.mono).join(", ")};
${vars(t.light)}
}

[data-scheme="dark"] {
  color-scheme: dark;
${vars(t.dark)}
}
`);

// 色は CSS 変数を経由させ、明暗の切り替えを tokens.css 側に任せる
const preset = {
  theme: {
    extend: {
      colors: Object.fromEntries(Object.keys(t.light).map((k) => [k, `var(--${k})`])),
      fontFamily: { sans: quote(t.font.sans), mono: quote(t.font.mono) },
    },
  },
};
await writeFile("tailwind-preset.js", `${header}export default ${JSON.stringify(preset, null, 2)};\n`);
