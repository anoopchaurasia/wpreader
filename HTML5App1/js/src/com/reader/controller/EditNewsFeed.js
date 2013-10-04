fm.Package("com.reader.controller");
fm.Class("EditNewsFeed", 'jfm.dom.Controller');
com.reader.controller.EditNewsFeed = function (base, me, Controller) {
    'use strict';
    this.setMe = function (_me) { me = _me; };
	var storageList;
    this.EditNewsFeed = function () {
        storageList = [];
		window.external.notify("loading");
		try{
			 storageList = JSON.parse(localStorage.selecteFeedSource) || [];
		}catch(e){
			storageList =[];
		};
        var arr =  com.reader.source.Sources.getData();
		var types = {};
		for(var k=0, len=arr.length;k<len; k++){
			types[arr[k].type] = types[arr[k].type] || [];
			types[arr[k].type].push(arr[k]);
		}
		this.FeedList = types;
    };

	this.isInList = function(feed){
		return storageList.indexOf(feed.id) !== -1 ;
	};

    this.domchange = function(data, value){
		
		if(data[value]){
			storageList.push(data.id);
		}else{
			var index = storageList.indexOf(data.id);
			storageList.splice(index, 1);
		}
        localStorage.selecteFeedSource = JSON.stringify(storageList);
		com.reader.source.Sources.getInstance().resetItems();
    };

    this.onStart = function(keys, cb){
		cb();
		me.feedlistContainer.height(window.innerHeight- me.feedlistContainer.position().top - 5);
		window.external.notify("loading complete");		
    }
    this.onStop = function(keys, cb){
		window.external.notify("loading complete");
    }
};