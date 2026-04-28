/**
 * Script d'optimisation d'images pour ASGARD Group
 *
 * Pour chaque image listée dans IMAGES :
 * 1. Redimensionne à 1920px de large max (suffisant pour desktop)
 * 2. Génère 3 versions : AVIF, WebP, JPEG (Next.js servira la meilleure)
 * 3. Compression qualité 80 (équilibre poids/qualité)
 *
 * Lancement :  node optimize-images.mjs
 */

import sharp from "sharp";
import { readFileSync, statSync } from "fs";
import path from "path";

// ─── Configuration ───────────────────────────────────────────────────────
const INPUT_DIR = "public/images";
const IMAGES = [
  "hero-asgard.jpg",
  "hero-asgard-2.jpg",
  "hero-asgard-3.jpeg",
];

const MAX_WIDTH = 1920;        // largeur max (suffit pour desktop full HD)
const QUALITY = 80;            // qualité de compression (80 = sweet spot)

// ─── Helpers ─────────────────────────────────────────────────────────────
const formatSize = (bytes) => {
  if (bytes > 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  return `${(bytes / 1024).toFixed(1)} KB`;
};

const getSize = (filePath) => {
  try {
    return statSync(filePath).size;
  } catch {
    return 0;
  }
};

// ─── Traitement ──────────────────────────────────────────────────────────
console.log("🖼  Optimisation des images en cours...\n");

let totalBefore = 0;
let totalAfter = 0;

for (const filename of IMAGES) {
  const inputPath = path.join(INPUT_DIR, filename);
  const baseName = filename.replace(/\.(jpg|jpeg|png)$/i, "");

  // Vérifier que le fichier existe
  let inputBuffer;
  try {
    inputBuffer = readFileSync(inputPath);
  } catch {
    console.log(`⚠️  Fichier introuvable : ${inputPath} — ignoré\n`);
    continue;
  }

  const sizeBefore = getSize(inputPath);
  totalBefore += sizeBefore;

  console.log(`📂 ${filename} (${formatSize(sizeBefore)})`);

  // Pipeline Sharp commun : redimensionnement
  const pipeline = sharp(inputBuffer).resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,  // ne grossit pas si déjà plus petit
  });

  // ── Génération AVIF (le plus léger) ──
  const avifPath = path.join(INPUT_DIR, `${baseName}.avif`);
  await pipeline.clone().avif({ quality: QUALITY, effort: 6 }).toFile(avifPath);
  const avifSize = getSize(avifPath);
  console.log(`   ✓ ${baseName}.avif    ${formatSize(avifSize).padStart(10)}`);

  // ── Génération WebP ──
  const webpPath = path.join(INPUT_DIR, `${baseName}.webp`);
  await pipeline.clone().webp({ quality: QUALITY, effort: 6 }).toFile(webpPath);
  const webpSize = getSize(webpPath);
  console.log(`   ✓ ${baseName}.webp    ${formatSize(webpSize).padStart(10)}`);

  // ── Régénération JPEG optimisé (fallback) ──
  // On écrase le fichier original avec une version compressée et redimensionnée
  const jpegPath = path.join(INPUT_DIR, `${baseName}.jpg`);
  await pipeline
    .clone()
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toFile(jpegPath + ".tmp");

  // Remplacer l'original par la version optimisée
  const { renameSync, unlinkSync } = await import("fs");
  if (filename !== `${baseName}.jpg`) {
    // Le fichier source était .jpeg : on supprime l'original et garde le .jpg optimisé
    unlinkSync(inputPath);
  }
  renameSync(jpegPath + ".tmp", jpegPath);
  const jpegSize = getSize(jpegPath);
  console.log(`   ✓ ${baseName}.jpg     ${formatSize(jpegSize).padStart(10)}`);

  totalAfter += avifSize + webpSize + jpegSize;
  console.log("");
}

// ─── Résumé ──────────────────────────────────────────────────────────────
console.log("─".repeat(50));
console.log(`📊 Total avant  : ${formatSize(totalBefore)}`);
console.log(`📊 Total après  : ${formatSize(totalAfter)} (3 formats × ${IMAGES.length} images)`);
console.log(`📉 Économie     : ${formatSize(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
console.log("\n✅ Terminé ! Les fichiers .avif, .webp et .jpg sont dans public/images/");
console.log("   Le composant Next.js <Image /> servira automatiquement le meilleur format.\n");
