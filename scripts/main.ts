#!/usr/bin/env -S node -r ts-node/register/transpile-only

async function main() {
  console.log(`Hello World!`);
}

main().catch((err) => {
  console.error(err);
});
