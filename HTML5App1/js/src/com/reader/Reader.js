fm.Package("com.reader");
fm.Import("com.reader.setting.Settings");
fm.Import("com.reader.hash.RegisterHash");
fm.Include("lib.parser");
fm.Class("Reader");
com.reader.Reader = function (me, Settings, RegisterHash){this.setMe=function(_me){me=_me;};
    'use strict';
    this.setMe = function (_me) { me = _me };
    Static.main = function () {
		new RegisterHash();
		window.filecontent = function(content){
			alert(content);
		};
		window.external.notify("css/phone.css");
	};

};