fm.Package("com.reader.view"),fm.Import("com.reader.article.ArticleController"),fm.Import("com.reader.setting.SettingsController"),fm.Class("Article","jfm.dom.View"),com.reader.view.Article=function(e,t,n,r,i){this.setMe=function(e){t=e},this.setMe=function(e){t=e},this.Article=function(){this.url="/html/article.view.html",this.items=[{controller:n,template:"/html/article.html",container:"#articleContContainer"},{controller:com.reader.setting.SettingsController,template:"/html/taskmanager.html",container:"#taskmanager"}]}};
fm.isMinified=true;