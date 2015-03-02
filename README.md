# scrollTrigger.js

jQuery plugin to activate/deactivate elements as you scroll up/down the page.

### Installation
- Include jQuery then scrollTrigger.js on your page.

### Usage
```javascript
// Default
$('.my-elements').scrollTrigger();
```
```javascript
// Offset from top of element
$('.my-elements').scrollTrigger({
  offset: 100
});
```
```javascript
// Target another element to activate/deactivate
$('.my-elements').scrollTrigger({
  target: '.another-element'
});
```
