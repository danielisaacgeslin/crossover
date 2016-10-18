(()=>{
	'use strict';
	angular.module('app').controller('mainController', mainController);

	mainController.$inject = ['$scope', '$q', 'storeService'];
	function mainController($scope: ng.IScope, $q: ng.IQService, storeService: any){
		const vm = this;
		vm.changeList =[];

		init();

		function init(): void{
			getChangeList();
		}

		function getChangeList(): ng.IPromise<IChangeListItem[]>{
			return storeService.getChangeList().then(data=>{
				vm.changeList = <IChangeListItem[]>data;
				console.log(vm.changeList);
			});
		}

	}
})();
