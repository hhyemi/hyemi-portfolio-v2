// main theme following Theme UI theme specs
// cf: https://theme-ui.com/theming
// cf: https://theme-ui.com/components/variants
// cf: https://theme-ui.com/guides/variants
import { getTransparentColors } from "@utils";
import { Theme as ThemeUITheme } from "theme-ui";

export type ThemeColor = keyof typeof theme.colors;

type TransparentPalette = Record<
"primary-500-8" | "primary-500-16" | "primary-500-24" | "primary-500-32" | "primary-500-40" | "primary-500-48" |
"primary-500-56" | "primary-500-64" | "primary-500-72" | "primary-500-80" | "primary-500-88" | "primary-500-96" |
"grey-50-8" | "grey-50-16" | "grey-50-24" | "grey-50-32" | "grey-50-40" | "grey-50-48" |
"grey-50-56" | "grey-50-64" | "grey-50-72" | "grey-50-80" | "grey-50-88" | "grey-50-96" |
"grey-300-8" | "grey-300-16" | "grey-300-24" | "grey-300-32" | "grey-300-40" | "grey-300-48" |
"grey-300-56" | "grey-300-64" | "grey-300-72" | "grey-300-80" | "grey-300-88" | "grey-300-96" |
"grey-500-8" | "grey-500-16" | "grey-500-24" | "grey-500-32" | "grey-500-40" | "grey-500-48" |
"grey-500-56" | "grey-500-64" | "grey-500-72" | "grey-500-80" | "grey-500-88" | "grey-500-96" |
"yellow-500-8" | "yellow-500-16" | "yellow-500-24" | "yellow-500-32" | "yellow-500-40" | "yellow-500-48" |
"yellow-500-56" | "yellow-500-64" | "yellow-500-72" | "yellow-500-80" | "yellow-500-88" | "yellow-500-96" |
"amber-500-8" | "amber-500-16" | "amber-500-24" | "amber-500-32" | "amber-500-40" | "amber-500-48" |
"amber-500-56" | "amber-500-64" | "amber-500-72" | "amber-500-80" | "amber-500-88" | "amber-500-96" |
"orange-500-8" | "orange-500-16" | "orange-500-24" | "orange-500-32" | "orange-500-40" | "orange-500-48" |
"orange-500-56" | "orange-500-64" | "orange-500-72" | "orange-500-80" | "orange-500-88" | "orange-500-96" |
"deep-orange-500-8" | "deep-orange-500-16" | "deep-orange-500-24" | "deep-orange-500-32" | "deep-orange-500-40" |
"deep-orange-500-48" | "deep-orange-500-56" | "deep-orange-500-64" | "deep-orange-500-72" | "deep-orange-500-80" | "deep-orange-500-88" | "deep-orange-500-96" |
"red-500-8" | "red-500-16" | "red-500-24" | "red-500-32" | "red-500-40" | "red-500-48" |
"red-500-56" | "red-500-64" | "red-500-72" | "red-500-80" | "red-500-88" | "red-500-96" |
"soft-red-500-8" | "soft-red-500-16" | "soft-red-500-24" | "soft-red-500-32" | "soft-red-500-40" | "soft-red-500-48" |
"soft-red-500-56" | "soft-red-500-64" | "soft-red-500-72" | "soft-red-500-80" | "soft-red-500-88" | "soft-red-500-96" |
"pink-500-8" | "pink-500-16" | "pink-500-24" | "pink-500-32" | "pink-500-40" | "pink-500-48" |
"pink-500-56" | "pink-500-64" | "pink-500-72" | "pink-500-80" | "pink-500-88" | "pink-500-96" |
"purple-500-8" | "purple-500-16" | "purple-500-24" | "purple-500-32" | "purple-500-40" | "purple-500-48" |
"purple-500-56" | "purple-500-64" | "purple-500-72" | "purple-500-80" | "purple-500-88" | "purple-500-96" |
"deep-purple-500-8" | "deep-purple-500-16" | "deep-purple-500-24" | "deep-purple-500-32" | "deep-purple-500-40" | "deep-purple-500-48" |
"deep-purple-500-56" | "deep-purple-500-64" | "deep-purple-500-72" | "deep-purple-500-80" | "deep-purple-500-88" | "deep-purple-500-96" |
"violet-500-8" | "violet-500-16" | "violet-500-24" | "violet-500-32" | "violet-500-40" | "violet-500-48" |
"violet-500-56" | "violet-500-64" | "violet-500-72" | "violet-500-80" | "violet-500-88" | "violet-500-96" |
"indigo-500-8" | "indigo-500-16" | "indigo-500-24" | "indigo-500-32" | "indigo-500-40" | "indigo-500-48" |
"indigo-500-56" | "indigo-500-64" | "indigo-500-72" | "indigo-500-80" | "indigo-500-88" | "indigo-500-96" |
"teal-500-8" | "teal-500-16" | "teal-500-24" | "teal-500-32" | "teal-500-40" | "teal-500-48" |
"teal-500-56" | "teal-500-64" | "teal-500-72" | "teal-500-80" | "teal-500-88" | "teal-500-96" |
"green-500-8" | "green-500-16" | "green-500-24" | "green-500-32" | "green-500-40" | "green-500-48" |
"green-500-56" | "green-500-64" | "green-500-72" | "green-500-80" | "green-500-88" | "green-500-96" |
"light-green-500-8" | "light-green-500-16" | "light-green-500-24" | "light-green-500-32" | "light-green-500-40" | "light-green-500-48" |
"light-green-500-56" | "light-green-500-64" | "light-green-500-72" | "light-green-500-80" | "light-green-500-88" | "light-green-500-96" |
"lime-500-8" | "lime-500-16" | "lime-500-24" | "lime-500-32" | "lime-500-40" | "lime-500-48" |
"lime-500-56" | "lime-500-64" | "lime-500-72" | "lime-500-80" | "lime-500-88" | "lime-500-96"
, string>;

