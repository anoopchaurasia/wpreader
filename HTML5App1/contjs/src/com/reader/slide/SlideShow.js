fm.Package("com.reader.slide");
fm.Class("SlideShow");
com.reader.slide.SlideShow = function (me){this.setMe=function(_me){me=_me;};
	'use strict';
	this.SlideShow = function (images) {
		var count = 0;
		var cont = $('<div/>',{
		 height: "100%",
		 width: "100%",
		 css: {
		    'background': '#ccc',
			'opacity': .6,
			'z-index': 100
		 },
		 click: function(){
		    count++;
			cont.find('img')[0].src = images[count%images.length].url;
		 }
		}).appendTo('body');
		cont.append('<img src='+ images[0].url +'/>');
	};
};
