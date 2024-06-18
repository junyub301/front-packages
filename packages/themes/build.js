import run from "@typescript-eslint/eslint-plugin";
import pkg from "./package.json" assert {type:"json"};

run({pkg})
