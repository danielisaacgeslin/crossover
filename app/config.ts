(() =>{
	'use strict';
	angular.module('app').config(config).constant('constants', constants());

	function config($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('/', {
			url : '/',
			templateUrl : 'main.html',
			controller: 'mainController',
			controllerAs: 'vm'
		});
	}

	function constants(): any{
		return {
			API: '/api/'
		};
	}

})();
