(()=>{
	'use strict';
	class MainController implements ng.IController{
		static $inject: string[] = ['$scope'];
		public test: string;

		constructor(private $scope: ng.IScope){
			this.test = 'testing this controller';
		}
	}
	angular.module('app').controller('mainController', MainController);
})();
