import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '350px',
        xs: '388px',
        xss: '440px',
        s: '500px',
        ssm: '560px',
        sm: '600px',
        md: '700px',
        mdd: '750px',
        xl: '900px',
        xll: '1000px',
        xxl: '1200px',
        xxxl: '1500px',
        xxxll: '1800px',
        xxxlll: '2000px',
        tv: '2400px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
