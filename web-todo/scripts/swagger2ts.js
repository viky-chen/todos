const { generateApi } = require("swagger-typescript-api");
// import { resolve } from "path";
const { resolve } = require("path");
generateApi({
  name: "TodoApi.ts",
  url: "http://localhost:3000/api-docs.json",
  output: resolve(__dirname, "../src/services"),
});
