import { readdir } from "node:fs/promises";
import path from "node:path";

import type { GalleryItem } from "@/lib/site-data";

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);
const publicRoot = path.join(process.cwd(), "public");
const btanishRoot = path.join(publicRoot, "Btanish");

const categoryLabels: Record<string, string> = {
  Btanish: "Brand",
  "Brand Partners": "Brand Partners",
  Hairstyle: "Hairstyle",
  Interior: "Interior",
  Manicure: "Manicure",
  Transform: "Transformation",
};

const categoryDescriptions: Record<string, string> = {
  Brand: "Brand imagery from the B Tanish media library.",
  "Brand Partners": "Product and partner visuals used across the salon brand.",
  Hairstyle: "Real hairstyle work captured from the salon floor.",
  Interior: "Salon interiors and treatment spaces from B Tanish.",
  Manicure: "Nail and manicure work from the B Tanish image library.",
  Transformation: "Before-and-after transformation imagery from B Tanish.",
};

function toPublicPath(filePath: string) {
  return `/${path.relative(publicRoot, filePath).split(path.sep).join("/")}`;
}

function toTitleCase(value: string) {
  return value.replace(/[-_]+/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());
}

function compareNaturally(left: string, right: string) {
  return left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" });
}

function getCategoryLabel(segments: string[]) {
  const topLevel = segments[0] === "Btanish" ? segments[1] ?? "Btanish" : segments[0] ?? "Btanish";
  return categoryLabels[topLevel] ?? toTitleCase(topLevel);
}

function getGalleryTitle(segments: string[], fileName: string) {
  const topLevel = segments[0] === "Btanish" ? segments[1] ?? "Btanish" : segments[0] ?? "Btanish";
  const fileStem = path.parse(fileName).name;

  if (topLevel === "Transform") {
    const setLabel = segments[2] ? `Set ${segments[2]}` : "Set";
    const frameLabel = fileStem === "before" || fileStem === "after" ? toTitleCase(fileStem) : toTitleCase(fileStem);

    return `Transformation ${setLabel} ${frameLabel}`;
  }

  if (segments.length > 1) {
    return `${toTitleCase(segments[segments.length - 1])} ${toTitleCase(fileStem)}`;
  }

  if (fileStem === "btanish") {
    return "B Tanish Logo";
  }

  if (fileStem === "logo") {
    return "B Tanish Wordmark";
  }

  if (fileStem === "hero2") {
    return "B Tanish Hero Portrait";
  }

  return `${getCategoryLabel(segments)} ${toTitleCase(fileStem)}`.trim();
}

function getGalleryDescription(category: string, title: string) {
  const categoryDescription = categoryDescriptions[category];

  if (categoryDescription) {
    return categoryDescription;
  }

  return `${title} from the B Tanish local media library.`;
}

async function walkDirectory(currentDir: string, segments: string[]): Promise<GalleryItem[]> {
  const entries = await readdir(currentDir, { withFileTypes: true });
  const items: GalleryItem[] = [];

  for (const entry of entries.sort((left, right) => compareNaturally(left.name, right.name))) {
    const entryPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      items.push(...(await walkDirectory(entryPath, [...segments, entry.name])));
      continue;
    }

    if (!imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }

    const category = getCategoryLabel(segments);
    const title = getGalleryTitle(segments, entry.name);

    items.push({
      title,
      category,
      image: toPublicPath(entryPath),
      alt: `${title} from B Tanish Salon`,
      description: getGalleryDescription(category, title),
    });
  }

  return items;
}

export async function getBtanishGalleryItems() {
  return walkDirectory(btanishRoot, ["Btanish"]);
}
