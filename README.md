# template20
[![npm version](https://img.shields.io/npm/v/template20.svg)](https://npmjs.org/package/template20) 

jQuery templating with promise support in 20 lines of code.

*Currently CommonJS only (supported by browserify, webpack, etc).*

## Install

```
npm install --save template20
```

## Usage

Define a template in your HTML:

```html
<div data-template='person'>
  <h1 data-template-key='name'>
  <a data-template-key='linkUrl' data-template-attr='href'><span data-template-key='linkText'></span></a>
</div>
```

Hide templates in your CSS:

```css
[data-template] {
  display: none;
}
```

Clone and populate templates using template20:

```js
var template20 = require('template20')

$('body').append(template20('person', {
  name: 'Bob',
  linkText: 'homepage',
  linkUrl: $.get('/users/bob')
    .then(function(data) { return data.url })
}))
```

## License

ISC © [Raine Lourie](https://github.com/metaraine)
