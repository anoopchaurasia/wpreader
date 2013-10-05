fm.Package("com.reader.controller");
fm.Class("AddFeedSourceController", 'jfm.dom.Controller');
com.reader.controller.AddFeedSourceController = function (base, me) {
    'use strict';
    this.setMe = function (_me) { me = _me; };

    this.AddFeedSourceController = function () {
		base();
		this.createDom("/html/addfeedsource.html", function(dom){
            $('body').append( dom.el );
			me.el = dom.el;
			me.submit.click(formSubmit);
        });
    };

	function formSubmit(e){
		e.preventDefault();
		jQuery.get("http://cloud.feedly.com/v3/search/feeds?q="+me.name.val()+"&n=1", addResult).fail(function(resp){
			alert("fail");
 		});
		return false;
	}

	function addResult(data){
 		var results = data.results;
		var obj;
		for(var k=0; k<results.length; k++){
			obj = {
				"website": results[k].website,
				"url": results[k].feedId.replace("feed/", ""),
				"type": "Tech",
				"id": Math.floor(Math.random()*10000000000)*123456,
				"name": results[k].title,
				"thumbnail": "/img/favicon/1001.png",
				"full": true
			}
		}
		sourceList.push(obj);
		$(me.el).remove();
	}
};