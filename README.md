# simpleImageUpload

A Javascript component for upload images and read them.

__In angularJS__
 This directive tries be simple and fully customizable, for change properties according to your project.

__In jQuery__
 This widget will not destroy your bussines logic, let you upload image and do anything with it

*This document is on DEV*

## Requirements:

* jQuery 1.11 +
* AngularJS 1.4.x +

## Installation

Install via npm

`npm i simpleimageupload`

# Usage

_*Important*_: CSS styles are not included, please see [Demo](http://elporfirio.github.io/simpleImageUpload) for examples.

## Usage on AngularJS

![angular logo](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/200px-AngularJS_logo.svg.png)

Add `simpleImageUpload.js` after AngularJS Import

```
<script src="node_modules/angular/jquery.min.js"></script>
<script src="node_modules/angular/angular.min.js"></script>
<script src="simpleImageUpload/simpleImageUpload.js"></script>
```

Inject dependency (`simpleUtil`) to main module 

`angular.module('angular-app', ['simpleUtil'])`

Insert directive on template / html file

`<simple-image-upload image-file="ctrl.myImage"></simple-image-upload>`
 
 ### Options
 
 | Attribute  | Type |  Description |
 |---|---| --- |
 | image-file  | `object` | Two-way binding var, where image file will be stored |  

### Image-file return format

```
{
    "source": "data:image;base64",
    "file": {file Object},
    "name": "imageName.jpg"
}
```

## Usage on jQuery

![jquery logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/200px-JQuery_logo.svg.png)

Add simpleImageUpload.js` after jQuery Import
```
<script src="node_modules/angular/jquery.min.js"></script>
<script src="simpleImageUpload/simpleImageUpload.js"></script>
```

Add a container on template / html file

```<div id="imageUpload"></div>```

Initialize the widget (optional store in a scope var for execute methods)

```
  var simpleImageUpload;

  $(document).ready(function(){
    simpleImageUpload = $('#imageUpload').simpleImageUpload({});
  });
```

 ### Options
 
 | Option | Type | Description |
 |---|---| --- |
 | onAfterRead  | `method` | Method called after read the image. returns `object`. <br> [See image-file return format](#Image-file-return-format)| 
 
 ### Methods
 
  | Method  | return |  Description |
  |---|---| --- |
  | getImageFile  | `object` | Get current image file data. <br>[See image-file return format](#Image-file-return-format)| 
  | deleteImageFile  | `void` | Delete current image file | 


## Demo

See demo on [https://elporfirio.github.io/simpleImageUpload/](https://elporfirio.github.io/simpleImageUpload/).

# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.1.4] - 2017-09-07
### Changes
- Update documentation and demo page

## [0.1.3] - 2017-09-06
### Added
- jQuery widget
- compile scripts for development

### Fixed
- Minor Bugs

## [0.1.2] - 2017-06-12
### Added
- Add github Page Demo

### Changed
- Improve coding


## [0.1.1] - 2017-06-08
### Added
- Package init and changelog for incoming documentation

## 0.0.1
### Initial Release
- Nothing to inform here

[Unreleased]: https://github.com/elporfirio/simpleImageUpload
[0.1.1]: https://github.com/elporfirio/simpleImageUpload/releases/tag/v0.1.1
[0.1.2]: https://github.com/elporfirio/simpleImageUpload/releases/tag/v0.1.2
[0.1.3]: https://github.com/elporfirio/simpleImageUpload/releases/tag/v0.1.3
[0.1.4]: https://github.com/elporfirio/simpleImageUpload/releases/tag/v0.1.4