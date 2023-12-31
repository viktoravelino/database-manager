/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// import Color from "color";
// const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
// const lighen = (clr, val) => Color(clr).lighten(val).rgb().string();
// const darken = (clr, val) => Color(clr).darken(val).rgb().string();

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "theme-primary": "#4ad0ff",

        "sidebar-bg": "#181818",
        "sidebar-heading": "#ffffffde",

        "explorer-menu-bg-hover": "#303030",
        "explorer-item-sublabel-text": "#616161",
        "explorer-footer": "#303030",

        "context-menu-bg": "#282828",
        "context-menu-item-hover": "#303030",

        "tabs-bg": "#181818",
        "tab-bg": "#282828",
        "active-tab-bg": "#0f0f0f",

        "main-bg": "#0f0f0f",

        "badge-bg": "#303030",

        text: "#C5C5C5",

        // select component
        "select-bg": "#282828",
        "select-text": "#B7B7B7",

        // input component
        "input-bg": "#282828",
        "input-text": "#B7B7B7",

        // TODO: delete below colors
        "theme-bg": "#181818",
        "theme-base": "#fff",
        // "theme-primary": "#fad83b",
        "theme-secondary": "#4ad0ff",

        "text-dark": "#ffffffde",
        "text-light": "#ffffff91",
        "text-lighter": "#ffffff5e",
        "text-hint": "#ffffff5e",
        "text-disabled": "#ffffff5e",

        "brand-info": "#4ad0ff",
        "brand-success": "#15db95",
        "brand-warning": "#ff8d21",
        "brand-danger": "#ff5d59",
        "brand-default": "#ffffff91",
        "brand-purple": "#9858ff",
        "brand-pink": "#ff78f7",
        "brand-primary": "#fad83b",
        "brand-secondary": "#4ad0ff",

        "border-color": "rgba(255,255,255 0.1)",
        "link-color": "#ffffffde",
        placeholder: "#ffffff5e",
        selection: "#fad83b33",
        "input-highlight": "rgba(255,255,255 0.27)",

        "query-editor-bg": "#181818",

        "titlebar-bg": "transparent",
        "global-sidebar-bg": "transparent",

        "statusbar-bg": "rgba(255,255,255 0.1)",

        "statusbar-text": "black",
        "statusbar-text-default": "white",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
