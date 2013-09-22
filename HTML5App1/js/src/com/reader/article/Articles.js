fm.Package("com.reader.article");
fm.Import("com.reader.article.Article");
fm.Class("Articles", "com.reader.abstract.ItemList");
com.reader.article.Articles = function (base, me, Article, ItemList) {
    'use strict';
    this.setMe = function (_me) { me = _me };

    this.Articles = function (feed) {
	    this.title = feed.title;
	    base(feed.entries, Article);
	    com.reader.article.Articles.setInstance(me);
	};

	var instance ;
	Static.setInstance = function(i){
		instance = i;
	};
	Static.getInstance = function () {
		return instance;
	};
};
