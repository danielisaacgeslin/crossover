(()=>{
  'use strict';
  angular.module('app').directive('changeListRow',changeListRow);

  changeListRow.$inject = [];

  function changeListRow(): ng.IDirective{
    return {
      restrict: 'A',
			templateUrl: 'changeListRow.directive.html',
			link: link,
			scope: {
					changeListItem: '=',
			}
    };
  }

  function link($scope: any, $element: JQuery, $attr: ng.IAttributes){
    console.log($scope.changeListItem);
  }
})();
