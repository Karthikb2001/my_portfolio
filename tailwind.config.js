/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx",
            
          ],
  theme: {
    extend: {
      keyframes:{ arrow:{
        '0% , 80%, 100%':{opacity:'0'},
        '40%':{opacity:'1'},
      },
      },
      webkitkeyframes:{ arrow:{
        '0% , 80%, 100%':{opacity:'0'},
        '40%':{opacity:'1'},
      },
      },
      
    },
    
  },
  plugins: [],
}
