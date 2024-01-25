# Nuxt Module Plausible

A Plausible Analytics module for use with nuxt.js 2

## Installation

`npm i @agency-undone/nuxt-module-plausible --save`

## Usage

First, add the nuxt-plausible-module to the modules block of `nuxt.config.js`

```js
export default {
  modules: [
    'nuxt-plausible-module'
  ],
}
```

Next, add a plausible section to `nuxt.config.js`

```js
export default {
  plausible: {
    include: true
  }
}
```

### Environment

The `NODE_ENV` environment variable toggles Plausible based on environment. Plausible will be loaded when `"NODE_ENV" = "production"`.

```dotenv
NODE_ENV=production
```

When working in any other environment Plausible will only be loaded if localhost tracking is explicitly enabled in the `nuxt.config`

```js
export default {
  plausible: {
    include: true,
    trackLocalhost: true
  }
}
```
