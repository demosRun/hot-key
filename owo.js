module.exports = {
	"basePath": "./",
	"debug": true,
	"watcher": {
		"enable": true,
		"ignored": "./dist/*",
		"depth": 99
	},
	"outPut": {
		"merge": true,
		"minifyCss": false,
		"minifyJs": false,
		"addVersion": false,
		"allAnimate": false
	},
	"serverPort": 8000,
	"server": true,
	"autoReload": true,
	"remoteDebug": false,
	"root": "/src",
	"title": "{TAG_14226_TAG}",
	"scheme": [],
	"outFolder": "./dist",
	"container": "scale-box",
	"resourceFolder": "./src/resource",
	"headList": [{
		"http-equiv": "content-type",
		"content": "text/html; charset=UTF-8"
	}, {
		"name": "viewport",
		"content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
	}, {
		"name": "format-detection",
		"content": "telephone=no, email=no"
	}, {
		"name": "apple-mobile-web-app-capable",
		"content": "yes"
	}, {
		"name": "apple-mobile-web-app-status-bar-style",
		"content": "white"
	}, {
		"name": "renderer",
		"content": "webkit"
	}, {
		"http-equiv": "X-UA-Compatible",
		"content": "IE=edge,chrome=1"
	}, {
		"name": "filetype",
		"content": "1"
	}, {
		"name": "publishedtype",
		"content": "1"
	}, {
		"name": "pagetype",
		"content": "2"
	}, {
		"name": "screen-orientation",
		"content": "landscape"
	}, {
		"name": "x5-orientation",
		"content": "landscape"
	}, {
		"name": "full-screen",
		"content": "yes"
	}, {
		"name": "x5-fullscreen",
		"content": "true"
	}, {
		"name": "browsermode",
		"content": "application"
	}, {
		"name": "x5-page-mode",
		"content": "app"
	}],
	"scriptList": [{
		"name": "jquery1.11.0",
		"src": "http://tools.people.com.cn/libs/jquery/1.11.1/jquery-1.11.1.min.js"
	}, {
		"name": "swiper.4.5.0",
		"src": "./src/resource/swiper.4.5.0.min.js"
	}, {
		"name": "main",
		"src": "./src/main.js",
		"resource": true
	}, {
		"name": "html2canvas.min",
		"src": "./src/resource/html2canvas.min.js",
		"resource": true
	}],
	"styleList": [{
		"name": "main",
		"src": "./src/main.css",
		"resource": true
	}, {
		"name": "swiper4.5.0",
		"src": "./src/resource/swiper.4.5.0.min.css"
	}],
	"pageList": [{
		"name": "loading",
		"src": "./src/page/loading.owo"
	}, {
		"name": "page1",
		"src": "./src/page/page1.owo",
		"type": "page",
		"temple": "<plug name=\"page1\" src=\"./src/page/page1.owo\" type=\"page\"></plug>",
		"hash": "461576280822571fed82fd0900562ffb"
	}, {
		"name": "page2",
		"src": "/src/page/page2.owo",
		"type": "page"
	}, {
		"name": "page3",
		"src": "/src/page/page3.owo",
		"type": "page"
	}],
	"mode": {
		"dev": {
			"basePath": "./",
			"debug": true,
			"watcher": {
				"enable": true,
				"ignored": "./dist/*",
				"depth": 99
			},
			"outPut": {
				"merge": true,
				"minifyCss": false,
				"minifyJs": false,
				"addVersion": false,
				"allAnimate": false
			},
			"serverPort": 8000,
			"server": true,
			"autoReload": true,
			"remoteDebug": false
		},
		"build": {
			"debug": false,
			"basePath": "./",
			"alertLink": false,
			"route": {
				"startAtHome": true
			},
			"outPut": {
				"minifyCss": false,
				"minifyJs": false,
				"addVersion": true,
				"embedSize": 0,
				"merge": false,
				"allAnimate": false
			}
		}
	}
}