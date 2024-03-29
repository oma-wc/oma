![](assets/logo.png)

# oma

Qenya  
**oma**  
_noun_. everywhere

oma is a framework independent web components library.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Install and use

See `components/` for available components.

See each components documentation for details on properties and styling.

[asdf](https://asdf-vm.com) is used as runtime dependency manager.

### Using a javascript build tool

Install: `yarn add @oma-wc/button`

Add to main javascript file: `import '@oma-wc/button'`

Use in HTML or JSX: `<oma-button>A simple button</oma-button>`

### Using a `<script>` tag

Add to main HTML file:
`<script src="https://unpkg.com/@oma-wc/button" type="text/javascript"></script>`

And then use it in HTML: `<oma-button>A simple button</oma-button>`

# Layout components

Requires <oma-site> due to style dependancies.

# Content components

Doesn't require <oma-site>, self contained style.

# Development

This is a multi package repo managed with [Lerna](https://lerna.js.org).

## Adding new components

Run `yarn bootstrap` to setup internal dependencies.

## Testing components

There's a very simple test page located in `components/index.html` which you can
run with `yarn dev:server`.

Build components automatically with `yarn watch`, for instance `yarn watch @oma-wc/menu`.
The watcher just forwards arguments to the build script.

## Publishing

- `yarn build`
- Commit
- Run `yarn lerna:publish` (you need authentication to NPM (`npm adduser`))
