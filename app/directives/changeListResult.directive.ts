(()=>{
  'use strict';
  angular.module('app').directive('changeListResult',changeListResult);

  changeListResult.$inject = [];

  function changeListResult(): ng.IDirective{
    return {
      restrict: 'E',
			templateUrl: 'changeListResult.directive.html',
			link: link,
			scope: {
					changeListItem: '=',
			}
    };
    function link($scope: any, $element: JQuery, $attr: ng.IAttributes){

    }
  }

})();
