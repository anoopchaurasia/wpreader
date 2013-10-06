fm.Package("com.reader.source");
fm.Import("com.reader.source.Sources");
 fm.Import("com.reader.setting.Settings");
fm.Class("SourceController", 'jfm.dom.Controller');
com.reader.source.SourceController = function (base, me, Sources, Settings, Controller) {
    'use strict';
    this.setMe = function (_me) { me = _me; };
    var windowResize, dontRender;
    this.SourceController = function (lastState) {
    	base();
		$(window).scrollTop(0);
        me.settings = Settings.getInstance();
		me.sources = Sources.getInstance();
		me.sources.items = [];
        FeedList.getInstance().getSelected(function(list){
			if(me["$sources.items"]){
				list.length && me.addInfo.hide();
				me["$sources.items"].add(Sources.convert(list));
			}else{
				me.sources.items = Sources.convert(list);
			}
		});
        windowResize = me.settings.on('window-resize', function(){
            me.callAll("change");
        });
    };

    function setValues(){
        me.hideText = window.innerWidth * 15/100 < 150;
    }
	
	this.afterRender = function(){
        var oldScrollY =0;
		if(me.sources.items.length === 0)me.addInfo.show();
		me.sourceListCont.height(window.innerHeight - me.sourceListCont.position().top-2);
    };

    this.reRender = function(){
        return false;
    };

    this.onStart = function(keyValue, cb){
        cb(dontRender);
    };
    this.onStop = function(cb){
        windowResize();
        cb(this.sources);
    };
};
/*
setTimeout(function(){

alert(fm.getMissingClass());
}, 1000);
*/