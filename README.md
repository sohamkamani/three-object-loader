# three-object-loader [![Build Status](https://travis-ci.org/sohamkamani/three-object-loader.svg?branch=master)](https://travis-ci.org/sohamkamani/three-object-loader) [![Coverage Status](https://coveralls.io/repos/sohamkamani/three-object-loader/badge.svg?branch=master&service=github)](https://coveralls.io/github/sohamkamani/three-object-loader?branch=master)

> NodeJS wrapper for Three.js' OBJLoader function

By default, [Three.js](https://www.npmjs.com/package/three) does not have [OBJLoader](http://threejs.org/examples/js/loaders/OBJLoader.js) built in. This is a NodeJS wrapper for the OBJLoader library so that it can be used with npm in systems using browserify, webpack, etc.

## Install

```
$ npm install --save three-obj-loader
```

## Usage

```js
var THREE = require('three');
var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);

console.log(typeof THREE.OBJLoader);
//=> 'function'
```

## License

MIT © [sohamkamani](https://github.com/sohamkamani)
