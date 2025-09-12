import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00D1B2",
          // secondary accent used sparingly
          ink: "#0B0F14"
        }
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
export default config;
