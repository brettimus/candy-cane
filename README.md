# :candy: candy-cane
A simple prototype of a dynamically striped border using `linear-gradient` and some javascript.

Goes without saying, but this is a huge WIP :danger:

## usage
Make a container element that has some left border on it
```html
<div id="container-with-border" style="height: 300px; width: 100%; border-left-width: 3px; border-left-style: solid;"></div>
```

Include `candy-cane.js` on your page

```html
<!-- ... blah blah markup -->
<script src="/path/to/candy-cane.js"></script>
<!-- ... blah blah more markup -->
```

Write some javascript, like so:

```javascript
var myPatrioticCandyCane = CandyCane("#container-with-border");
myPatrioticCandyCane
    .addStripe("red")
    .addStripe("white")
    .addStripe("blue");
```