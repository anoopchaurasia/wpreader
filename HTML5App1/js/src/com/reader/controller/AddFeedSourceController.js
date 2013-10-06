fm.Package("com.reader.controller");
fm.Class("AddFeedSourceController", 'jfm.dom.Controller');
com.reader.controller.AddFeedSourceController = function (base, me) {
    'use strict';
    this.setMe = function (_me) { me = _me; };

    this.AddFeedSourceController = function () {
		me.results = [];
    };

	this.onStart = function(keys, cb){
		cb();
	};

	this.afterRender = function(){
		me.listcontainer.height(window.innerHeight- me.listcontainer.position().top - 5);
		me.submit.click(formSubmit);
	}

	this.save = function(item){
		var obj = {
			"website": item.website,
			"url": item.feedId.replace("feed/", ""),
			"type": item.hint || "Other",
			"name": item.title,
			"thumbnail": "/img/favicon/100167.png",
			"full": true,
			inlist: 'true'
		}
		FeedList.getInstance().add(obj, function(){
			history.back();
		});
	};

	this.onStop = function(){
		me.name.blur();
	};

	function formSubmit(e){
		e.preventDefault();
		window.external.notify('loading');
		me.name.blur();
		jQuery.get("http://cloud.feedly.com/v3/search/feeds?q="+me.name.val()+"&n=15", addResult).fail(function(resp){
			window.external.notify('loading complete');
			alert("fail");
 		});
		return false;
	}

	function addResult(data){
		me.$results.clear();
		me.$results.add(data.results);
		window.external.notify('loading complete');
	}
};