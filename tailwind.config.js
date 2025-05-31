/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Светлая тема
        'background-light': '#f8f8f8',
        'text-light': '#333333',
        'secondary-light': '#555555',
        'primary-light': '#1d4ed8',
        
        // Темная тема
        'background-dark': '#111827',
        'text-dark': '#f3f4f6',
        'secondary-dark': '#9ca3af',
        'primary-dark': '#3b82f6',
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        'theme': '200ms',
      },
      transitionTimingFunction: {
        'theme': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}; 