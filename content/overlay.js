var gstrLinkToDL = null;
var gbLastThingLink = false;

function oneLink(){
	log("Download with Gwget");
	log("Link is " + gstrLinkToDL);
	if (gstrLinkToDL != null)
		run(gstrLinkToDL);
}
