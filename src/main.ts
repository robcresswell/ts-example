import { myFunction } from './my-other-module.js';

async function main() {
  await myFunction();
}

main().catch((err) => {
  console.error(err);
});
