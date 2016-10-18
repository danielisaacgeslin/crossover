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
			}
    };
    function link($scope: any, $element: JQuery, $attr: ng.IAttributes){
      $scope.$watch(()=>$scope.changeListItem, getPercentages);
      function getPercentages(){
        $scope.percentages = {
          metrics: processService.getPercentageFromObject($scope.changeListItem.metrics).average,
          unitTest: processService.getPercentageFromObject($scope.changeListItem.unitTest).average,
          functionalTest: processService.getPercentageFromObject($scope.changeListItem.functionalTest).average
        }
      }
    }
  }

})();
