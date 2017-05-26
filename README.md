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
const ExtendedMap = require('@itavy/extended-map').ExtendedMap;
const eMap = new ExtendedMap({
  defaultValue: 'myDefaultValue'
});

console.log('return value:', eMap.get('unknownkey'));
```
this will produce:
```
return value: myDefaultValue
```

## API
## Objects

<dl>
<dt><a href="#itavy/extended-map">itavy/extended-map</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ExtendedMapOptions">ExtendedMapOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="itavy/extended-map"></a>

## itavy/extended-map : <code>object</code>
**Kind**: global namespace  

* [itavy/extended-map](#itavy/extended-map) : <code>object</code>
    * [.ExtendedMap](#itavy/extended-map.ExtendedMap)
        * [new ExtendedMap([options])](#new_itavy/extended-map.ExtendedMap_new)
        * [.get()](#itavy/extended-map.ExtendedMap+get)
        * [.set()](#itavy/extended-map.ExtendedMap+set)

<a name="itavy/extended-map.ExtendedMap"></a>

### itavy/extended-map.ExtendedMap
ExtendedMap
native map wth a few enhancements

**Kind**: static class of [<code>itavy/extended-map</code>](#itavy/extended-map)  

* [.ExtendedMap](#itavy/extended-map.ExtendedMap)
    * [new ExtendedMap([options])](#new_itavy/extended-map.ExtendedMap_new)
    * [.get()](#itavy/extended-map.ExtendedMap+get)
    * [.set()](#itavy/extended-map.ExtendedMap+set)

<a name="new_itavy/extended-map.ExtendedMap_new"></a>

#### new ExtendedMap([options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>itavy/extended-map.ExtendedMapOptions</code> | <code>{}</code> | Map options |

<a name="itavy/extended-map.ExtendedMap+get"></a>

#### extendedMap.get()
Wrapper for get
if no value is found then default value will be returned

**Kind**: instance method of [<code>ExtendedMap</code>](#itavy/extended-map.ExtendedMap)  
**Access**: public  
**See**: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)  
<a name="itavy/extended-map.ExtendedMap+set"></a>

#### extendedMap.set()
Wrapper for set
if override is not allowed it will throw an error

**Kind**: instance method of [<code>ExtendedMap</code>](#itavy/extended-map.ExtendedMap)  
**Access**: public  
**See**: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)  
<a name="ExtendedMapOptions"></a>

## ExtendedMapOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| defaultValue | <code>\*</code> |  | default value to return when none is found |
| allowOverrite | <code>Boolean</code> | <code>true</code> | if it is allowed to overrite an existing key |


## Usage

see [Example](https://github.com/itavy/extended-map/blob/master/examples/example.js)

## TODO
- [x] refactor jsdoc
- [ ] add examples
- [ ] promisify some methods

## LICENSE

[MIT](https://github.com/itavy/extended-map/blob/master/LICENSE.md)
