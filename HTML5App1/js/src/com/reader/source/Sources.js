fm.Package("com.reader.source");
fm.Import("com.reader.source.Source");
fm.Class("Sources", "com.reader.abstract.ItemList");
com.reader.source.Sources = function (base, me, Source) {
    'use strict';
    this.setMe = function (_me) { me = _me; };
    this.Sources = function () {
        var data = [{
            id: 1,
	        url : "http://feeds.mashable.com/Mashable",
	        name : "Mashable",
            thumbnail:"/img/logos/mashable.jpg"
        }, {
            id: 2,
	        url : "http://feeds.feedburner.com/fakingnews",
	        name : "Faking News",
            thumbnail:"/img/logos/fakingnews.jpg"
        }, {
            id: 1,
            url : "http://www.theverge.com/rss/index.xml",
            name : "The Verge",
            thumbnail:"/img/logos/verge.jpg"
        }, {
            id: 4,
            url : "http://www.engadget.com/editor/brian-heater/rss.xml",
            name : "Engadget",
            thumbnail:'/img/logos/engadget.jpg'
        }, {
            id: 5,
            url : "http://feeds.feedburner.com/liveside",
            name : "live side",
            thumbnail:'/img/logos/liveside.jpg'
        }, {
            id: 6,
            url : "http://feeds.slashgear.com/slashgear",
            name : "Slashgear",
            thumbnail:'/img/logos/slashgear.jpg'
        }, {
            id: 7,
            url : "http://feeds.feedburner.com/TechCrunch/",
            selected : true,
            name : "Tech Crunch",
            thumbnail:'/img/logos/techcrunch.jpg'
	    }];
	    base(data, Source);
    }

    this.getArticles = function(id, cb){
        this.getById(id).getArticles(cb);
    };

    var instance;
    Static.getInstance = function () {
        if (!instance) {
            instance = new com.reader.source.Sources();
        }
        return instance;
    }
}