export default {
    content: [
      "./index.html", // Directly include your index.html file in the root
      "./_layouts/**/*.html", // If you have layout files in _layouts
      "./_includes/**/*.html", // If you have partial includes in _includes
      "./_site/**/*.html", // If you need to scan the generated site for classes
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };