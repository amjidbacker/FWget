var gDebug = false;

//this holds all the registered protocols like http:// https:// and others
var protocols = ["http://", "https://", "ftp://"];

function log(str){
	if(!gDebug)
		return;
	dump("FireGet: " + str + "\n");
}

//returns false if the string is not a valid link, and true if it is
function checkString(str){
	if (str == null)
		return false;
	log("checkString " + str);
	for (var i = 0; i < protocols.length; ++i){
		if (str.indexOf(protocols[i]) == 0)
			return true;
	}
	return false;
}

//returns the string, that this object points to, or null
function checkLink(link){
	//log("checkLink: " + link + " typeof " + typeof link);
	//alert ("typeof: " + (typeof str));
	//alert ("substring: " + str.substring(0, 4));
/*
	if (checkString(link.toString())){
		log("seems to be a link string\n");
		return link.toString();
	}
*/	
	if (link.href){
		//log("link.href: " + link.href + " typeof " + typeof link.href + "\n");
		if (checkString(link.href)){
			log("link");
			return link.href;
		}
	}

	if (link.parentNode){
		var node = link.parentNode;
		while (node){
			log("node: " + node);
			if (checkString(node.href)){
				log("looks like a link");
				return node.href;
			}
			node = node.parentNode;
		}
	}

	log("not link");
	return null;
}

//this invokes gwget "link"
//warning: the function assumes, that link is not quoted and is a string
function run(link){
	//this is /usr/bin/gwget
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	file.initWithPath("/usr/bin/gedit");
	
	//alert("quering nsIProcess");
	var proc = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
	proc.init(file);

	// Run the process.
	// If first param is true, calling process will be blocked until
	// called process terminates. 
	// Second and third params are used to pass command-line arguments
	// to the process.
	//alert("running...");
	var args = [link];
	log("args[0] = " + args[0] + " args.length = " + args.length);
	proc.run(false, args, args.length);
}