export const transparentPalette = {
  ...[
    { name: "primary-500", hex: "#2a44ec" },
    { name: "grey-50", hex: "#f7f9fc" },
    { name: "grey-300", hex: "#c5cee0" },
    { name: "grey-500", hex: "#2e3a59" },
    { name: "yellow-500", hex: "#ffed2b" },
    { name: "amber-500", hex: "#ffc400" },
    { name: "orange-500", hex: "#ff9100" },
    { name: "deep-orange-500", hex: "#ff3d00" },
    { name: "red-500", hex: "#ff1400" },
    { name: "soft-red-500", hex: "#f44336" },
    { name: "pink-500", hex: "#f50057" },
    { name: "purple-500", hex: "#ee3efb" },
    { name: "deep-purple-500", hex: "#6b64ff" },
    { name: "violet-500", hex: "#651fff" },
    { name: "indigo-500", hex: "#3d5afe" },
    { name: "teal-500", hex: "#18e6cb" },
    { name: "green-500", hex: "#00e676" },
    { name: "light-green-500", hex: "#76ff03" },
    { name: "lime-500", hex: "#c6ff00" },
  ].reduce((acc, cur) => ({ ...acc, ...getTransparentColors(cur) }), {} as Record<string, string>),
} as TransparentPalette;

export const palette = {
  "primary-100": "#d4dcfe",
  "primary-200": "#a9b8fd",
  "primary-300": "#7e92f9",
  "primary-400": "#5d73f3",
  "primary-500": "#2a44ec",
  "primary-600": "#1e33ca",
  "primary-700": "#1524a9",
  "primary-800": "#0d1888",
  "primary-900": "#081071",
  "white-500": "#ffffff",
  "grey-50": "#f7f9fc",
  "grey-100": "#edf1f7",
  "grey-200": "#e4e9f2",
  "grey-300": "#c5cee0",
  "grey-400": "#8f9bb3",
  "grey-500": "#2e3a59",
  "grey-600": "#222b45",
  "grey-700": "#192038",
  "grey-800": "#151a30",
  "grey-900": "#101426",
  "yellow-100": "#fffcd4",
  "yellow-200": "#fffaaa",
  "yellow-300": "#fff67f",
  "yellow-400": "#fff260",
  "yellow-500": "#ffed2b",
  "yellow-600": "#feda24",
  "yellow-700": "#fdc11a",
  "yellow-800": "#fca90f",
  "yellow-900": "#fa7e00",
  "amber-100": "#ffedb3",
  "amber-200": "#ffe182",
  "amber-300": "#ffd74f",
  "amber-400": "#ffcc26",
  "amber-500": "#ffc400",
  "amber-600": "#ffb500",
  "amber-700": "#ffa200",
  "amber-800": "#ff9100",
  "amber-900": "#ff7100",
  "orange-100": "#fff1cc",
  "orange-200": "#ffe099",
  "orange-300": "#ffca66",
  "orange-400": "#ffb43f",
  "orange-500": "#ff9100",
  "orange-600": "#db7300",
  "orange-700": "#b75800",
  "orange-800": "#934000",
  "orange-900": "#7a3000",
  "deep-orange-100": "#ffe6cc",
  "deep-orange-200": "#ffc799",
  "deep-orange-300": "#ffa066",
  "deep-orange-400": "#ff7b3f",
  "deep-orange-500": "#ff3d00",
  "deep-orange-600": "#db2400",
  "deep-orange-700": "#b71100",
  "deep-orange-800": "#930300",
  "deep-orange-900": "#7a0005",
  "red-100": "#ffe0cc",
  "red-200": "#ffba99",
  "red-300": "#ff8b66",
  "red-400": "#ff5e3f",
  "red-500": "#ff1400",
  "red-600": "#d12729",
  "red-700": "#b7000f",
  "red-800": "#930018",
  "red-900": "#7a001e",
  "soft-red-100": "#ffcdd2",
  "soft-red-200": "#ef9a9a",
  "soft-red-300": "#e57373",
  "soft-red-400": "#ef5350",
  "soft-red-500": "#f44336",
  "soft-red-600": "#e53935",
  "soft-red-700": "#d32f2f",
  "soft-red-800": "#c62828",
  "soft-red-900": "#b71c1c",
  "pink-100": "#fecdcb",
  "pink-200": "#fe989e",
  "pink-300": "#fc647c",
  "pink-400": "#f93e6e",
  "pink-500": "#f50057",
  "pink-600": "#d2005f",
  "pink-700": "#b00061",
  "pink-800": "#bb004e",
  "pink-900": "#97004a",
  "purple-100": "#fed8f4",
  "purple-200": "#feb1f0",
  "purple-300": "#fd8bf2",
  "purple-400": "#fc6dfa",
  "purple-500": "#ee3efb",
  "purple-600": "#be2dd7",
  "purple-700": "#911fb4",
  "purple-800": "#691391",
  "purple-900": "#4d0b78",
  "deep-purple-100": "#e1e0ff",
  "deep-purple-200": "#c4c1ff",
  "deep-purple-300": "#a7a2ff",
  "deep-purple-400": "#908aff",
  "deep-purple-500": "#6b64ff",
  "deep-purple-600": "#4f49db",
  "deep-purple-700": "#3732b7",
  "deep-purple-800": "#231f93",
  "deep-purple-900": "#15137a",
  "violet-100": "#e5d2ff",
  "violet-200": "#caa5ff",
  "violet-300": "#ab78ff",
  "violet-400": "#9057ff",
  "violet-500": "#651fff",
  "violet-600": "#4d16db",
  "violet-700": "#390fb7",
  "violet-800": "#270993",
  "violet-900": "#1b057a",
  "indigo-100": "#d8e0fe",
  "indigo-200": "#b1c0fe",
  "indigo-300": "#8a9ffe",
  "indigo-400": "#6d85fe",
  "indigo-500": "#3d5afe",
  "indigo-600": "#2c43da",
  "indigo-700": "#1e30b6",
  "indigo-800": "#132093",
  "indigo-900": "#0b1579",
  "teal-100": "#d0fde6",
  "teal-200": "#a2fcd7",
  "teal-300": "#72f7cd",
  "teal-400": "#4ef0cb",
  "teal-500": "#18e6cb",
  "teal-600": "#11c5be",
  "teal-700": "#0c9da5",
  "teal-800": "#077285",
  "teal-900": "#04556e",
  "green-100": "#b9f6ca",
  "green-200": "#97fcad",
  "green-300": "#63f791",
  "green-400": "#3cf086",
  "green-500": "#00e676",
  "green-600": "#00c579",
  "green-700": "#00a576",
  "green-800": "#00856c",
  "green-900": "#006e64",
  "light-green-100": "#eeffcc",
  "light-green-200": "#d8ff9a",
  "light-green-300": "#bdff67",
  "light-green-400": "#a2ff41",
  "light-green-500": "#76ff03",
  "light-green-600": "#59db02",
  "light-green-700": "#40b701",
  "light-green-800": "#2c9300",
  "light-green-900": "#1d7a00",
  "lime-100": "#f8ffcc",
  "lime-200": "#efff99",
  "lime-300": "#e3ff66",
  "lime-400": "#d8ff3f",
  "lime-500": "#c6ff00",
  "lime-600": "#a5db00",
  "lime-700": "#86b700",
  "lime-800": "#689300",
  "lime-900": "#537a00",
  ...transparentPalette,
};

