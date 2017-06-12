# simpleImageUpload
AngularJS directive for upload images on base64

This document is on DEV

For how to use, see "index.html" file. This directive tries be simple and fully customizable, for change properties according to your project.

## Requirements:

* jQuery 1.11 +
* AngularJS 1.4.x +

## Installation

Install via npm

`npm i simpleimageupload`

## Usage

Add simpleImageUpload.js after AngularJS Import

```
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

### image-file return format

```
{
    "source": "data:image;base64",
    "file": {file Object},
    "name": "imageName.jpg"
}
```

## Demo

See demo on [http://elporfirio.github.io/simpleImageUpload/](http://elporfirio.github.io/simpleImageUpload/).

# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.1.2] - 2017-06-12
- Improve coding
- Add github Page Demo

## [0.1.1] - 2017-06-08
### Added
- Package init and changelog for incoming documentation

## 0.0.1
### Initial Release
- Nothing to inform here

[Unreleased]: https://github.com/elporfirio/simpleImageUpload
[0.1.1]: https://github.com/elporfirio/simpleImageUpload/releases/tag/v.0.1.1
[0.1.2]: https://github.com/elporfirio/simpleImageUpload/releases/tag/v.0.1.2
