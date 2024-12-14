import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-yellow-400', 'bg-red-400', 'bg-green-400', 'bg-slate-400',
    'bg-slate-500','bg-blue-400', // Add classes you expect to use dynamically
    'gap-4', 'gap-8', // Add gap classes
    'items-center', 'items-start', 'justify-center', 'justify-start' // Add alignment classes
    // Add any other dynamic classes you're generating
  ],
} satisfies Config;
