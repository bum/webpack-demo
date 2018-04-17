Webpack Demo 3: load modules, use javascript ES6 and babel 

This project is same as demo-2, but all js file are written in ES6 with *let*, *const*, *arrow function*... these 
features only work on some modern browsers. So we can write in ES6, then use Babel to convert back to ES5 or older ES 
version.

Dependencies has been added some babel packages. *webpack.config.js* adds *loader: "babel-loader"* to indicate these will 
load by *babel-loader*. And new file *.babelrc* to config babel.
 
## How to use

Install the dependencies, make sure your node is running on NODE_ENV=development

```bash
$ cd demo-3
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

To explore more about this, we can run

```bash
$ npm run pack
```

then open *dist/build.js* to see what happens behind. Babel has convert ES6 scripts from our js file to old ES version 
before webpack packing them to *dist/build.js* file.
