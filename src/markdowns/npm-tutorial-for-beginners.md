---
title: "npm Tutorial for Beginners"
category: "npm"
type: "YouTube"
---



# npm Tutorial for Beginners

[Codevolution - Youtube](https://www.youtube.com/watch?v=6fj0cpmMiVg&list=PLC3y8-rFHvwhgWwm5J3KqzX47n7dwWNrq&index=1)

## 1 - Introduction

### package manager

tool for using other's code

### module

.js file

### package

modules... + package.json

### registry

storehouse for code

## 2 - Getting npm

[Node.js](https://nodejs.org/en/)

## 3 - npm Help

`npm help`

`npm install -h`

`npm help update`

## 4 - package json

- record added packages (depencencies)
- provide reusable commands (scripts)

`npm init`

`npm init -y`

## 5 - package json Defaults ⭐️

`npm config set init-author-name "Oscar Jin"`

`npm set init-license "MIT"`

`npm get init-author-name`

`npm config delete init-license`

[init - Documentation](https://docs.npmjs.com/misc/config#init-module)

## 6 - Installing Local Packages

`npm install moment` (old versions won't track dependencies by default)

`npm install moment --save`

`npm install moment --save-dev`

## 7 - Uninstalling Local Packages

`npm uninstall moment` (old version won't remove dependencies by default)

`npm uninstall moment --save`

`npm uninstall moment --save-dev`

## 8 - Installing Global Packages

`npm install lodash --global`

## 9 - Uninstalling Global Packages

`npm uninstall lodash --global`

`npm rm lodash --global`

## 10 - Listing Packages

`npm list`

`npm list --depth 0`

`npm list --global --depth 0`

## 11 - npm versioning

SemVer (x.y.z)

- x: Major #
- y: Minor #
- z: Patch #

`npm install lodash@3.3.0`

`npm install lodash@4.14` -- fetch latest patch

`npm install lodash@4` -- fetch latest minor

## 12 - Installing from package json

package.json - what "depends" on

`npm install` - add to folder

`^` - stick to Major and get latest avaliable

`~` - stick to Major.Minor and get latest patch 

`*` - get the latest 



