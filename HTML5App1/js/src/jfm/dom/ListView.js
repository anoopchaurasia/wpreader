/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
fm.Package("jfm.dom");
fm.Import("jfm.dom.DomManager");
fm.Class("ListView");
jfm.dom.ListView = function (me, DomManager){this.setMe=function(_me){me=_me;};   
    var copyNode, newScopeC, scope;
    this.ListView = function(list){
    	this.items = list;
    	newScopeC = function(){};
    };
    this.add = function(item){
    	if(jQUery.isArray(list)){
    		for(var i=0, len = list.length; i< len; i++){
    			this.add(list[i]);
    		}
    	}
    	else{
    		this.items.push(item);
    	}
    };

    this.createView = function(n, s, exp, endCB){
    	scope = s;
    	copyNode = n;
    	var newScope, nextNode = $(copyNode), len=0;
        newScopeC.prototype = scope;
        for(var k in me.items){
			if(!me.items.hasOwnProperty(k)) continue;
			len++;
            newScope = new newScopeC;
            newScope[exp] = this.items[k];
            newScope.index = k;
            clone = $(copyNode).clone(true).show();
			(function(clone, newScope, k){
				//setTimeout(function(){
					nextNode.after(clone);
					nextNode = clone;
					new DomManager( clone, newScope);
				//}, 30*k);
			})(clone, newScope, k);
            
        }
		endCB();
    }
};