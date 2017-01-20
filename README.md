## FrontPress Starter Theme

![frontpress-logo-horizontal](https://cloud.githubusercontent.com/assets/762639/21735541/ca6f11ce-d451-11e6-88ae-291b3f82c931.png)

This project aims to create a initial/default/starter theme for [FrontPress](http://www.github.com/frontpressorg/frontpress).

In the moment when I start this project I don't know yet how will the themes be installed in FrontPress, but I took the decision to create myself a css and customize html for FrontPress.

### Requirements

There are some requirements for this project.

#### SASS/CSS needs to:

* Be mobile first;
* Use BEM structure for class names;
* Have well defined colors scheme like [this one](https://github.com/teles/nes-palette/tree/master/sass)
* Have well defined spacing structure like [this one](https://github.com/teles/teles.github.io/blob/master/_sass/helpers/_spacing.sass)
* Use display flex;
* Have components to make sure some images will be square;
* Have an easy to change color definitions;
* Have a well defined typography, from h1 to h6 and links;
* Use well defined media query map and functions;
* Use cards for posts list;

### HTML needs to:

* Use some basic schema.org just like Website;
* Use html5 tags such as header and nav;
* Do not be so different from today's FrontPress basic html;


### Proposal to use this theme in FrontPress:

The first idea to include themes in FrontPress is using `$FrontPressProvider` to include them in this following way:


```javascript
angular.module('myBlog').config(function($FrontPressProvider){

	$FrontPressProvider.configure.load({
		"restApiUrl": "https://demo.wp-api.org/wp-json",
		"apiVersion": "v2",
		"pageSize": 5,
		"infiniteScroll": true,
		"routes": {
			"post": "/:postYear/:postMonth/:postDay/:postSlug",
			"home.pagination": "/page/:pageNumber"
		},
		"titles": {
			"post": ":postTitle - :siteName",
			"home": "Home - :siteName"
		},
		"overrides": {
			"siteName": "My Awesome SPA Blog"
		},
		"theme": {
			"name": "Started Theme",
			"cssPaths": ["css/starter-theme.css"],
			"templateCachePath": "js/starter-theme.template-cache.js",
			"options": {
				"useFourColumnLayout": true,
				"primaryColor": "pink",
				"accentColor": "blue"
			}
		}
	});
	
});

```

