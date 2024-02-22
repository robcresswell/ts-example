# TS Example

## Messing around

The fastest way to start playing with TS is just to modify `scripts/main.ts` and
then execute it with `./scripts/main.ts`. The file is executable and its shebang
points to `ts-node` with type checking disabled (transpile only) because type
checking during compilation is annoying when experimenting

## Writing something vaguely usable

When you want write some code, put stuff in `src/`, using `main.ts` as your entry
point, then run `npm run dev` to put the system in watch mode so you can iterate.

There's a simple test framework set up, using [Jest](https://jestjs.io/). Run
`npm test` to run the tests.

## Other tips

- I really recommend [fnm](https://github.com/Schniz/fnm) for managing node
  versions. It's a lot faster than nvm (fast enough to have it in your shell)
  and supports the `.node-version` files that are sort-of-standardised.
- There's a bunch of colors in `scripts/colors.ts` that you can use to make your
  terminal output look nicer if you want a quick demo of something. Usage looks
  something like

  ```typescript
  import { fgGreen, reset } from './scripts/colors.ts';

  console.log(`${fgGreen}This is green${reset}`);
  ```
