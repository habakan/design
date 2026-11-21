/* 生成物。tokens.json を直して npm run build する */
export default {
  "theme": {
    "extend": {
      "colors": {
        "ground": "var(--ground)",
        "surface": "var(--surface)",
        "ink": "var(--ink)",
        "muted": "var(--muted)",
        "rule": "var(--rule)",
        "rule-faint": "var(--rule-faint)",
        "rule-strong": "var(--rule-strong)",
        "paint": "var(--paint)",
        "paint-ink": "var(--paint-ink)"
      },
      "fontFamily": {
        "sans": [
          "\"BIZ UDPGothic\"",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Hiragino Sans\"",
          "sans-serif"
        ],
        "mono": [
          "\"IBM Plex Mono\"",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace"
        ]
      }
    }
  }
};
