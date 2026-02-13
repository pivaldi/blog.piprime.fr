/* global hexo */
"use strict";

const { readFileSync, readdirSync } = require("fs");
const { join } = require("path");

const LATO_CSS = [
  // 'latin-300.css', 'latin-300-italic.css',
  // 'latin-400.css', 'latin-400-italic.css',
  // 'latin-700.css', 'latin-700-italic.css',
  // 'latin-ext-300.css', 'latin-ext-300-italic.css',
  // 'latin-ext-400.css', 'latin-ext-400-italic.css',
  // 'latin-ext-700.css', 'latin-ext-700-italic.css',
];

const INCONSOLATA_CSS = [
  // 'latin-300.css', 'latin-400.css', 'latin-700.css',
  // 'latin-ext-300.css', 'latin-ext-400.css', 'latin-ext-700.css',
];

function readFontsourcePackage(nodeModules, pkg, cssFiles, fontPattern) {
  const base = join(nodeModules, pkg);
  const generator = [];

  // Copy selected CSS files
  for (const file of cssFiles) {
    const src = join(base, file);
    try {
      generator.push({
        path: `lib/${pkg}/${file}`,
        data: readFileSync(src),
      });
    } catch (err) {
      hexo.log.warn(`[copy-fonts] Missing: ${src}`);
    }
  }

  // Copy matching font files from files/
  const filesDir = join(base, "files");
  try {
    for (const file of readdirSync(filesDir)) {
      if (fontPattern.test(file)) {
        generator.push({
          path: `lib/${pkg}/files/${file}`,
          data: readFileSync(join(filesDir, file)),
        });
      }
    }
  } catch (err) {
    hexo.log.warn(`[copy-fonts] Cannot read files dir: ${filesDir}`);
  }

  return generator;
}

// Serve font files
hexo.extend.generator.register("fonts", function () {
  const nodeModules = join(hexo.base_dir, "node_modules");
  let generator = [];

  // Lato: 300, 400, 700 — normal + italic — latin + latin-ext
  generator = generator.concat(
    readFontsourcePackage(
      nodeModules,
      "@fontsource/lato",
      LATO_CSS,
      /^lato-latin(-ext)?-(300|400|700)-(normal|italic)\.woff2?$/,
    ),
  );

  // Inconsolata: 300, 400, 700 — normal only (no italic variant) — latin + latin-ext
  generator = generator.concat(
    readFontsourcePackage(
      nodeModules,
      "@fontsource/inconsolata",
      INCONSOLATA_CSS,
      /^inconsolata-latin(-ext)?-(300|400|700)-normal\.woff2?$/,
    ),
  );

  hexo.log.info("[copy-fonts] Lato and Inconsolata fonts registered");
  return generator;
});

// Inject <link> tags into <head> — @import is invalid mid-stylesheet
hexo.extend.injector.register("head_begin", function () {
  const links = [
    ...LATO_CSS.map((f) => `/lib/@fontsource/lato/${f}`),
    ...INCONSOLATA_CSS.map((f) => `/lib/@fontsource/inconsolata/${f}`),
  ];
  return links.map((href) => `<link rel="stylesheet" href="${href}">`).join("\n");
});
