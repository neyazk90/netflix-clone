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
        heading: '',
        subHeading: '',
        hintText:'',
      } 
    },
  },
  plugins: [],
}

