/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".ripple-effect": {
          position: "absolute",
          top: "0",
          left: "0",
          transform: "scale(0)",
          animation: "ripple 0.8s forwards",
          backgroundColor: "rgba(0, 255, 157, 0.5)",
          borderRadius: "50%",
        },
        ".timeline-path": {
          stroke: "url(#pathGradient)",
          strokeWidth: "2",
          strokeDasharray: "4, 4",
          animation: "dash 5s linear infinite",
        },
        ".timeline-tooltip": {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(8px)",
          borderRadius: "0.5rem",
          padding: "1rem",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          color: "white",
          minWidth: "200px",
          opacity: "0",
          transition: "opacity 0.3s ease",
        },
        "@keyframes ripple": {
          "0%": {
            transform: "scale(0)",
            opacity: "0.4",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        "@keyframes dash": {
          "0%": {
            strokeDashoffset: "100%",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },
      });
    },
  ],
};
