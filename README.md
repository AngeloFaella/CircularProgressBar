<a name="CircularProgressBar"></a>

## CircularProgressBar
CircularProgressBar v1.0 by Angelo FaellaA lightweight circular progress bar made with SVG circles and CSS transitions.

**Kind**: global class  

* [CircularProgressBar](#CircularProgressBar)
    * [new CircularProgressBar(width, height, container, [options])](#new_CircularProgressBar_new)
    * [.setBackgroundColor(color)](#CircularProgressBar+setBackgroundColor)
    * [.setStrokeColor(color)](#CircularProgressBar+setStrokeColor)
    * [.showProgressNumber(enabled)](#CircularProgressBar+showProgressNumber)
    * [.setCenterIcon(src)](#CircularProgressBar+setCenterIcon)
    * [.setProgress(percent)](#CircularProgressBar+setProgress)
    * [.getProgress()](#CircularProgressBar+getProgress) ⇒ <code>Number</code>

<a name="new_CircularProgressBar_new"></a>

### new CircularProgressBar(width, height, container, [options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>Number</code> |  | width in px |
| height | <code>Number</code> |  | height in px |
| container | <code>String</code> |  | ID of the parent |
| [options] | <code>Object</code> |  | progress bar options |
| [options.strokeSize] | <code>Number</code> | <code>1</code> | size of the stroke |
| [options.backgroundColor] | <code>String</code> | <code>&#x27;black&#x27;</code> | background color of the inner circle |
| [options.strokeColor] | <code>String</code> | <code>&#x27;white&#x27;</code> | color of the stroke |
| [options.centerIcon] | <code>String</code> |  | icon displayed at the center of the inner circle |
| [options.showProgressNumber] | <code>Boolean</code> | <code>false</code> | icon displayed at the center of the inner circle |
| [options.oncomplete] | <code>EventListener</code> |  | callback function invoked when progress reach 100% |

<a name="CircularProgressBar+setBackgroundColor"></a>

### circularProgressBar.setBackgroundColor(color)
set color of the inner circle

**Kind**: instance method of [<code>CircularProgressBar</code>](#CircularProgressBar)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | a valid CSS color |

<a name="CircularProgressBar+setStrokeColor"></a>

### circularProgressBar.setStrokeColor(color)
set color of the stroke

**Kind**: instance method of [<code>CircularProgressBar</code>](#CircularProgressBar)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | a valid CSS color |

<a name="CircularProgressBar+showProgressNumber"></a>

### circularProgressBar.showProgressNumber(enabled)
**Kind**: instance method of [<code>CircularProgressBar</code>](#CircularProgressBar)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | boolean to show/hide progress number |

<a name="CircularProgressBar+setCenterIcon"></a>

### circularProgressBar.setCenterIcon(src)
set an image at the center of the progressbar

**Kind**: instance method of [<code>CircularProgressBar</code>](#CircularProgressBar)  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>String</code> | image src |

<a name="CircularProgressBar+setProgress"></a>

### circularProgressBar.setProgress(percent)
Set progress of the progressbar (with animation);

**Kind**: instance method of [<code>CircularProgressBar</code>](#CircularProgressBar)  

| Param | Type | Description |
| --- | --- | --- |
| percent | <code>Number</code> | progress percentage |

<a name="CircularProgressBar+getProgress"></a>

### circularProgressBar.getProgress() ⇒ <code>Number</code>
Get current progress

**Kind**: instance method of [<code>CircularProgressBar</code>](#CircularProgressBar)  
