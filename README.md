[![Build Status](https://travis-ci.org/andreasonny83/angular2-expandable-list.svg?branch=master)](https://travis-ci.org/andreasonny83/angular2-expandable-list)
[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![Coverage Status](https://coveralls.io/repos/github/andreasonny83/angular2-expandable-list/badge.svg?branch=master)](https://coveralls.io/github/andreasonny83/angular2-expandable-list?branch=master)
[![npm](https://img.shields.io/npm/dm/angular2-expandable-list.svg)](https://www.npmjs.com/package/angular2-expandable-list)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# angular2-expandable-list

> Expandable lists made easy for Angular2+

Angular2 Expandable List is an HTML `<angular2-expandable-list>` tag enhanced with styling and animation.
now compatible with Angular4 too.

**Plunker DEMOs:**

*   [Angular2 Expandable List with Angular2](https://embed.plnkr.co/uAPJq0/)

![screenshot](http://i.imgur.com/Qa402ev.gif)

## Table of contents

* [Installation](#installation)
* [Setup](#setup)
* [Usage](#usage)
* [Design your list](#design-your-list)
* [Demo App](#demo-app)
* [Contributing](#contributing)
* [Options](#options)
  * [Properties](#properties)
  * [Attributes](#attributes)
* [Angular 4](#angular-4)
* [Changelog](#changelog)
* [License](#license)

## Installation

1.  Install the component using `npm`:

  ```bash
  # To get the latest stable version and update package.json file:
  $ npm install angular2-expandable-list --save
  ```

  or `yarn` with:

  ```bash
  $ yarn add angular2-expandable-list
  ```

## Setup

If you are using System.js you may want to add this into `map` and `package` config:

```json
{
  "map": {
    "angular2-expandable-list": "node_modules/angular2-expandable-list/bundles/angular2-expandable-list.umd.js"
  }
}
```

If you are using Webpack you may want to add this into your `vendor.js` file:

```js
// vendor.ts
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';

// Third parties packages
import 'rxjs';
import 'angular2-expandable-list';
```

angular2-expandable-list class is an Angular2 module therefore,
it needs to be registered in the modules array (encouraged way):

```js
// app.module.ts
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { ExpandableListModule } from 'angular2-expandable-list';
import { AppComponent }         from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    ExpandableListModule // import Angular's ExpandableListModule modules
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Usage

Use the component anywhere around your application:

```js
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <expandable-list>
    <expandable-list-item>
      <span title>My List</span>
      <a item href="http://www.goo.gl">Google</a>
      <a item href="http://www.goo.gl">Google</a>
      <expandable-list-divider></expandable-list-divider>
      <a item href="http://www.goo.gl">Google</a>
    </expandable-list-item>
  </expandable-list>
  `
})
export class AppComponent  { }
```

## Design your list

### List and list-item

The Angular2-expandable-list is composed of a `<expandable-list>` wrapper and
one or more `<expandable-list-item>`.
Start your list creating these 2 html tags in your template like this:

```html
<expandable-list>
  <expandable-list-item></expandable-list-item>
</expandable-list>
```

### Title and secondary

Now, each `<expandable-list-item>` needs a title and a list of elements.
It is possible to create both a primary and a secondary title for each item like
the following example.

```html
<expandable-list>
  <expandable-list-item>
    <span title>Primary Title</span>
    <span secondary>Secondary</span>
  </expandable-list-item>
</expandable-list>
```

### List items

Now you're ready to fill your list with some items.

```html
<expandable-list>
  <expandable-list-item>
    <span title>Primary Title</span>
    <span secondary>Secondary</span>
    <a item href="http://www.goo.gl">Google</a>
    <a item href="http://www.goo.gl">Google</a>
    <a item href="http://www.goo.gl">Google</a>
  </expandable-list-item>
</expandable-list>
```

It is important to append the html attribute `item` to each of the item you want
to be rendered in the list and it's up to you which HTML tag to use. We've just filled
our list with anchor link but feel free to use any other tag.

### Dividers

```html
<expandable-list>
  <expandable-list-item>
    <span title>Primary Title</span>
    <span secondary>Secondary</span>
    <a item href="http://www.goo.gl">Google</a>
    <a item href="http://www.goo.gl">Google</a>
    <expandable-list-divider></expandable-list-divider>
    <a item href="http://www.goo.gl">Google</a>
  </expandable-list-item>
</expandable-list>
```

### Create more

Now you can create as many `<expandable-list-item>` nodes as you want inside
your `<expandable-list>`.

```html
<expandable-list>
  <expandable-list-item>
    <span title>Primary Title</span>
    <span secondary>Secondary</span>
    <a item href="http://www.goo.gl">Google</a>
    <a item href="http://www.goo.gl">Google</a>
    <expandable-list-divider></expandable-list-divider>
    <a item href="http://www.goo.gl">Google</a>
  </expandable-list-item>

  <expandable-list-item>
    <span title>Another list</span>
    <a item href="http://www.goo.gl">Google</a>
    <a item href="http://www.goo.gl">Google</a>
  </expandable-list-item>
</expandable-list>
```

## Demo App

Have a look at the [demo](https://github.com/andreasonny83/angular2-expandable-list/tree/master/demo)
available in this repository for a real Angular2 application using the Angular2-Cookie-Law library.

From your terminal all the Node dependencies using npm:

```bash
$ npm run demo
```

Open your browser to [http://localhost:9007/](http://localhost:9007/)
to see the application running.

## Options

## Properties

### isExpanded

| Type | Default value |
| --- | --- |
| boolean | false |

Used for interacting with the `expandable-list-item` element.

Example:

```ts
@Component({
  selector: 'app',
  template: `
    <expandable-list class="expandable-list">
      <expandable-list-item [isExpanded]="listExpanded">
        <span title>My list</span>
        <a item href="http://www.goo.gl">Google</a>
        <a item href="http://www.goo.gl">Google</a>
        <a item href="http://www.goo.gl">Google</a>
      </expandable-list-item>
    </expandable-list>
  `
})
export class AppComponent {
  listExpanded = true;
}
```

## Attributes

| Name | Type | Description |
| --- | --- | --- |
| disabled | boolean | When applied to the `expandable-list-item`, disabled the
| is-expanded | boolean | Reflect the expandable state of the item list element

## Events

| Name | Type | Description |
| --- | --- | --- |
| onExpanded | boolean | Triggered when the list expansion status changes

Example:

```ts
@Component({
  selector: 'app',
  template: `
    <expandable-list class="expandable-list">
      <expandable-list-item [isExpanded]="listExpanded"
                            (onExpanded)="listExpanded = $event">
        <span title>My list</span>
        <a item href="http://www.goo.gl">Google</a>
      </expandable-list-item>
    </expandable-list>
  `
})
export class AppComponent {
  listExpanded = true;
}
```

## Angular 4

This module will work with Angular 4 projects but requires `@angular/animations`
to be included in your project as the Angular animations are not part of the `@angular/core`
library starting from the version >=4.

Make sure to include the `BrowserAnimationsModule` in your App module like in the following example:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Angular 4 Only
  ],
})
export class AppModule { }
```

Everything else will just work as before.

## Contributing

This package is using the AngularJS commit messages as default way to contribute
with commitizen node package integrated in this repository.

1.  Fork it!
1.  Create your feature branch: `git checkout -b my-new-feature`
1.  Add your changes: `git add .`
1.  Commit your changes: `npm run commit`
1.  Push to the branch: `git push origin my-new-feature`
1.  Submit a pull request :sunglasses:

## Changelog

Changelog available [here](https://github.com/andreasonny83/angular2-expandable-list/releases)

## License

[MIT License](https://github.com/andreasonny83/angular2-expandable-list/blob/master/LICENSE) © Andrea SonnY
