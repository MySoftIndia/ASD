
/// <reference path="KotOperation" />	
var mySoft=angular.module("mySoft",[]);
	mySoft.controller("MySoftController",function($scope,$rootScope){
		$rootScope.pages = getPages();
		$rootScope.contentArea = $rootScope.pages.login.url; 
		$rootScope.headerTitle=$rootScope.pages.login.title;
		footerController($rootScope.pages.login.title); 
		$rootScope.detail=true;
		
		
	});
	mySoft.controller("loginController",function($scope,$rootScope){
		$scope.loginSubmit=function(){
			alert($scope.userId);
			$rootScope.detail=false;
			$rootScope.userId=$scope.userId;
			
			$rootScope.contentArea = $rootScope.pages.outlet.url; 
			$rootScope.headerTitle=$rootScope.pages.outlet.title;
		};
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
			footerController($rootScope.pages.item.title);
		};
		$rootScope.pageMove=function(){
			$rootScope.contentArea = $rootScope.pages.outlet.url;
			$rootScope.headerTitle=$rootScope.pages.outlet.title;
			footerController($rootScope.pages.login.title);
		};
	});
	mySoft.controller("itemController",function($scope,$rootScope,$compile){
		//$scope.outletName="out1";
		$scope.items=getItems();
		$scope.getItem=function(itemName,rate){
			alert(itemName +" " +rate);
		};
		$scope.qtyPlus = function($event){
			qtyPlus($event);
		};
		$scope.qtyMinus = function($event){
			qtyMinus($event);
		};
		$rootScope.pageMove=function(){
			$rootScope.contentArea = $rootScope.pages.table.url;
			$rootScope.headerTitle=$rootScope.pages.table.title;
			footerController($rootScope.pages.login.title);
		};
	});
	
