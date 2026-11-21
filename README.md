# habakan design

habakan.com と関連プロジェクトで共有するデザインシステム。方針は [DESIGN.md](DESIGN.md)、値は [tokens.json](tokens.json)。

## 使い方

```sh
npm install github:habakan/design#v0.1.0
```

| 用途 | 読み込むもの |
| :-- | :-- |
| CSS 変数 (`--ground` など) | `habakan-design/tokens.css`。暗色は `<html data-scheme="dark">` |
| Tailwind | `presets: [preset]` に `habakan-design/tailwind-preset.js` |
| 値そのもの (OG 画像など) | `habakan-design/tokens.json` |

書体は各ページで読み込む。URL は `tokens.json` の `googleFonts`。

## 値を変えるとき

`tokens.json` を直して `npm run build` で `tokens.css` を作り直し、両方をコミットしてタグを打つ。
方針が変わるなら `DESIGN.md` の決定ログにも書く。

## ライセンス

MIT。書体 (BIZ UDPGothic、IBM Plex Mono) は含まず、それぞれ SIL Open Font License で Google Fonts から読む。
