(()=>{
	'use strict';
	angular.module('app').controller('mainController', mainController);

	mainController.$inject = ['$scope', '$q', 'storeService'];
	function mainController($scope: ng.IScope, $q: ng.IQService, storeService: any){
		const vm = this;
		let changeList: IChangeListItem[] = [];

		init();

		function init(): void{
			getChangeList();
		}

		function getChangeList(): ng.IPromise<IChangeListItem[]>{
			return storeService.getChangeList().then(data=>{
				changeList = data;
			});
		}

	}
})();
