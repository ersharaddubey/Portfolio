// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
      //  'skills-gradient': 'linear-gradient(38.73deg, #1d5a82 0%, rgba(95, 113, 73, 0) 50%), linear-gradient(141.27deg, rgba(150, 178, 232, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #009688 0%, rgba(0, 150, 136, 0) 50%), linear-gradient(141.27deg, rgba(128, 222, 234, 0) 50%, rgba(0, 188, 212, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #3f51b5 0%, rgba(63, 81, 181, 0) 50%), linear-gradient(141.27deg, rgba(144, 164, 237, 0) 50%, rgba(48, 63, 159, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #f57c00 0%, rgba(245, 124, 0, 0) 50%), linear-gradient(141.27deg, rgba(255, 204, 128, 0) 50%, rgba(255, 112, 67, 0.15) 100%)',
       'skills-gradient': 'linear-gradient(38.73deg, #8e24aa 0%, rgba(142, 36, 170, 0) 50%), linear-gradient(141.27deg, rgba(186, 104, 200, 0) 50%, rgba(123, 31, 162, 0.15) 100%)',
       // 'skills-gradient': 'linear-gradient(38.73deg, #4caf50 0%, rgba(76, 175, 80, 0) 50%), linear-gradient(141.27deg, rgba(165, 214, 167, 0) 50%, rgba(56, 142, 60, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #e91e63 0%, rgba(233, 30, 99, 0) 50%), linear-gradient(141.27deg, rgba(255, 128, 171, 0) 50%, rgba(194, 24, 91, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #607d8b 0%, rgba(96, 125, 139, 0) 50%), linear-gradient(141.27deg, rgba(176, 190, 197, 0) 50%, rgba(69, 90, 100, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #03a9f4 0%, rgba(3, 169, 244, 0) 50%), linear-gradient(141.27deg, rgba(129, 212, 250, 0) 50%, rgba(2, 119, 189, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #ffc107 0%, rgba(255, 193, 7, 0) 50%), linear-gradient(141.27deg, rgba(255, 241, 118, 0) 50%, rgba(255, 160, 0, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #3c1053 0%, rgba(60, 16, 83, 0) 50%), linear-gradient(141.27deg, rgba(103, 58, 183, 0) 50%, rgba(63, 81, 181, 0.15) 100%)',
      //  'skills-gradient': 'linear-gradient(38.73deg, #1d5a82 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
     //'skills-gradient': 'linear-gradient(38.73deg, #2193b0 0%, rgba(0, 172, 193, 0) 50%), linear-gradient(141.27deg, rgba(0, 172, 193, 0) 50%, rgba(0, 172, 193, 0.15) 100%)',


      },
    },
  },
  plugins: [],
};
