fm.Package("jfm.dom"),fm.Import("jfm.dom.DomManager"),fm.Class("ListView"),jfm.dom.ListView=function(e,t){function u(e){s.length?s[s.length-1].after(e):nextNode.after(e)}function a(e,o){var a=new r;a[i]=e,a.index=o;var f=n.clone(!0);u(f),s.push(f),new t(f,a)}this.setMe=function(t){e=t},"use strict";var n,r,i,s,o;this.ListView=function(e){o=jQuery.isArray(e),this.items=e,s=[],r=function(){}},this.add=function(t){if(!n){setTimeout(function(){e.add(t)},30);return}if(jQuery.isArray(t))for(var r=0,i=t.length;r<i;r++)this.add(t[r]);else if(o)this.items.push(t),a(this.items[this.items.length-1],this.items.length-1);else{this.clear(),e.items=t;for(var s in e.items){if(!e.items.hasOwnProperty(s))continue;a(e.items[s],s)}}},this.remove=function(t,n){if(o){var r=this.items.indexOf(t);s.splice(r,1)[0].remove(),this.items.splice(r,1)}else{var r=0;for(var i in e.items){if(!e.items.hasOwnProperty(i))continue;r++;if(i===n)break}delete e.items[n],s.splice(r-1,1)[0].remove()}},this.clear=function(){var e;while(e=s.pop())e.remove()},this.createView=function(t,s,o){n=$(t),i=o,r.prototype=s,nextNode=n,n=nextNode.clone(!0).show();for(var u in e.items){if(!e.items.hasOwnProperty(u))continue;a(e.items[u],u)}}};
fm.isMinified=true;
