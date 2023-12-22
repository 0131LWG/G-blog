cannot use import statement outside a module
package.json
"type": "module"

TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]:
  Module "file:///Users/xxxxx/code/projects/xxxxx/dist/server/data/countries.json" 
  needs an import assertion of type "json"

  import countryTable from "./data/countries.json" assert { type: "json" };

  RollupError: "default" is not exported by
  import commonjs from "@rollup/plugin-commonjs";
  commonjs({
      include: [
        "node_modules/**",
        "node_modules/**/*",
        "../../node_modules/**",
        "../../node_modules/**/*"
      ]
    })