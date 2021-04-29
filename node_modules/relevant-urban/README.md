# Relevant urban [![NPM](https://nodei.co/npm/relevant-urban.png?mini=true)](https://nodei.co/npm/relevant-urban/) [![Build Status](https://travis-ci.org/SnekLab/relevant-urban.svg?branch=master)](https://travis-ci.org/SnekLab/relevant-urban) [![Greenkeeper badge](https://badges.greenkeeper.io/SnekLab/relevant-urban.svg)](https://greenkeeper.io/)

<p align="center">
  <img src="https://github.com/SnekLab/relevant-urban/blob/master/ud.png?raw=true" alt="Urban Dictionary API wrapper logo"/>
</p>

This module was meant to replace ~~shitty~~ [urban](https://github.com/mvrilo/urban) module
as it uses callbacks and does useless stuff.

```js
const urban = require('relevant-urban');
```

| Methods                |           returns               |                         description                       |
|------------------------|---------------------------------|-----------------------------------------------------------|
| urban('string')        | `=> Promise<Definition>`        | Gets first definition from urban matching provided query  |
| urban.random()         | `=> Promise<Definition>`        | Gets random definition from urban                         |
| urban.all('string')    | `=> Promise<Array<Definition>>` | Gets all definitions from page 1 matching provided query  |
| urban.random('string') | `=> Promise<Definition>`        | Gets random definition from urban matching provided query |
| urban.search('string'[, page]) | `=> Promise<api response>` | Gets raw response from api without any formating       |

## Example output
*NOTE: `urban.random()` method doesn't have tags and sounds*

```js
  Definition {
  id: 69266,
  word: 'hello',
  definition: 'what you say when your talking casually with friends and your mom walks in the room',
  example: 'What the hell(mom enters)-o mom.',
  urbanURL: 'http://hello.urbanup.com/69266',
  author: 'mad at the world',
  thumbsUp: 3297,
  thumbsDown: 936,
  tags: [ 'hi', 'hey', 'greeting', 'yo', 'goodbye' ],
  sounds: [ 'http://media.urbandictionary.com/sound/hello-7503.mp3',
  'http://media.urbandictionary.com/sound/hello-9778.mp3',
  'http://media.urbandictionary.com/sound/hello-9897.mp3',
  'http://media.urbandictionary.com/sound/hello-10454.mp3',
  ...]
  }
```
