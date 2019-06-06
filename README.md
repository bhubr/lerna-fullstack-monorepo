# Example monorepo

This repo uses Lerna to manage npm commands under two packages:
* `front` (a bare app created with Create React App)
* `back` (a bare Express app)

It comes with pre-commit hooks (husky), that run ESLint on both `front` and `back` folders.

## Installation

* Clone this
* Run `npm install` from three places: repository root, `front`, `back`

## Run server&front apps

* `npx lerna run <command>` &rarr; runs `npm run <command>` for all packages referenced in `lerna.json`
* Adding `--stream` allows console output from Express and CRA's webpack dev server to be displayed in real-time (otherwise it is buffered and displayed when the program end, that is... never!)

```
npx lerna run start --stream
```

## Lint both server&front

```
npx lerna run lint
```

## Todo

This repo doesn't leverage Lerna's ability to manage common dependencies across the packages (which could prove useful for a React + SSR setup)
