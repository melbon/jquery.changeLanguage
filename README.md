# jquery.changeLanguage
How to type international characters on an English keyboard?
## Install
```javascript
<script src="jquery.min.js"></script>
<script src="../jquery.changeLanguage.min.js"></script>
```
or 
```javascript
bower install changelanguage
```
## Usage
```javascript
$(selector).changeLanguage();
```
## Configuration
######language
set your keyboard
```javascript
default: ""
options: string
```
### Extend
If you want to extend plugin with you language, you must add other file with your keyboard alphabet.
CountryCode{2} is you International TwoLetter Country Code.
```javascript
languages.ContryCode{2} = function(input) {
        input.val(input.val().replace(/a/g, "а"));
        ...
    }
```
## Demo
<a href="http://codepen.io/mel/full/fwhyn" target="_blank">codepen.io/mel/full/fwhyn</a>
## License
December 2014 <br />
progressScroll 1.1.0 <br />
@author Mario Vidov <br />
@url <a href="http://vidov.it" target="_blank">www.vidov.it</a> <br />
@twitter  <a href="http://twitter.com/MarioVidov" target="_blank">MarioVidov</a> <br />
MIT license
