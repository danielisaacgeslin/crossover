(()=>{
	'use strict';
	angular.module('app').controller('mainController', mainController);

	mainController.$inject = ['$scope'];
	function mainController($scope){
		const vm = this;
		vm.test = 'asd';
	}
})();
