fm.Package("com.reader.abstract"),fm.AbstractClass("ItemList"),com.reader.abstract.ItemList=function(e){this.setMe=function(t){e=t},"use strict",this.setMe=function(t){e=t},this.ItemList=function(e,t){this.items=[];for(var n=0;n<e.length;n++)this.items.push(new t(e[n],n))},this.getById=function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].id===e)return this.items[t]},this.add=function(e){this.items.push(e)}};
fm.isMinified=true;