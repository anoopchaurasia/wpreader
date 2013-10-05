fm.Package('lib');
fm.Class("ReadFile");
lib.ReadFile = function (me) {
	this.setMe = function (_me) { me = _me; };
	var cbs;
	this.shortHand = "ReadFile";
	Static.get = function(url, cb){
		cbs[url] = cb;
		setTimeout(function(){
			window.external.notify(url);
		},10);
	};

	Static.main = function(){
		cbs = {};
		window.filecontent = function(content){
			var arr = content.split("@|$");
			if(cbs[arr[0]]){
				if( !arr[1] ){alert("no data for " + arr[0])};
 				cbs[arr[0]](arr[1]);
				delete cbs[arr[0]];
				
			}else{
				alert("no cb for " + cbs[arr[0]]);
			}
		};
	}
}