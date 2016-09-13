function getPages(){
	var pages={
			"login":{"url":"login.html","title":"POS"},
			"outlet":{"url":"outlet.html","title":"OUTLET"},
			"table":{"url":"table.html","title":"TABLE"},
			"item":{"url":"item.html","title":"ITEMS"}
		}; 
	return pages;
}
function footerController(footer){
	var menu ='';
	if(footer=="POS"){
		menu= '<p class="footerMenu" style="font-size: 15px;">@ MySoftIndia.</p>';
	}else if(footer=="ITEMS"){
		menu= getItemMenu();
	}
	var footerMenu =""; 
	footerMenu=angular.element(document.querySelector('#footer'));
	footerMenu.empty().append(menu); 
}
function getItemMenu(){
	var menus='<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 footerMenu">M1</div>'
		+'<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 footerMenu">M2</div>'
		//+'<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 footerMenu">M3</div>'
		+'<div class="icon-shopping-cart icon-1x col-xs-4 col-sm-4 col-md-4 col-lg-4 footerMenu ">'
		+'<span class="cart-total" id="total-qty">0</span>'
		+'</div>';
		return menus;
}

function getOutlets(){
	var outlets=[{"outletName":"OUT1"},
                {"outletName":"OUT2"},
				{"outletName":"OUT3"},
				{"outletName":"OUT4"},
				{"outletName":"OUT5"},
				{"outletName":"OUT6"}];
	
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



function qtyPlus($event){
	var id=$event.target.getAttribute("id");
	var idval = id.slice(8);
	var qty = $('#qty'+idval).text();
	var totqty = $('#total-qty').text();
	var plus = Number(qty)+1;
	$('#qty'+idval).text(plus);
	$('#total-qty').text(Number(totqty)+plus-Number(qty));
	$('#qty-minus'+idval).css("color","red");
}

function qtyMinus($event){
	var id=$event.target.getAttribute("id");
	var idval = id.slice(9);
	var qty = $('#qty'+idval).text();
	var totqty = $('#total-qty').text();
	if(!Number(qty)==0){
		var minus = Number(qty)-1;
		$('#total-qty').text(Number(totqty)-1);
		if(minus==0){
			$('#'+id).css("color","rgba(255, 0, 0, 0.42)");
		}
		$('#qty'+idval).text(minus);
	}
}






