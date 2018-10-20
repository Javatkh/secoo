function ajax(option){
	var xhr = new XMLHttpRequest();

	var query = "";

	if(option.method.toLowerCase() == "get"){
		query += "?";

		for(var attr in option.data){
			query += attr+"="+option.data[attr]+"&";
		}

		query = query.slice(0,-1);

	}

	xhr.open(option.method,option.url+query,true);

	xhr.setRequestHeader('Content-Type','application/json');

	xhr.send(JSON.stringify(option.data));

	xhr.onreadystatechange=function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				option.success(JSON.parse(xhr.responseText));
			}else{
				option.error(xhr);
			}
		}
	}
}