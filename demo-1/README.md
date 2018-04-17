Write first demo: build with webpack and run a page with webpack.

Project info and dependencies are described in *package.json*, this belongs to npm of *nodejs*, not *webpack*. 
In this project we use webpack, webpack-cli to package js files, webpack-dev-server to launch a web server. We define 2 scripts to run with npm: "dev" and "build".

## How to use

Install the dependencies, make sure your node is running on NODE_ENV=development, in development mode npm will install both dependencies and devDependencies in a single command "npm install".

```bash
$ cd demo-1
$ npm install
```

To build main.js to dist/build.js, run "build" defined in package.json > scripts

```bash
$ npm run build
```

To start a web dev server, then open index.html, auto build and reload js

```bash
$ npm run dev
```
