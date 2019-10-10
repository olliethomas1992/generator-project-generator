# <%= name %> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A Yeoman.io <%= capsName %> Generator

## Installation

First, install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
```

Then add the project contents of the project you want to generate to: generators/app/templates

```bash
cd generators/app/templates
git clone <YOUR_PROJECT_URL>
```

Go back to the root of the generator and link your generator:

```bash
npm link
```

Then generate your new project:

```bash
yo <%= yoName %>
```

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Ollie Thomas](https://github.com/olliethomas1992)

[npm-image]: https://badge.fury.io/js/generator-project-generator.svg
[npm-url]: https://npmjs.org/package/generator-project-generator
[travis-image]: https://travis-ci.com/olliethomas1992/generator-project-generator.svg?branch=master
[travis-url]: https://travis-ci.com/olliethomas1992/generator-project-generator
[daviddm-image]: https://david-dm.org/olliethomas1992/generator-project-generator.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/olliethomas1992/generator-project-generator
