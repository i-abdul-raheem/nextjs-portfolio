/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#149ECA',
      secondary: '#0D6D8C',
      'black-transparent': 'rgba(0, 0, 0, 0.6)',
      white: '#fff',
      'white-primary': '#f7f7f7',
      'white-secondary': '#cccccc',
      'dark-primary': '#1F1F1F',
      'dark': '#333333',
    },
    fontSize: {
      'heading-1': '39.5px',
      'heading-2': '22px',
      'heading-3': '18px',
      'heading-4': '14.5px',
      'heading-5': '12px',
      'body': '13.5px',
      'caption': '12px',
    },
  },
  plugins: [],
};
