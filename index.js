import { glob } from 'glob'
import fs from 'fs/promises';
import { build } from 'esbuild'

// 1. 获取所有的测试脚本 *.spec.js
// 2. 执行这些脚本
const files = glob.sync("*.spec.js")
for (const file of files) {
  const fileContent = await fs.readFile(file, "utf-8")
  await runModule(fileContent + ";import {run} from './core.js'; run();")
}



async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd()
    },
    write: false,
    bundle: true,
    target: "esnext"
  });
  new Function(result.outputFiles[0].text)();
}


