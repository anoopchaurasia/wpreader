fm.Package("jfm.dom"),fm.Class("DomManager"),jfm.dom.DomManager=function(e){function t(e,n){var r,i,s=[];for(var o=0,u=e.length;o<u;o++)s.push(e[o]);for(var o=0,u=s.length;o<u;o++){r=$(s[o]).data("actionObj");for(var a in r){i=r[a](s[o],n);if(i===!1)break}i!==!1&&t(s[o].childNodes,n)}}this.setMe=function(t){e=t},this.DomManager=function(e,n){this.el=e,t([e[0]],n)}};
fm.isMinified=true;
