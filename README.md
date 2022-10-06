# image-proxy
image proxy utilities for client apps

## Strategies
1. `proxy` - route http photo through our https proxy
1. `swap` - swap protocols from http to https
1. `null/nil/undefined` - no strategy, return original

## Installation
```sh
yarn add @wrstudios/image-proxy
```

## Publishing a new version
1. Make changes on branch
1. Commit changes
1. Merge changes into master
1. `yarn bump: [patch|minor|major]`
1. Update package dependency to new version in consuming apps.

## Quick Start
```js
import { getProxiedImageUrl } from "@wrstudios/image-proxy";

const strategy = "swap"
const url = "http://something.com/image"
const finalImageUrl = getProxiedImageUrl({ url, strategy })
console.log(finalImageUrl) //=> https://something.com/image
```
