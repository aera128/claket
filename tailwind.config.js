module.exports = {
  mode: 'jit',
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
}
