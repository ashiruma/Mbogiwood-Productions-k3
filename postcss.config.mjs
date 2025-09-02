// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // This is the correct plugin for Tailwind v4
    'autoprefixer': {},
  },
};

export default config;