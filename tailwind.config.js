/** @type {import('tailwindcss').Config} */

const customColors = {
  ash: "#B0B9C8",
  ash101: "#A4A7B7",
  ash102: "rgba(164, 167, 183, 0.3)",
  ash103: "#434854",
  ash104: "#737373",
  deepBlue: "#031434",
  darkBlue: " #0B2253",
  lightBlue: "#0A74DC",
  white: "#FFFFFF",
  red: "#FF0000",
  darkenBlue: "#303B54",
  green: "#00992B",
  lightBlack: "#E5E5E5",
  
}


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,css}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,css}",
    "./src/molecules/**/*.{js,ts,jsx,tsx,css}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,css}",
    "./src/organisms/**/*.{js,ts,jsx,tsx,css}",
    
  ],
  theme: {
    extend: {
      colors: {
        "enyata-blue": customColors.deepBlue,
        "enyata-ash": customColors.ash,
        "enyata-lightBlue": customColors.lightBlue,
        "enyata-ash101": customColors.ash101,
        "enyata-darkBlue": customColors.darkBlue,
        "enyata-white": customColors.white,
        "enyata-ash102": customColors.ash102,
        "enyata-ash103": customColors.ash103,
        "enyata-ash104": customColors.ash104,
        "enyata-darkenBlue": customColors.darkenBlue,
        "enyata-green": customColors.green,
        "enyata-red": customColors.red,
        "enyata-lightBlack": customColors.lightBlack,
        
      }
    },
  },
  plugins: [],
}
