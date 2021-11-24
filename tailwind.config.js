module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-vmx': '#2D2D34',
        silver: '#C0C0C0',
        platinum: '#EBEBEB',
        blue: '#574AE2',
        'safety-orange': '#FF6700',
      },
      fontFamily: {
        'helvetica-now-display': ['Helvetica Now Display', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '13px': '0.8125rem',
        '15px': '0.9375rem',
        '21px': '1.3125rem',
        '22px': '1.375rem',
        '28px': '1.75rem',
        '40px': '2.5rem',
        '45px': '2.8125rem',
        '55px': '3.4375rem',
      },
      lineHeight: {
        '22px': '1.375rem',
        '24px': '1.5rem',
        '25px': '1.5625rem',
        '26px': '1.625rem',
        '30px': '1.875rem',
        '35px': '2.1875rem',
        '45px': '2.8125rem',
        '50px': '3.125rem',
        '60px': '3.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
