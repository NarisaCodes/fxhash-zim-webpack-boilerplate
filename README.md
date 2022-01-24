FXHash-ZIM Webpack Biolerplate
================

This boilerplate was combined with both [FXHash webpack boilerplate](https://github.com/fxhash/fxhash-webpack-boilerplate) and [ZIM's](https://zimjs.com/) newest libraries.

# How to use

You will need to have [nodejs](https://nodejs.org/) installed.

## Installation

> Be sure that your Node.JS version is >= 14

Clone or download this repository to your machine via 
```sh
git clone https://github.com/Syth/fxhash-zimjs-webpack-boilerplate.git
```

Install the required dependencies by running
```sh
npm i
```

## Getting Started

```sh
npm start
```

This will start a local development environment with [live reloading](https://webpack.js.org/configuration/dev-server/#devserverlivereload) for you to test your token quickly.

## Build

```sh
npm run build
```

This will bundle your package into one zip file in order for you to upload your project to FXHash.

## Developing

Once the development environment has started, edit the `src/index.js` file to get started on your artwork. Make sure you're adding your extra files or folders to the ``public/`` folder. Anything created in `public/` will be included in the final zipped file.

## Publishing

Once you've gotten your project zipped up, go to [FXHash Sandbox](https://fxhash.xyz/sandbox) and test it. Once you've tested and made sure that it's working properly, it can be [minted](https://www.fxhash.xyz/mint-generative)!

# Rules to follow

> Theses rules must be followed to ensure that your token will be future-proof, accepted by fxhash, and behave in the intended way

* the zip file must be under 15 Mb
* any path to a resource must be relative (./path/to/file.ext)
* no external resources allowed, you must put all your resources in the `public/` folder (sub-folders are OK)
* no network calls allowed (but calls to get resources from within your `public/` folder)
* you must handle any viewport size (by implementing a response to the `resize` event of the `window`)
* you **cannot use random number generation without a seed** (the same input hash must always yield the same output). The `fxrand` function does a very good job in that regard.
================

# Credits to both FXHash's team for making the webpack boilerplate and Dr. Abstract for making ZIM!
