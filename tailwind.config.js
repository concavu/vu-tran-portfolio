/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: '#070b12', panel: '#0d1420', cyan: '#55d8ff' }, fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] } } },
  plugins: [],
}
