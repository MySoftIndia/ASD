
/// <reference path="KotOperation" />	
var mySoft=angular.module("mySoft",[]);
	mySoft.controller("MySoftController",function($scope,$rootScope){
		$rootScope.pages = getPages();
		$rootScope.contentArea = $rootScope.pages.outlet.url; 
		$rootScope.headerTitle=$rootScope.pages.outlet.title;
		
	}); 
	mySoft.controller("outletController",function($scope,$rootScope){
		$scope.outlets=getOutlets();
		$scope.getOutlet=function($event){
			$rootScope.contentArea = $rootScope.pages.table.url; 
			$rootScope.headerTitle=$rootScope.pages.table.title;
		};
	});
	mySoft.controller("tableController",function($scope,$rootScope){
		$scope.tables=getTables();
		$scope.getTable=function($event){
			alert($event.target.getAttribute("tble"));
			$rootScope.contentArea = $rootScope.pages.item.url; 
			$rootScope.headerTitle=$rootScope.pages.item.title; 
		};
	});

	mySoft.controller("itemController",function($scope,$rootScope,$compile){
		//$scope.outletName="out1";
		$scope.items=getItems();
		$scope.getItem=function(itemName,rate){
			alert(itemName +" " +rate);
		};
		var menu = angular.element( document.querySelector( '#footer' ) );
		menu.append(getItemMenu());  
	});
	
