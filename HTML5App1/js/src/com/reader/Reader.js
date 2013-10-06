fm.Package("com.reader");
fm.Import("com.reader.store.FeedList");
fm.Import("com.reader.setting.Settings");
fm.Include("lib.ReadFile");
fm.Import("com.reader.hash.RegisterHash");
fm.Include("lib.parser");
fm.Class("Reader");
com.reader.Reader = function (me, FeedList,  Settings, RegisterHash){this.setMe=function(_me){me=_me;};
    'use strict';
    this.setMe = function (_me) { me = _me };
    Static.main = function () {

		if(location.href.indexOf('http') !== -1){
			window.external = {notify:function(){}};
		} 
		new RegisterHash();
	};
};
