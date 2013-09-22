fm.Package("com.reader.controller");
fm.Import("com.reader.source.Sources");
 fm.Import("com.reader.setting.Settings");
fm.Import("com.reader.controller.SettingsController");
fm.Class("ActionController", 'jfm.dom.Controller');
com.reader.controller.ActionController = function (base, me, Sources, Settings, SettingsController) {
    'use strict';
    this.setMe = function (_me) { me = _me; };

    this.ActionController = function () {
    	this.settings = Settings.getInstance();
    };

    this.settingLoad = function(){
        this.createDom("/html/settings.html", function(dom){
            $('body').append( dom.el );
        });
    };
};