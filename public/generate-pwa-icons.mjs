/**
 * Génération des icônes PWA pour ASGARD Group
 *
 * Prend le logo carré et génère les 4 fichiers nécessaires :
 *  - icon-192.png            (Android)
 *  - icon-512.png            (Android haute densité, magasins)
 *  - icon-maskable-512.png   (Android avec masque rond/goutte, logo dans 80% centrés)
 *  - apple-touch-icon.png    (iPhone, 180x180)
 *
 * ⚠️ Avant de lancer, vérifiez que LOGO_PATH pointe vers votre logo.
 *    Le logo doit être carré et idéalement >= 512x512 pixels.
 *
 * Lancement :  node generate-pwa-icons.mjs
 */

import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";
import path from "path";

// ─── CONFIGURATION ───────────────────────────────────────────────────────
// Chemin de votre logo (à adapter selon votre projet)
const LOGO_PATH = "public/images/logo-fond.png";

// Dossier de sortie
const OUTPUT_DIR = "public/icons";

// Couleur de fond pour la version "maskable" (votre bleu marine ASGARD)
const MASKABLE_BG = "#0D2F54";

// ─── Vérifications ──────────────────────────────────────────────────────
if (!existsSync(LOGO_PATH)) {
  console.error(`❌ Logo introuvable : ${LOGO_PATH}`);
  console.error(`   Modifiez la variable LOGO_PATH en haut du script.\n`);
  process.exit(1);
}

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`📁 Dossier créé : ${OUTPUT_DIR}\n`);
}

// ─── Génération ──────────────────────────────────────────────────────────
console.log("🎨 Génération des icônes PWA...\n");

const logo = sharp(LOGO_PATH);
const meta = await logo.metadata();
console.log(`📂 Logo source : ${LOGO_PATH} (${meta.width}×${meta.height})\n`);

if (meta.width < 512 || meta.height < 512) {
  console.warn(
    `⚠️  Attention : votre logo fait ${meta.width}×${meta.height}px. Idéalement, il devrait faire 512×512 minimum pour des icônes nettes.\n`
  );
}

// 1. icon-192.png — pour Android et navigation web
await sharp(LOGO_PATH)
  .resize(192, 192, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(path.join(OUTPUT_DIR, "icon-192.png"));
console.log("   ✓ icon-192.png");

// 2. icon-512.png — Android haute densité
await sharp(LOGO_PATH)
  .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(path.join(OUTPUT_DIR, "icon-512.png"));
console.log("   ✓ icon-512.png");

// 3. apple-touch-icon.png — iPhone (180x180, fond blanc obligatoire)
await sharp(LOGO_PATH)
  .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .flatten({ background: "#ffffff" })
  .png()
  .toFile(path.join(OUTPUT_DIR, "apple-touch-icon.png"));
console.log("   ✓ apple-touch-icon.png");

// 4. icon-maskable-512.png — version "safe area"
//    Le logo est mis dans 80% centrés, le reste est rempli avec le bleu ASGARD
//    Ainsi le logo reste visible même quand Android applique un masque rond
const safeSize = Math.round(512 * 0.7); // 70% pour zone très safe
await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: MASKABLE_BG,
  },
})
  .composite([
    {
      input: await sharp(LOGO_PATH)
        .resize(safeSize, safeSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer(),
      gravity: "center",
    },
  ])
  .png()
  .toFile(path.join(OUTPUT_DIR, "icon-maskable-512.png"));
console.log("   ✓ icon-maskable-512.png");

// ─── Résumé ──────────────────────────────────────────────────────────────
console.log(`\n✅ Terminé ! 4 icônes générées dans ${OUTPUT_DIR}/`);
console.log("\n📋 Étapes suivantes :");
console.log("   1. Vérifiez visuellement les fichiers dans public/icons/");
console.log("   2. Ajoutez le manifest.json (étape 3)");
console.log("   3. Configurez les meta tags dans le layout (étape 4)\n");
