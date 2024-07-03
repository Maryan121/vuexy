import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary":{
          "bg":"#F8F8F8",
          "heading":"#5E5873",
          "parag":"#6E6B7B",
          "purpuleish":'#7367F0',
          
        },
        "red":'#EA5455',
        "facebook":'#3B5998',
        "twitter":'#00ACEE',
        "mail":'#DB3236',
        "github":'#211F1F',
        "grayish":'#B9B9C3',
        'orange':'#FF9F43',
        "white":'#fff',
        "lightpurple":'#7367F01F',
        "lightgreen":"#28C76F1F",
        "lightred":'#EA54551F',
        "lightblue":'#00CFE81F',
        "lightorange":'#FF9F431F',
        "blueish":'#00CFE8',
        
      }
    },
  },
  plugins: [],
};
export default config;
