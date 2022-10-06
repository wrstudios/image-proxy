const isTest = process.env.NODE_ENV === "test";
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
        },
        modules: isTest ? "cjs" : false
      }
    ]
  ]
};
