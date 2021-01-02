module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'yale-blue': '#082D6A',
        'french-blue': '#134780',
        'sky-blue': '#B7D5EA',
        'baby-pwoder': '#FAFAFA',
        'red-salsa': '#FB3640',
        'granite-gray': '#605FSE',
        'yellow-1': '#FFB700',
        'orange': '#F75C03',
        'green-1': '#3EC300'
      },
      backgroundImage: theme => ({
        'header-network': "url(/HeaderNetwork.png)",
        'footer-network': "url(/footer_network.png)"
      })
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
