function getCookie(key){
	var acookie = document.cookie.split("; ");

	for(var i=0; i<acookie.length; i++){
		var acook = acookie[i].split("=");
		if(acook[0] == key){
			return acook[1];
		}
	}

	return null;
}
function setCookie(key,value,days){
	var date = new Date();
	if(days) date.setDate(date.getDate()+days);
	console.log(key,value,days);
	document.cookie = key+"="+value+"; expires="+date;
}
function removeCookie(key){
	
	setCookie(key,"",-1);

}