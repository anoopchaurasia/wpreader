fm.Package("com.reader.article"),fm.Import("lib.Utility"),fm.Class("Article"),com.reader.article.Article=function(e,t){this.setMe=function(t){e=t},this.setMe=function(t){e=t},"use strict",this.Article=function(n,r){this.title=n.title,this.link=n.link,this.id=r+1;try{e.img=[];for(var i=0;i<n.mediaGroups[0].contents.length;i++)e.img.push(n.mediaGroups[0].contents[i]);e.thumbnail=n.mediaGroups[0].contents[0].thumbnails[0].url}catch(s){}this.contentSnippet=n.contentSnippet,this.content=t.stripHTML(n.content)}};
fm.isMinified=true;
