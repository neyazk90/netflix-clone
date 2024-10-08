/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e50815',
        darkenPrimary:'#c11119',
        muted: '',
        danger: '',
        sucess: '',
        warning:'',
      },
      fontFamily: {
       regular:'',
        semiBold: '',
        bold: '',
      },
      fontSize:{
        heading: '3.5rem',
        subHeading: '1.25rem',
        hintText:'',
      },
      width: {
        w20:'20%'
      }
    },
  },
  plugins: [],
}

