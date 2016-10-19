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

      $scope.unitTChartObject = getChartObjectBase();
      $scope.functionalTChartObject = getChartObjectBase();

      $scope.$watch(()=>$scope.changeListItem, updateCharts);

      function updateCharts(): void{
        $scope.unitTChartObject = setUnitTestChart();
        $scope.functionalTChartObject = setFunctionalTestChart();
      }

      function setUnitTestChart(): any{
        let chartObj = getChartObjectBase();
        chartObj.data.rows = [
          {c:[{v:'Pass'}, {v: $scope.changeListItem.percentages.unitTest.percentages.pass}]},
          {c:[{v:'Fail'}, {v: $scope.changeListItem.percentages.unitTest.percentages.fail}]}
        ];
        return chartObj;
      }

      function setFunctionalTestChart(): any{
        let chartObj = getChartObjectBase();
        chartObj.data.rows = [
          {c:[{v:'Pass'}, {v: $scope.changeListItem.percentages.functionalTest.percentages.pass}]},
          {c:[{v:'Fail'}, {v: $scope.changeListItem.percentages.functionalTest.percentages.fail}]}
        ];
        return chartObj;
      }

      function getChartObjectBase(): any{
        return {
          type: 'PieChart',
          options: {
            legend: {position: 'none'}
          },
          data: {
            cols: [
              {id: 'pass', label: 'Pass', type: 'string'},
              {id: 'fail', label: 'Fail', type: 'number'}
            ],
            rows: []
          }
        }
      }

    }
  }

})();
