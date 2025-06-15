module.exports = {
  content: [
    './**/*.html',
    './**/*.js',
    '../frappe/**/*.html',
    '../frappe/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C7ED6',
        accent: '#FAB005',
        bg: '#F8F9FA',
        card: 'rgba(255, 255, 255, 0.75)'
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: [],
}