export const breakpoints = [
  // "0rem", //     0 ≥ screen < 600px  | sm | mobile
  "37.5rem", // 600px ≥ screen < 960px  | md | tablet
  "60rem", //   960px ≥ screen < 1440px | lg | wide tablet/small desktop
  "90rem", //  1440px ≥ screen          | xl | wide desktop
];

const getTheme = <T extends ThemeUITheme>(theme: T): T => theme;

export const theme = getTheme({
  breakpoints: breakpoints,
  colors: {
    ...palette,
    "primary": palette["primary-500"],
    "neutral": palette["grey-500"],
    "success": palette["green-700"],
    "warning": palette["amber-700"],
    "error": palette["soft-red-500"],
    "info": palette["primary-500"],
    "text-primary": palette["grey-600"],
    "text-secondary": palette["grey-400"],
    "text-tertiary": palette["grey-300"],
    "background": transparentPalette["grey-50-64"],
    "disabled": palette["grey-100"],
    "alternative": palette["white-500"],
    "bg-hover": palette["grey-100"],
    "bg-pressed": palette["grey-200"],
    "icon": palette["grey-500"],
    "icon-subtle": palette["grey-400"],
    "icon-disabled": palette["grey-100"],
  },
  space: [
    0, // 0
    8, // 1
    16, // 2
    24, // 3
    32, // 4
    40, // 5
    48, // 6
    56, // 7
    64, // 8
    72, // 9
    80, // 10
    88, // 11
    96, // 12
    104, // 13
    112, // 14
    120, // 15
    128, // 16
    136, // 17
    144, // 18
    152, // 19
    160, // 20
    168, // 21
    176, // 22
    184, // 23
    192, // 24
    200, // 25
    208, // 26
    216, // 27
    224, // 28
    232, // 29
    240, // 30
    248, // 31
    256, // 32
  ],
  fontSizes: {
    h1: "2.25rem", // 36px
    h2: "1.875rem", // 30px
    h3: "1.625rem", // 26px
    h4: "1.375rem", // 22px
    h5: "1.25rem", // 20px
    s1: "1.125rem", // 18px
    s2: "1rem", // 16px
    p1: "0.875rem", // 14px
    p2: "0.75rem", // 12px
    l1: "0.75rem", // 12px
  },
  fonts: {
    headline: "Noto Sans KR, sans-serif",
    subtitle: "Noto Sans KR, sans-serif",
    paragraph: "Noto Sans KR, sans-serif",
    label: "Noto Sans KR, sans-serif",
    title: "Montserrat, sans-serif",
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    headline: 1.5,
    subtitle: 1.5,
    paragraph: 1.5,
    label: 1.5,
  },
  letterSpacings: {
    headline: "normal",
    subtitle: "normal",
    paragraph: "normal",
    label: "normal",
  },
  text: {
    h1: {
      fontFamily: "headline",
      fontSize: "h1",
      fontWeight: "medium",
      lineHeight: "headline",
      letterSpacing: "headline",
      color: "text-primary",
    },
    h2: {
      fontFamily: "headline",
      fontSize: "h2",
      fontWeight: "medium",
      lineHeight: "headline",
      letterSpacing: "headline",
      color: "text-primary",
    },
    h3: {
      fontFamily: "headline",
      fontSize: "h3",
      fontWeight: "medium",
      lineHeight: "headline",
      letterSpacing: "headline",
      color: "text-primary",
    },
    h4: {
      fontFamily: "headline",
      fontSize: "h4",
      fontWeight: "medium",
      lineHeight: "headline",
      letterSpacing: "headline",
      color: "text-primary",
    },
    h5: {
      fontFamily: "headline",
      fontSize: "h5",
      fontWeight: "medium",
      lineHeight: "headline",
      letterSpacing: "headline",
      color: "text-primary",
    },
    s1: {
      fontFamily: "subtitle",
      fontSize: "s1",
      fontWeight: "medium",
      lineHeight: "subtitle",
      letterSpacing: "subtitle",
      color: "text-primary",
    },
    s2: {
      fontFamily: "subtitle",
      fontSize: "s2",
      fontWeight: "medium",
      lineHeight: "subtitle",
      letterSpacing: "subtitle",
      color: "text-primary",
    },
    p1: {
      fontFamily: "paragraph",
      fontSize: "p1",
      fontWeight: "regular",
      lineHeight: "paragraph",
      letterSpacing: "paragraph",
      color: "text-primary",
    },
    p2: {
      fontFamily: "paragraph",
      fontSize: "p2",
      fontWeight: "regular",
      lineHeight: "paragraph",
      letterSpacing: "paragraph",
      color: "text-primary",
    },
    l1: {
      fontFamily: "label",
      fontSize: "l1",
      fontWeight: "regular",
      lineHeight: "label",
      letterSpacing: "label",
      fontStyle: "label",
      color: "text-secondary",
    },
  },
  buttons: {
    default: {
      cursor: "pointer",
      fontFamily: "paragraph",
      borderWidth: 1,
      borderStyle: "solid",
    },
    "default-filled": {
      variant: "buttons.default",
      color: "white-500",
      borderColor: "transparent",
    },
    "default-outlined": {
      variant: "buttons.default",
    },
    "default-tonal": {
      variant: "buttons.default",
      borderColor: "transparent",
    },
    "default-ghost": {
      variant: "buttons.default",
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: "text-secondary",
      backgroundImage: "none",
    },
    "white-outlined": {
      variant: "buttons.default-outlined",
      color: "text-primary",
      backgroundColor: "white-500",
      borderColor: "grey-200",
    },
    "primary-filled": {
      variant: "buttons.default-filled",
      backgroundColor: "primary",
      "&:hover": {
        backgroundColor: "primary-600",
      },
      "&:active": {
        backgroundColor: "primary-700",
      },
    },
    "primary-outlined": {
      variant: "buttons.default-outlined",
      color: "primary",
      borderColor: "primary-500",
      backgroundColor: "primary-500-8",
      "&:hover": {
        backgroundColor: "primary-500-16",
      },
      "&:active": {
        backgroundColor: "primary-500-24",
      },
    },
    "primary-tonal": {
      variant: "buttons.default-tonal",
      color: "primary",
      backgroundColor: "primary-500-8",
      "&:hover": {
        backgroundColor: "primary-500-16",
      },
      "&:active": {
        backgroundColor: "primary-500-24",
      },
    },
    "primary-ghost": {
      variant: "buttons.default-ghost",
      color: "primary",
      "&:hover": {
        backgroundColor: "grey-500-8",
      },
      "&:active": {
        backgroundColor: "grey-500-16",
      },
    },
    "grey-filled": {
      variant: "buttons.default-filled",
      backgroundColor: "grey-500",
      "&:hover": {
        backgroundColor: "grey-600",
      },
      "&:active": {
        backgroundColor: "grey-700",
      },
    },
    "grey-outlined": {
      variant: "buttons.default-outlined",
      color: "grey-500",
      borderColor: "grey-500",
      backgroundColor: "grey-500-8",
      "&:hover": {
        backgroundColor: "grey-500-16",
      },
      "&:active": {
        backgroundColor: "grey-500-24",
      },
    },
    "grey-tonal": {
      variant: "buttons.default-tonal",
      color: "grey-500",
      backgroundColor: "grey-500-8",
      "&:hover": {
        backgroundColor: "grey-500-16",
      },
      "&:active": {
        backgroundColor: "grey-500-24",
      },
    },
    "grey-ghost": {
      variant: "buttons.default-ghost",
      color: "grey-500",
      "&:hover": {
        backgroundColor: "grey-500-8",
      },
      "&:active": {
        backgroundColor: "grey-500-16",
      },
    },
    "red-filled": {
      variant: "buttons.default-filled",
      backgroundColor: "red-500",
      "&:hover": {
        backgroundColor: "red-600",
      },
      "&:active": {
        backgroundColor: "red-700",
      },
    },
    "red-filled-shadow": {
      variant: "buttons.red-filled",
      boxShadow: "button",
    },
    "red-outlined": {
      variant: "buttons.default-outlined",
      color: "red-500",
      borderColor: "red-500",
      backgroundColor: "red-500-8",
      "&:hover": {
        backgroundColor: "red-500-16",
      },
      "&:active": {
        backgroundColor: "red-500-24",
      },
    },
    "red-tonal": {
      variant: "buttons.default-tonal",
      color: "red-500",
      backgroundColor: "red-500-8",
      "&:hover": {
        backgroundColor: "red-500-16",
      },
      "&:active": {
        backgroundColor: "red-500-24",
      },
    },
    "red-ghost": {
      variant: "buttons.default-ghost",
      color: "red-500",
      "&:hover": {
        backgroundColor: "grey-500-8",
      },
      "&:active": {
        backgroundColor: "grey-500-16",
      },
    },
    "disabled": {
      variant: "buttons.default",
      color: "text-tertiary",
      borderColor: "disabled",
      backgroundColor: "disabled",
      cursor: "default",
      "&:hover": {
        borderColor: "none",
      },
    },
  },
  forms: {
    input: {
      p: 1,
      fontFamily: "paragraph",
      fontSize: "p1",
      fontWeight: "regular",
      lineHeight: "paragraph",
      letterSpacings: "paragraph",
      color: "text-primary",
      borderColor: "grey-200",
      backgroundColor: "transparent",
      outline: "none",
      ":focus": {
        borderColor: "primary",
      },
    },
    select: {
      p: 1,
      fontFamily: "paragraph",
      fontSize: "p1",
      fontWeight: "regular",
      lineHeight: "paragraph",
      letterSpacings: "paragraph",
      color: "text-primary",
      borderColor: "grey-200",
      backgroundColor: "transparent",
      outline: "none",
      ":focus": {
        borderColor: "primary",
      },
    },
    textarea: {
      p: 1,
      fontFamily: "paragraph",
      fontSize: "p1",
      fontWeight: "regular",
      lineHeight: "paragraph",
      letterSpacings: "paragraph",
      color: "text-primary",
      borderColor: "grey-200",
      backgroundColor: "transparent",
      outline: "none",
      ":focus": {
        borderColor: "primary",
      },
    },
    label: {
      fontFamily: "paragraph",
      fontSize: "p1",
      fontWeight: "regular",
      lineHeight: "paragraph",
      letterSpacings: "paragraph",
      color: "text-secondary",
    },
    radio: {
      p: 1,
      fontFamily: "paragraph",
      fontSize: "p1",
      fontWeight: "regular",
      lineHeight: "paragraph",
      letterSpacings: "paragraph",
      color: "text-primary",
    },
    checkbox: {
      p: 1,
      fontFamily: "label",
      fontSize: "l1",
      fontWeight: "regular",
      lineHeight: "label",
      letterSpacings: "label",
      fontStyle: "label",
      color: "text-primary",
    },
  },
  radii: {
    default: 4,
  },
  variants: {
    card: {
      bg: "white-500",
      border: "card",
      borderRadius: "default",
      boxShadow: "card",
      warning: {
        bg: "warning",
        border: "card",
        borderRadius: "default",
        boxShadow: "card",
      },
      active: {
        bg: "white-500",
        border: "card",
        borderRadius: "default",
        boxShadow: "card",
        cursor: "pointer",
        ":hover": {
          boxShadow: "0 8px 24px 0 #151a301f",
          transform: "translateY(-8px)",
        },
      },
    },
    flexMore: {
      display: "flex",
      bg: "white-500",
      borderBottom: "flexMore",
      justifyContent: "center",
      py: 2,
      "&:hover": {
        cursor: "pointer",
      },
    },
    iconButton: {
      default: {
        ":hover": {
          backgroundColor: "bg-hover",
        },
        ":active": {
          backgroundColor: "bg-pressed",
        },
      },
      disabled: {
        variant: "variants.iconButton.default",
        ":hover": {
          backgroundColor: "none",
        },
        ":active": {
          backgroundColor: "none",
        },
      },
    },
    chip: {
      "default": {
        cursor: "default",
        borderWidth: 1,
        borderStyle: "solid",
        boxSizing: "border-box",
      },
      "default-filled": {
        variant: "variants.chip.default",
        color: "white-500",
        borderColor: "transparent",
      },
      "default-outlined": {
        variant: "variants.chip.default",
      },
      "default-tonal": {
        variant: "variants.chip.default",
        borderColor: "transparent",
      },
      "default-ghost": {
        variant: "variants.chip.default",
        backgroundColor: "transparnet",
        borderColor: "transparent",
      },
      "disabled": {
        variant: "variants.chip.default",
        color: "text-tertiary",
        backgroundColor: "grey-500-8",
        borderColor: "transparent",
      },
      "white-outlined": {
        variant: "variants.chip.default-outlined",
        color: "grey-600",
        borderColor: "grey-200",
        backgroundColor: "white-500",
      },
      "white-outlined-interactive": {
        variant: "variants.chip.white-outlined",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-100",
        },
        ":active": {
          backgroundColor: "grey-200",
        },
      },
      "primary-filled": {
        variant: "variants.chip.default-filled",
        backgroundColor: "primary",
      },
      "primary-filled-interactive": {
        variant: "variants.chip.primary-filled",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "primary-600",
        },
        ":active": {
          backgroundColor: "primary-700",
        },
      },
      "primary-outlined": {
        variant: "variants.chip.default-outlined",
        color: "primary-500",
        borderColor: "primary-500",
        backgroundColor: "primary-500-8",
      },
      "primary-outlined-interactive": {
        variant: "variants.chip.primary-outlined",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "primary-500-16",
        },
        ":active": {
          backgroundColor: "primary-500-24",
        },
      },
      "primary-tonal": {
        variant: "variants.chip.default-tonal",
        color: "primary",
        backgroundColor: "primary-500-8",
      },
      "primary-tonal-interactive": {
        variant: "variants.chip.primary-tonal",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "primary-500-16",
        },
        ":active": {
          backgroundColor: "primary-500-24",
        },
      },
      "primary-ghost": {
        variant: "variants.chip.default-ghost",
        color: "primary",
      },
      "primary-ghost-interactive": {
        variant: "variants.chip.primary-ghost",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-8",
        },
        ":active": {
          backgroundColor: "grey-500-16",
        },
      },
      "grey-filled": {
        variant: "variants.chip.default-filled",
        backgroundColor: "grey-500",
      },
      "grey-filled-interactive": {
        variant: "variants.chip.grey-filled",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-600",
        },
        ":active": {
          backgroundColor: "grey-700",
        },
      },
      "grey-outlined": {
        variant: "variants.chip.default-outlined",
        color: "grey-500",
        borderColor: "grey-500",
        backgroundColor: "grey-500-8",
      },
      "grey-outlined-interactive": {
        variant: "variants.chip.grey-outlined",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-16",
        },
        ":active": {
          backgroundColor: "grey-500-24",
        },
      },
      "grey-tonal": {
        variant: "variants.chip.default-tonal",
        color: "grey-500",
        backgroundColor: "grey-500-8",
      },
      "grey-tonal-interactive": {
        variant: "variants.chip.grey-tonal",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-16",
        },
        ":active": {
          backgroundColor: "grey-500-24",
        },
      },
      "grey-ghost": {
        variant: "variants.chip.default-ghost",
        color: "grey-500",
      },
      "grey-ghost-interactive": {
        variant: "variants.chip.grey-ghost",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-8",
        },
        ":active": {
          backgroundColor: "grey-500-16",
        },
      },
      "red-filled": {
        variant: "variants.chip.default-filled",
        backgroundColor: "red-500",
      },
      "red-filled-interactive": {
        variant: "variants.chip.red-filled",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "red-600",
        },
        ":active": {
          backgroundColor: "red-700",
        },
      },
      "red-outlined": {
        variant: "variants.chip.default-outlined",
        color: "red-500",
        backgroundColor: "red-500-8",
        borderColor: "red-500",
      },
      "red-outlined-interactive": {
        variant: "variants.chip.red-outlined",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "red-500-16",
        },
        ":active": {
          backgroundColor: "red-500-24",
        },
      },
      "red-tonal": {
        variant: "variants.chip.default-tonal",
        color: "red-500",
        backgroundColor: "red-500-8",
      },
      "red-tonal-interactive": {
        variant: "variants.chip.red-tonal",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "red-500-16",
        },
        ":active": {
          backgroundColor: "red-500-24",
        },
      },
      "red-ghost": {
        variant: "variants.chip.default-ghost",
        color: "red-500",
      },
      "red-ghost-interactive": {
        variant: "variants.chip.red-ghost",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-8",
        },
        ":active": {
          backgroundColor: "grey-500-16",
        },
      },
      "soft-red-filled": {
        variant: "variants.chip.default-filled",
        backgroundColor: "soft-red-500",
      },
      "soft-red-filled-interactive": {
        variant: "variants.chip.soft-red-filled",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "soft-red-600",
        },
        ":active": {
          backgroundColor: "soft-red-700",
        },
      },
      "soft-red-outlined": {
        variant: "variants.chip.default-outlined",
        color: "soft-red-600",
        backgroundColor: "soft-red-100",
        borderColor: "soft-red-200",
      },
      "soft-red-outlined-interactive": {
        variant: "variants.chip.soft-red-outlined",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "soft-red-100",
        },
        ":active": {
          backgroundColor: "soft-red-200",
        },
      },
      "soft-red-tonal": {
        variant: "variants.chip.default-tonal",
        color: "soft-red-500",
        backgroundColor: "soft-red-500-8",
      },
      "soft-red-tonal-interactive": {
        variant: "variants.chip.soft-red-tonal",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "soft-red-500-16",
        },
        ":active": {
          backgroundColor: "soft-red-500-24",
        },
      },
      "soft-red-ghost": {
        variant: "variants.chip.default-ghost",
        color: "soft-red-500",
      },
      "soft-red-ghost-interactive": {
        variant: "variants.chip.soft-red-ghost",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-8",
        },
        ":active": {
          backgroundColor: "grey-500-16",
        },
      },
      "orange-filled": {
        variant: "variants.chip.default-filled",
        backgroundColor: "orange-500",
      },
      "orange-filled-interactive": {
        variant: "variants.chip.orange-filled",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "orange-600",
        },
        ":active": {
          backgroundColor: "orange-700",
        },
      },
      "orange-outlined": {
        variant: "variants.chip.default-outlined",
        color: "orange-500",
        backgroundColor: "orange-500-8",
        borderColor: "orange-500",
      },
      "orange-outlined-interactive": {
        variant: "variants.chip.orange-outlined",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "orange-500-16",
        },
        ":active": {
          backgroundColor: "orange-500-24",
        },
      },
      "orange-tonal": {
        variant: "variants.chip.default-tonal",
        color: "orange-500",
        backgroundColor: "orange-500-8",
      },
      "orange-tonal-interactive": {
        variant: "variants.chip.orange-tonal",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "orange-500-16",
        },
        ":active": {
          backgroundColor: "orange-500-24",
        },
      },
      "orange-ghost": {
        variant: "variants.chip.default-ghost",
        color: "orange-500",
      },
      "orange-ghost-interactive": {
        variant: "variants.chip.orange-ghost",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-8",
        },
        ":active": {
          backgroundColor: "grey-500-16",
        },
      },
      "green-filled": {
        variant: "variants.chip.default-filled",
        backgroundColor: "green-500",
      },
      "green-filled-interactive": {
        variant: "variants.chip.green-filled",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "green-600",
        },
        ":active": {
          backgroundColor: "green-700",
        },
      },
      "green-outlined": {
        variant: "variants.chip.default-outlined",
        color: "green-500",
        backgroundColor: "green-500-8",
        borderColor: "green-500",
      },
      "green-outlined-interactive": {
        variant: "variants.chip.green-outlined",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "green-500-16",
        },
        ":active": {
          backgroundColor: "green-500-24",
        },
      },
      "green-tonal": {
        variant: "variants.chip.default-tonal",
        color: "green-500",
        backgroundColor: "green-500-8",
      },
      "green-tonal-interactive": {
        variant: "variants.chip.green-tonal",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "green-500-16",
        },
        ":active": {
          backgroundColor: "green-500-24",
        },
      },
      "green-ghost": {
        variant: "variants.chip.default-ghost",
        color: "green-500",
      },
      "green-ghost-interactive": {
        variant: "variants.chip.green-ghost",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-8",
        },
        ":active": {
          backgroundColor: "grey-500-16",
        },
      },
      "violet-filled": {
        variant: "variants.chip.default-filled",
        backgroundColor: "violet-500",
      },
      "violet-filled-interactive": {
        variant: "variants.chip.violet-filled",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "violet-600",
        },
        ":active": {
          backgroundColor: "violet-700",
        },
      },
      "violet-outlined": {
        variant: "variants.chip.default-outlined",
        color: "violet-500",
        backgroundColor: "violet-500-8",
        borderColor: "violet-500",
      },
      "violet-outlined-interactive": {
        variant: "variants.chip.violet-outlined",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "violet-500-16",
        },
        ":active": {
          backgroundColor: "violet-500-24",
        },
      },
      "violet-tonal": {
        variant: "variants.chip.default-tonal",
        color: "violet-500",
        backgroundColor: "violet-500-8",
      },
      "violet-tonal-interactive": {
        variant: "variants.chip.violet-tonal",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "violet-500-16",
        },
        ":active": {
          backgroundColor: "violet-500-24",
        },
      },
      "violet-ghost": {
        variant: "variants.chip.default-ghost",
        color: "violet-500",
      },
      "violet-ghost-interactive": {
        variant: "variants.chip.violet-ghost",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "grey-500-8",
        },
        ":active": {
          backgroundColor: "grey-500-16",
        },
      },
    },
  },
  shadows: {
    card: "0px 1px 3px 0px #0000000a",
    inputButton: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
    box: "0px 1px 3px 0px rgba(0, 0, 0, 0.04)",
    circle: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
  },
  borders: {
    default: `1px solid ${palette["grey-100"]}`,
    card: ` 1px solid ${palette["grey-100"]}`,
    table: `1px solid ${palette["grey-100"]}`,
    inputButton: "1px solid #d8dce6",
    flexMore: `1px solid ${palette["grey-100"]}`,
    redBadge: `1px solid ${palette["red-300"]}`,
    avatar: "1px solid rgba(0, 0, 0, 0.07)",
  },
  sizes: {
    col12: {
      1: "8.3333%",
      2: "16.6666%",
      3: "25%",
      4: "33.3333%",
      5: "41.6666%",
      6: "50%",
      7: "58.3333%",
      8: "66.6666%",
      9: "75%",
      10: "83.3333%",
      11: "91.6666%",
      12: "100%",
    },
    modal: {
      width: {
        xxs: "280px",
        xs: "320px",
        sm: "440px",
        md: "540px",
        lg: "640px",
      },
      height: {
        xs: "256px",
        sm: "440px",
        md: "600px",
        lg: "800px",
      },
    },
  },
  borderWidths: {},
  borderStyles: {},
  zIndices: {},
  transitions: {},
});

export type Theme = typeof theme;
export default theme;
