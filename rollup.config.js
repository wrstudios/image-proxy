import pkg from "./package.json";
import babel from "rollup-plugin-babel";

module.exports = {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" }
  ],
  plugins: [
    babel({
      exclude: ["node_modules/**"]
    })
  ]
};
