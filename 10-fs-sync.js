const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");

console.log(first);

writeFileSync("./content/result-sync.txt", "hello world", { flag: "a" });
