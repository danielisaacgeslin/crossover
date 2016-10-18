(()=>{
	'use strict';
	angular.module('app').controller('mainController', mainController);

	mainController.$inject = ['$scope', '$q', 'storeService'];
	function mainController($scope: ng.IScope, $q: ng.IQService, storeService: any){
		const vm = this;
		vm.changeList =[];
		vm.visibleRow = null;

		vm.toggleVisibleRow = toggleVisibleRow;

		_init();

		function _init(): void{
			_getChangeList();
		}

		function _getChangeList(): ng.IPromise<IChangeListItem[]>{
			return storeService.getChangeList().then(data=>{
				vm.changeList = <IChangeListItem[]>data;
				console.log(vm.changeList);
			});
		}

		function toggleVisibleRow(index){
			vm.visibleRow = vm.visibleRow === index ? null : index;
		}

	}
})();
