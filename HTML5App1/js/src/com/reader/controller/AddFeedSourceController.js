fm.Package("com.reader.controller");
fm.Import("jfm.html.DomManager");
fm.Class("AddFeedSourceController", 'com.reader.controller.MainController');
com.reader.controller.AddFeedSourceController = function (base, me, DomManager) {
    'use strict';
    this.setMe = function (_me) { me = _me; };

    this.AddFeedSourceController = function () {
		$(window).scrollTop(0);
    	 this.getTemplate("/html/addfeedsource.html", function(template){
            var dom = new DomManager(template, me);
			me.el = dom.el;
			me.feedform.submit(formSubmit);
            $('body').append( dom.el );
        });
    };

	function formSubmit(e){
		e.preventDefault();
 		var list = [];
		try{
			list = JSON.parse(localStorage.addedsources) || [];
		}catch(e){
			list = [];
		}
		var newSource = {
            id: 8 + list.length,
            url: me.url.val(),
            name: me.name.val(),
            thumbnail: me.logo.val()
        };
 		list.push(newSource);
		localStorage.addedsources = JSON.stringify(list);
 		jQuery(me.el).remove();
		return false;
	}
};