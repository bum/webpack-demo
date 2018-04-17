Webpack Demo 2: load modules, using vanilla javascript

In this project we have 2 modules "greeting" and "math" under folder "src/modules". "main.js" will import them, invoke 
for results then display to web document.

Notice: The module scripts are written in vanilla javascript, not ES6 or later. This project only demos the feature 
loading modules only, not convert es6 to es5 or anything else.
 
Package dependencies are same as in demo-1, just apply module rules in webpack.config.js: from *entry" load all *.js* 
file excluding folder *node_modules*.

## How to use

Install the dependencies, make sure your node is running on NODE_ENV=development

```bash
$ cd demo-2
$ npm install
```

To build *src/main.js* to *dist/build.js*, run "build" defined in package.json > scripts

```bash
$ npm run build
```

To start a web dev server, then open index.html, auto build and reload js

```bash
$ npm run dev
```
