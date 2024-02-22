# TS Playground

## Quick messing around

```sh
npm ci
```

```sh
./scripts/main.ts
```

Now go edit `scripts/main.ts` and write some fun stuff

## Writing something vaguely usable

When you want write some code, put stuff in `src/`. `main.ts` is the entry point
to the project; run `npm run dev` to get a live reload dev server that watches
`src/` and runs `main.ts` when you save.

There's a simple test framework set up, using [Vitest](https://vitest.dev/). Run
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

## Why?

TS has a pretty serious boilerplate problem. There are lots of ongoing projects
to improve this, but generally speaking if you want a project that builds,
lints, formats, tests and has a live reload dev flow you need a lot of
intertwined pieces to try and get the best setup.

This repo is my attempt to make it very easy to start messing with code or
little script demos, while also being able to evolve that code into something
"production ready", whatever that means. It is somewhat opinionated about the
application layer (strict TS, linting, test framework etc.) but has no opinions
about deployment.
