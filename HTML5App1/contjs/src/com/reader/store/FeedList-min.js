fm.Package("com.reader.store"),fm.Include("lib.idbStore"),fm.Class("FeedList"),com.reader.store.FeedList=function(e){this.setMe=function(t){e=t},"use strict";var t;Static.main=function(){t=new e},this.shortHand="FeedList";var n;this.FeedList=function(){this.storeName="feeds",this.storePrefix="column-reader-",this.keyPath="id",this.autoIncrement=!0,this.dbVersion=16,this.indexes=[{name:"type"},{name:"name"},{name:"inlist"},{name:"id",keyPath:"id",unique:!0}],n=new IDBStore(this)};var r;this.getAll=function(e){n.getAll(e)},this.remove=function(e,t,r){n.remove(e,t,r)},this.getSelected=function(t,i){if(!n.db){console.log("345"),r=function(){e.getSelected(t,i)};return}console.log("caleed"),n.query(t,{index:"inlist",keyRange:n.makeKeyRange({lower:"true",upper:"true",onError:i})})},this.onError=function(e){alert(e)},this.onStoreReady=function(){n.get(1e3,function(t){t?r&&r():(fm.Include("com.reader.source.SourceList"),setTimeout(function(){e.add(sourceList,function(){r&&r()})}))})},this.add=function(e,t,r){if(jQuery.isArray(e)){var i=[];for(var s=0;s<e.length;s++)i.push({type:"put",value:e[s]});n.batch(i,function(e){t(e)},r)}else n.put(e,function(e){t(e)},r)},this.getById=function(e,t){n.get(e,t)},this.clear=function(){n.clear()},Static.getInstance=function(){return t}};
fm.isMinified=true;
