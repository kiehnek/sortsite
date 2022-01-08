module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  theme: {
    fontFamily: {
      mono: ['Fira Mono', 'monospace']
    }
  },
  plugins: [require('tailwind-nord')]
};
