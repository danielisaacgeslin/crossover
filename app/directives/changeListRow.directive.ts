(()=>{
  'use strict';
  angular.module('app').directive('changeListRow',changeListRow);

  changeListRow.$inject = ['processService'];

  function changeListRow(processService: any): ng.IDirective{
    return {
      restrict: 'A',
			templateUrl: 'changeListRow.directive.html',
			link: link,
			scope: {
					changeListItem: '=',
          expanded: '='
			}
    };
    function link($scope: any, $element: JQuery, $attr: ng.IAttributes){
      
    }
  }

})();
