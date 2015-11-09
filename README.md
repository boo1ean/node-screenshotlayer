## Api client for [screenshotlayer](https://screenshotlayer.com)

Simple promise-based api client for making screenshots via [screenshotlayer](https://screenshotlayer.com)

## Installation

```
npm install screenshotlayer
```

## Usage

```javascript
var capture = require('screenshotlayer')('your api key');

// Screenshot with default options (viewport = 1440x900 & width = 250)
capture('http://example.com', '/path/to/save').then(function () {
	// done
});

// Using custom options (see https://screenshotlayer.com/documentation for details)
capture('http://example.com', '/path/to/save', { width: 500 }).then(function () {
	// done
});
```

## License

MIT
