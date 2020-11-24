---
title: "Getting Started - Jest"
category: "Jest"
type: "Documentation"
---


# Getting Started

Jest > Introduction > Getting Started

## Installation

`npm install --save-dev jest`

## Running from command line

`jest my-test --notify --config=config.json`

## Additional Configuration

`jest --init`

`npm i babel-jest @babel/core @babel/preset-env -D`

```JS
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

##

[Using Matchers →](snippetslab://snippet/F0B07D47-CA8E-4505-8C68-B24B05586623/)
