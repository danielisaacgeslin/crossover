(()=>{
  'use strict';
  angular.module('app').directive('changeListDetail',changeListDetail);

  changeListDetail.$inject = ['processService'];

  function changeListDetail(processService: any): ng.IDirective{
    return {
      restrict: 'A',
			templateUrl: 'changeListDetail.directive.html',
			link: link,
			scope: {
					changeListItem: '=',
			}
    };
    function link($scope: any, $element: JQuery, $attr: ng.IAttributes){
      $scope.$watch(()=>$scope.changeListItem, getPercentages);
      function getPercentages(){
        $scope.percentages = {
          unitTest: processService.getPercentageFromObject($scope.changeListItem.unitTest),
          functionalTest: processService.getPercentageFromObject($scope.changeListItem.functionalTest)
        };
      }
    }
  }

})();
