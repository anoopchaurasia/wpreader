fm.Package("com.reader.store");
fm.Include("lib.idbStore");
fm.Class("FeedList");
com.reader.store.FeedList = function (me){this.setMe=function(_me){me=_me;};
    'use strict';
	var instance;
	Static.main = function (){
		instance = new me();
	};
	this.shortHand = "FeedList";
	
	var myStore;
	this.FeedList = function(){
        this.storeName = "feeds";
        this.storePrefix = "column-reader" + "-";
        this.keyPath = 'id';
		this.autoIncrement = true;
        this.dbVersion = 8.0;
        this.indexes = [
            {
                name: 'type'
            },
			{
                name: 'name'
            },
			{
                name: 'inlist'
            },
            {
                name: 'id',
                keyPath: 'id',
                unique: true
            }
        ];
        myStore = new IDBStore(this);
	};
	var cb;

	this.getAll = function(cb){
		myStore.getAll(cb);
	};

	this.remove = function (id, cb, ecb) {
        myStore.remove(id, cb, ecb);
    };

	this.getSelected = function(cb, ecb){
		if(!myStore.db){
			cb = function(){me.getSelected(cb, ecb)};
			return;
		}
		 myStore.query(cb, {
            index: "inlist",
            keyRange: myStore.makeKeyRange({
                lower: "true",
                upper: "true",
                onError: ecb
            })
        });
	};

	 this.onError = function (error) {
         alert(error);
    };

	this.onStoreReady = function () {
        myStore.getAll(function(a){
			if(a.length === 0){
				fm.Include("com.reader.source.SourceList");
				me.add(sourceList, function(){
					cb && cb();
				});
			}else{
				cb && cb();
			}

			
		});
    };

	this.add = function (feed, cb, ecb) {
       if (jQuery.isArray(feed)) {
            var arr = [];
            for (var k = 0; k < feed.length; k++) {
                arr.push({
                    type: "put",
                    value: feed[k]
                });
            }
            myStore.batch(arr, function (s) {
                cb(s);
            }, ecb);
        } else {
            myStore.put(feed, function (s) {
                cb(s);
            },ecb);
        }
    };

	this.getById = function(id, cb){
		myStore.get(id, cb);
	};

    this.clear = function () {
        myStore.clear();
    };

	Static.getInstance = function(){
		return instance;
	};
};
