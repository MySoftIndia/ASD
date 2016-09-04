function getPages(){
	var pages={
			"outlet":{"url":"outlet.html","title":"OUTLET"},
			"table":{"url":"table.html","title":"TABLE"},
			"item":{"url":"item.html","title":"ITEMS"}
		}; 
	return pages;
}
function getItemMenu(){
	var menus='<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 footerMenu">M1</div>'
		+'<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 footerMenu">M2</div>'
		+'<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 footerMenu">M3</div>'
		+'<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 footerMenu">M4</div>';
		return menus;
}

function getOutlets(){
	var outlets=[{"outletName":"out1"},
                {"outletName":"out2"},
				{"outletName":"out3"},
				{"outletName":"out4"},
				{"outletName":"out5"},
				{"outletName":"out6"}];
	
	return outlets;
}
function getTables(){
	var tables=[{"tableName":"1"},
                {"tableName":"2"},
				{"tableName":"3"},
				{"tableName":"4"},
				{"tableName":"5"},
				{"tableName":"6"},
				{"tableName":"7"},
				{"tableName":"8"}];
		return tables;
}
function getItems(){
	var items=[{"itemName":"item-1",
				"rate":"20"},
               {"itemName":"item-2",
            	 "rate":"20"},
				{"itemName":"item-3",
            	  "rate":"20"},
				{"itemName":"item-4",
            	  "rate":"20"},
				{"itemName":"item-5",
            	  "rate":"20"},
				{"itemName":"item-6",
            	  "rate":"20"},
				{"itemName":"item-7",
            	  "rate":"20"},
				{"itemName":"item-8",
            	 "rate":"20"}];
	return items;
}


