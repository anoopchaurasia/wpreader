fm.Package("com.reader.hash");
fm.Import("com.reader.setting.SettingsController");
fm.Import("com.reader.view.Home");
fm.Import("com.reader.view.NewsList");
fm.Import("com.reader.view.Article");
fm.Class("RegisterHash","jfm.hash.HashChange");
com.reader.hash.RegisterHash = function(base, me, Article, Home, NewsList){this.setMe=function(_me){me=_me};
    'use strict';
    var lastState = {}; 
    this.RegisterHash = function () {
        base();
        this.route =[
           {
                path: "/source",
                view: Home
           },
		   {
				path:"/source/:sourceId",
				view: NewsList 
		   }
           ,
            {
                path: "/source/:sourceId/article/:articleId",
                view: Article
            }
        ];
        this.defaultRoute = "/source";
        this.base.activateCurrent();
    };
};