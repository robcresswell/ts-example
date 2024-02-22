#!/usr/bin/env -S node --no-warnings --import=tsx/esm

async function main() {
  console.log(`Hello World!`);
}

main().catch((err) => {
  console.error(err);
});
