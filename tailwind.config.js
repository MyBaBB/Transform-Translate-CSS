
 /** @type {import('tailwindcss').Config} */
 export const content = ["./build/*.html", "./build/js/*.js"];
 export const theme = {
   
  extend: {

   


    
     colors: {
       VARDARKBEAKTOP: "#785001",
       VARMEDBEAKTOP: "#b67902",
       VARLIGHTBEAKTOP: "#fca802",
       VARDARKDUCKHEAD: "#1e3b28",
       VARMEDDUCKHEAD: "#284f35",
       VARLIGHTDUCKHEAD: "#528f85",
       VARDARKBLUEFEATHER: "#24558d",
       VARMEDBLUEFEATHER: "#2a61a1",
       VARLIGHTBLUEFEATHER: "#419aff",
       VARDARKDUCKCHEEKS: "#362e47",
       VARMEDDUCKCHEEKS: "#6b5b8d",
       VARLIGHTDUCKCHEEKS: "#a088d2",
       VARDARKNECK: "#412a32",
       VARMEDNECK: "#98648d",
       VARLIGHTNECK: "#c68199",
       VARDARKWING: "#3c302e",
       VARMEDWING: "#806661",
       VARLIGHTWING: "#cfa69d",
       VARDARKBEAK: "#70181a",
       VARMEDBEAK: "#962023",
       VARLIGHTBEAK: "#d72d32",
       VARDARKSPACE: "#08121c",
       VARMEDSPACE: "#1b3854",
       VARLIGHTSPACE: "#264d73",
       VARBoneWhite: "#fff9d7",
       VARDCDARKBLUE: "#012344",
       VARDCMEDBLUE: "#01366a",
       VARDCLIGHTBLUE: "#01366a",
       VARDCDARKGREY: "#484a4d",
       VARDCMEDGREY: "#6b6e73",
       VARDCLIGHTGREY: "#b2b7bf",
       VARDCBLUEGREY: "#33485d",


     }, 
     fontFamily: {
       'noto': ['Noto Sans', 'sans-serif'],
       "rye": ['Rye', 'cursive'],
     },
 
        screens: {
         'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
         'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
       }, 
 
      /*  keyframes: {
         'open-menu': {
           '0%': { transform: 'scaleY(0)' },
           '80%': { transform: 'scaleY(01.2)' },
           '100%': { transform: 'scaleY(1)' },
         },
       },
        */


/* 
       animation: {
         'open-menu': 'open-menu 0.5s ease-in-out forwards'
       }, */
     },
   
   plugins: [],
 };