fm.Package("com.reader.source");
fm.Include("com.reader.source.SourceList");
fm.Import("com.reader.source.Source");
fm.Class("Sources", "com.reader.abstract.ItemList");
com.reader.source.Sources = function (base, me, Source, ItemList) {
    'use strict';
    this.setMe = function (_me) { me = _me; };
    this.Sources = function () {
		dataLoaded = null;
	    base(this.getSelected (), Source);
    }

    this.getSelected = function(){
        dataLoaded = [];
        try{
			var arr =  JSON.parse(localStorage.selecteFeedSource || undefined) || [];
            for(var i=0; i < sourceList.length; i++){
				if(arr.indexOf(sourceList[i].id) !== -1){
					dataLoaded.push(sourceList[i]);
				}
			}
        }catch(e){
            dataLoaded = sourceList;
        }
        return dataLoaded;
    };

	this.next = function(id){
		var item = this.getById(id);
		var index = this.items.indexOf(item);
		return this.items[index+1].id;
	}

	this.prev = function(id){
		var item = this.getById(id);
		var index = this.items.indexOf(item);
		return this.items[index-1].id;
	}

    this.getArticles = function(id, cb){
        return this.getById(id).getArticles(cb);
    };

	var dataLoaded;

    Static.getData = function(){
		if(sourceList){
			return sourceList;
		}
    }

    var instance;
    Static.getInstance = function () {
		if(!instance) instance = new com.reader.source.Sources();
		return instance;
    };

	this.resetItems = function(){
		this.base.constructor(this.getSelected(), Source);
	};
};

window.onerror = function(e){
	alert(e + "");
}