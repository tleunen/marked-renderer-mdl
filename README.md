# marked-renderer-mdl [![Build Status][travis-image]][travis-url]

Custom renderer for [marked][marked-url] using [Material Design Lite][google-mdl-url].

## Install

```
npm install marked marked-renderer-mdl
```

## Example

```js
import marked from 'marked';
import mdlRenderer from 'marked-renderer-mdl';

console.log(marked('# heading', { renderer: mdlRenderer }));
```

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.

[travis-image]: https://travis-ci.org/tleunen/react-mdl.svg?branch=master
[travis-url]: https://travis-ci.org/tleunen/react-mdl
[coveralls-image]: https://coveralls.io/repos/tleunen/react-mdl/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/tleunen/react-mdl?branch=master
[google-mdl-url]: https://github.com/google/material-design-lite
[discord-url]: https://discord.gg/0ZcbPKXt5bWTpxL5
