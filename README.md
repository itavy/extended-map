# ExtendedMap

This is a module extendeds native Map providing some extra features:

- return default value if the requested key does not exist
- protect against overrite of existing keys

## Instalation

```
npm install @itavy/extended-map
```

## Quick Example
```
const eMap = require('@itavy/extended-map').ExtendedMap({
  defaultValue: 'myDefaultValue'
});

console.log('return value:', eMap.get('unknownkey'));
```
this will produce:
```
return value: myDefaultValue
```

## API
<a name="ExtendedMap"></a>

## ExtendedMap
**Kind**: global class  
<a name="new_ExtendedMap_new"></a>

### new ExtendedMap([defaultValue], [allowOverrite])
ExtendedMap


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [defaultValue] | <code>\*</code> |  | default value to be returned if none found |
| [allowOverrite] | <code>Boolean</code> | <code>true</code> | if it is allowed to overrite an existing key |


## Usage

see [Example](https://github.com/itavy/extended-map/blob/master/examples/example.js)

## TODO
- [ ] refactor jsdoc
- [ ] add examples
- [ ] promisify some methods

## LICENSE

[MIT](https://github.com/itavy/extended-map/blob/master/LICENSE.md)
