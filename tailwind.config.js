module.exports = {
  mode: 'jit',
  content: ['./pages/*.{tsx,ts}', './components/**/*.{tsx,ts}'],
  theme: {
    colors: {
      white: '#ffffff',
      cirrus: '#CDD5DE',
      cumulus: '#E3E8EF',
      stratus: '#A3AEBF',
      sky: '#4683C8',
      storm: '#4C5566',
      black: '#000000'
    },
    minWidth: {
      'box': '208px'
    },
    minHeight: {
      'box': '240px'
    }
  },
  plugins: []
}
