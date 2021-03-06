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
        'safety-orange': '#FB6500',
      },
      fontFamily: {
        'helvetica-now-display': ['Helvetica Now Display', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'gobold-hollow-bold': ['Gobold Hollow Bold', 'sans-serif'],
        'gobold-hollow': ['Gobold Hollow', 'sans-serif'],
        gobold: ['Gobold', 'sans-serif'],
        'gobold-bold': ['Gobold Bold', 'sans-serif'],
        'gobold-high': ['Gobold High', 'sans-serif'],
      },
      fontSize: {
        '13px': '0.8125rem',
        '15px': '0.9375rem',
        '21px': '1.3125rem',
        '22px': '1.375rem',
        '28px': '1.75rem',
        '40px': '2.5rem',
        '45px': '2.8125rem',
        '50px': '3.125em',
        '55px': '3.4375rem',
        '100px': '6.25rem',
        '120px': '7.5rem',
        '168px': '10.5rem',
      },
      lineHeight: {
        '18px': '1.125rem',
        '22px': '1.375rem',
        '24px': '1.5rem',
        '25px': '1.5625rem',
        '26px': '1.625rem',
        '30px': '1.875rem',
        '35px': '2.1875rem',
        '45px': '2.8125rem',
        '50px': '3.125rem',
        '60px': '3.75rem',
        '65px': '4.0625rem',
        '70px': '4.375rem',
        '112px': '7rem',
        '132px': '8.25rem',
        '223px': '13.9375rem',
      },
      maxWidth: {
        '1140px': '1140px',
      },
      width: {
        fit: 'fit-content',
      },
      height: {
        fit: 'fit-content',
      },
      backgroundImage: {
        'gradient-hero':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
