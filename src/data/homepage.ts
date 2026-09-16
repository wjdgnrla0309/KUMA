/**
 * Homepage quick-edit settings.
 *
 * Use this file for the content that is most often refreshed between seasons:
 * the hero, About image/title, and the recruitment card. List-style content
 * remains in its dedicated data file (news.ts, specs.ts, gallery.ts, etc.).
 */
export const HOMEPAGE_CONTENT = {
  hero: {
    programLabel: "KUMA 2027 DEVELOPMENT PROGRAM",
    titleLineOne: "PRECISION ENGINEERING",
    titleLineTwo: "UNCOMPROMISING SPEED",
    image: "cars/KUMA_testdriveing_filmcam.jpg",
    vehicleLabel: "NEXT VEHICLE / 2027",
  },
  about: {
    image: "cars/2026/competition/001 (7).jpg",
    imageAlt: "KUMA formula race car in competition",
    label: "About KUMA",
    title: "Engineering With Combustion",
  },
  recruitment: {
    programLabel: "2027 DEVELOPMENT PROGRAM",
    title: "KNU-F27 / NEXT VEHICLE",
    qrImage: "recruitment-qr.png.png",
    highlights: [
      ["TARGET WEIGHT", "TBA"],
      ["POWERTRAIN", "TBA"],
      ["AERO PACKAGE", "IN DEVELOPMENT"],
      ["SEASON", "2027"],
    ],
  },
} as const;

/** A single lookup map for the remaining homepage content. */
export const HOMEPAGE_CONTENT_FILES = [
  { area: "Navigation & launch date", file: "src/data/site.ts" },
  { area: "Hero, About & recruitment", file: "src/data/homepage.ts" },
  { area: "Vehicle specifications", file: "src/data/specs.ts" },
  { area: "Awards & records", file: "src/data/achievements.ts" },
  { area: "News", file: "src/data/news.ts" },
  { area: "Gallery", file: "src/data/gallery.ts" },
  { area: "Sponsors", file: "src/data/sponsors.ts" },
  { area: "Contact details", file: "src/data/contact.ts" },
] as const;
