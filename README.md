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
    * [.PromisedExtendedMap](#itavy/extended-map.PromisedExtendedMap)
        * [new PromisedExtendedMap([options])](#new_itavy/extended-map.PromisedExtendedMap_new)
        * [.defaultValue](#itavy/extended-map.PromisedExtendedMap+defaultValue) : <code>\*</code>
        * [.allowOverrite](#itavy/extended-map.PromisedExtendedMap+allowOverrite) : <code>Boolean</code>
        * [.doNotRejectHas](#itavy/extended-map.PromisedExtendedMap+doNotRejectHas) : <code>Boolean</code>
        * [.doNotRejectDelete](#itavy/extended-map.PromisedExtendedMap+doNotRejectDelete) : <code>Boolean</code>
        * [.get()](#itavy/extended-map.PromisedExtendedMap+get) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.set()](#itavy/extended-map.PromisedExtendedMap+set) ⇒ <code>Promise.&lt;PromisedExtendedMap&gt;</code>
        * [.has()](#itavy/extended-map.PromisedExtendedMap+has) ⇒ <code>Promise.&lt;Boolean&gt;</code>
        * [.clear()](#itavy/extended-map.PromisedExtendedMap+clear) ⇒ <code>Promise.&lt;undefined&gt;</code>
        * [.delete()](#itavy/extended-map.PromisedExtendedMap+delete) ⇒ <code>Promise.&lt;Boolean&gt;</code>
        * [.values()](#itavy/extended-map.PromisedExtendedMap+values) ⇒ <code>Promise.&lt;Iterator&gt;</code>
        * [.valuesAsArray()](#itavy/extended-map.PromisedExtendedMap+valuesAsArray) ⇒ <code>Promise.&lt;Array&gt;</code>
        * [.keys()](#itavy/extended-map.PromisedExtendedMap+keys) ⇒ <code>Promise.&lt;Iterator&gt;</code>
        * [.keysAsArray()](#itavy/extended-map.PromisedExtendedMap+keysAsArray) ⇒ <code>Promise.&lt;Array&gt;</code>
        * [.entries()](#itavy/extended-map.PromisedExtendedMap+entries) ⇒ <code>Promise.&lt;Iterator&gt;</code>
        * [.entriesAsArray()](#itavy/extended-map.PromisedExtendedMap+entriesAsArray) ⇒ <code>Promise.&lt;Array&gt;</code>
        * [.forEach()](#itavy/extended-map.PromisedExtendedMap+forEach) ⇒ <code>Promise.&lt;undefined&gt;</code>

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
<a name="itavy/extended-map.PromisedExtendedMap"></a>

### itavy/extended-map.PromisedExtendedMap
ExtendedMap
native map wth a few enhancements

**Kind**: static class of [<code>itavy/extended-map</code>](#itavy/extended-map)  

* [.PromisedExtendedMap](#itavy/extended-map.PromisedExtendedMap)
    * [new PromisedExtendedMap([options])](#new_itavy/extended-map.PromisedExtendedMap_new)
    * [.defaultValue](#itavy/extended-map.PromisedExtendedMap+defaultValue) : <code>\*</code>
    * [.allowOverrite](#itavy/extended-map.PromisedExtendedMap+allowOverrite) : <code>Boolean</code>
    * [.doNotRejectHas](#itavy/extended-map.PromisedExtendedMap+doNotRejectHas) : <code>Boolean</code>
    * [.doNotRejectDelete](#itavy/extended-map.PromisedExtendedMap+doNotRejectDelete) : <code>Boolean</code>
    * [.get()](#itavy/extended-map.PromisedExtendedMap+get) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.set()](#itavy/extended-map.PromisedExtendedMap+set) ⇒ <code>Promise.&lt;PromisedExtendedMap&gt;</code>
    * [.has()](#itavy/extended-map.PromisedExtendedMap+has) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.clear()](#itavy/extended-map.PromisedExtendedMap+clear) ⇒ <code>Promise.&lt;undefined&gt;</code>
    * [.delete()](#itavy/extended-map.PromisedExtendedMap+delete) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.values()](#itavy/extended-map.PromisedExtendedMap+values) ⇒ <code>Promise.&lt;Iterator&gt;</code>
    * [.valuesAsArray()](#itavy/extended-map.PromisedExtendedMap+valuesAsArray) ⇒ <code>Promise.&lt;Array&gt;</code>
    * [.keys()](#itavy/extended-map.PromisedExtendedMap+keys) ⇒ <code>Promise.&lt;Iterator&gt;</code>
    * [.keysAsArray()](#itavy/extended-map.PromisedExtendedMap+keysAsArray) ⇒ <code>Promise.&lt;Array&gt;</code>
    * [.entries()](#itavy/extended-map.PromisedExtendedMap+entries) ⇒ <code>Promise.&lt;Iterator&gt;</code>
    * [.entriesAsArray()](#itavy/extended-map.PromisedExtendedMap+entriesAsArray) ⇒ <code>Promise.&lt;Array&gt;</code>
    * [.forEach()](#itavy/extended-map.PromisedExtendedMap+forEach) ⇒ <code>Promise.&lt;undefined&gt;</code>

<a name="new_itavy/extended-map.PromisedExtendedMap_new"></a>

#### new PromisedExtendedMap([options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>itavy/extended-map.ExtendedMapOptions</code> | <code>{}</code> | Map options |

<a name="itavy/extended-map.PromisedExtendedMap+defaultValue"></a>

#### promisedExtendedMap.defaultValue : <code>\*</code>
Default value for non existing keys

**Kind**: instance property of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Default**: <code>undefined</code>  
**Read only**: true  
<a name="itavy/extended-map.PromisedExtendedMap+allowOverrite"></a>

#### promisedExtendedMap.allowOverrite : <code>Boolean</code>
Allow updating the keys

**Kind**: instance property of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Default**: <code>true</code>  
**Read only**: true  
<a name="itavy/extended-map.PromisedExtendedMap+doNotRejectHas"></a>

#### promisedExtendedMap.doNotRejectHas : <code>Boolean</code>
Weather to reject or not if the key does not exist

**Kind**: instance property of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Default**: <code>false</code>  
**Read only**: true  
<a name="itavy/extended-map.PromisedExtendedMap+doNotRejectDelete"></a>

#### promisedExtendedMap.doNotRejectDelete : <code>Boolean</code>
Weather to reject or not if key to be deleted does not exist

**Kind**: instance property of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Default**: <code>false</code>  
**Read only**: true  
<a name="itavy/extended-map.PromisedExtendedMap+get"></a>

#### promisedExtendedMap.get() ⇒ <code>Promise.&lt;\*&gt;</code>
Promisified wrapper for get

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;\*&gt;</code> - resolves with requested value or default value if none found  
**Access**: public  
<a name="itavy/extended-map.PromisedExtendedMap+set"></a>

#### promisedExtendedMap.set() ⇒ <code>Promise.&lt;PromisedExtendedMap&gt;</code>
Promisified wrapper for set
it will resolve

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;PromisedExtendedMap&gt;</code> - resolves with the new map if overriting
is allowed or the key does not exists, otherwise it will reject with an error  
**Access**: public  
<a name="itavy/extended-map.PromisedExtendedMap+has"></a>

#### promisedExtendedMap.has() ⇒ <code>Promise.&lt;Boolean&gt;</code>
Promisified wrapper for has

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - resolves with true if key exists or with false
if doNotRejectHas is set otherwise it will reject with an error  
**Access**: public  
<a name="itavy/extended-map.PromisedExtendedMap+clear"></a>

#### promisedExtendedMap.clear() ⇒ <code>Promise.&lt;undefined&gt;</code>
Promisified wrapper for clear

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;undefined&gt;</code> - resolves on success  
**Access**: public  
<a name="itavy/extended-map.PromisedExtendedMap+delete"></a>

#### promisedExtendedMap.delete() ⇒ <code>Promise.&lt;Boolean&gt;</code>
Promisified wrapper for delete

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - resolves with true if key has been removed or with false
if doNotRejectDelete is set otherwise it will reject with an error  
**Access**: public  
<a name="itavy/extended-map.PromisedExtendedMap+values"></a>

#### promisedExtendedMap.values() ⇒ <code>Promise.&lt;Iterator&gt;</code>
Promisified wrapper for values

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;Iterator&gt;</code> - resolves on success  
**Access**: public  
<a name="itavy/extended-map.PromisedExtendedMap+valuesAsArray"></a>

#### promisedExtendedMap.valuesAsArray() ⇒ <code>Promise.&lt;Array&gt;</code>
Iterate over all values and put them into an array

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - resolves with an array with all values  
<a name="itavy/extended-map.PromisedExtendedMap+keys"></a>

#### promisedExtendedMap.keys() ⇒ <code>Promise.&lt;Iterator&gt;</code>
Promisified wrapper for keys

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;Iterator&gt;</code> - resolves on success  
**Access**: public  
<a name="itavy/extended-map.PromisedExtendedMap+keysAsArray"></a>

#### promisedExtendedMap.keysAsArray() ⇒ <code>Promise.&lt;Array&gt;</code>
Iterate over all keys and put them into an array

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - resolves with an array with all keys  
<a name="itavy/extended-map.PromisedExtendedMap+entries"></a>

#### promisedExtendedMap.entries() ⇒ <code>Promise.&lt;Iterator&gt;</code>
Promisified wrapper for entries

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;Iterator&gt;</code> - resolves on success  
**Access**: public  
<a name="itavy/extended-map.PromisedExtendedMap+entriesAsArray"></a>

#### promisedExtendedMap.entriesAsArray() ⇒ <code>Promise.&lt;Array&gt;</code>
Iterate over all elements and put them into an array

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - resolves with an array with all elements  
<a name="itavy/extended-map.PromisedExtendedMap+forEach"></a>

#### promisedExtendedMap.forEach() ⇒ <code>Promise.&lt;undefined&gt;</code>
Promisified wrapper for forEach

**Kind**: instance method of [<code>PromisedExtendedMap</code>](#itavy/extended-map.PromisedExtendedMap)  
**Returns**: <code>Promise.&lt;undefined&gt;</code> - resolves on success  
**Access**: public  
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
- [x] promisify some methods

## LICENSE

[MIT](https://github.com/itavy/extended-map/blob/master/LICENSE.md)
