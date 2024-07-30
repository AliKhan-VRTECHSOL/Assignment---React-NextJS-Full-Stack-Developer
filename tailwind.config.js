/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: [
          "64px",
          { lineHeight: "80px", letterSpacing: "0px", fontWeight: "600" },
        ],
        h2: ["48px", { lineHeight: "56px", letterSpacing: "0px" }],
        h3: ["32px", { lineHeight: "40px", letterSpacing: "0px" }],
        h4: ["24px", { lineHeight: "32px", letterSpacing: "0px" }],
        h5: ["20px", { lineHeight: "24px", letterSpacing: "0px" }],
        h6: ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
        bodyLarge: ["20px", { lineHeight: "32px", letterSpacing: "0px" }],
        bodyRegular: ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
        bodySmall: ["14px", { lineHeight: "24px", letterSpacing: "0px" }],
        bodyExtraSmall: ["12px", { lineHeight: "24px", letterSpacing: "0px" }],
        caption: ["14px", { lineHeight: "16px", letterSpacing: "0px" }],
      },
      colors: {
        primary: "#2BD17E",
        error: "#EB5757",
        background: "#093545",
        inputColor: "#224957",
        card: "#092C39",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}
