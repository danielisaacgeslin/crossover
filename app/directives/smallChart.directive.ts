(()=>{
  'use strict';
  angular.module('app').directive('smallChart',smallChart);

  smallChart.$inject = [];

  function smallChart(): ng.IDirective{
    return {
      restrict: 'E',
			templateUrl: 'smallChart.directive.html',
			link: link,
			scope: {
					percentage: '=',
          state: '='
			}
    };
    function link($scope: any, $element: JQuery, $attr: ng.IAttributes){

    }
  }

})();
