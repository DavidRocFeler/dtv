import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 2px 10px 1px #0BACF2",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #32408A 20%, #112177 100%)',
        'blue-gradient':'linear-gradient(to left, #000 0%, #0E1F76 100%)',
      },
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
