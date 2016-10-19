(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').config(config).constant('constants', constants());
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('/', {
            url: '/',
            templateUrl: 'main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        });
    }
    function constants() {
        return {
            API: '/api/'
        };
    }
})();

},{}],2:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').controller('mainController', mainController);
    mainController.$inject = ['$scope', '$q', 'storeService'];
    function mainController($scope, $q, storeService) {
        var vm = this;
        vm.changeList = [];
        vm.visibleRow = null;
        vm.toggleVisibleRow = toggleVisibleRow;
        _init();
        function _init() {
            _getChangeList();
        }
        function _getChangeList() {
            return storeService.getChangeList().then(function (data) {
                vm.changeList = data;
            });
        }
        function toggleVisibleRow(index) {
            vm.visibleRow = vm.visibleRow === index ? null : index;
        }
    }
})();

},{}],3:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').directive('changeListDetail', changeListDetail);
    changeListDetail.$inject = ['processService'];
    function changeListDetail(processService) {
        return {
            restrict: 'A',
            templateUrl: 'changeListDetail.directive.html',
            link: link,
            scope: {
                changeListItem: '=',
            }
        };
        function link($scope, $element, $attr) {
            $scope.unitTChartObject = getChartObjectBase();
            $scope.functionalTChartObject = getChartObjectBase();
            $scope.$watch(function () { return $scope.changeListItem; }, updateCharts);
            function updateCharts() {
                $scope.unitTChartObject = setUnitTestChart();
                $scope.functionalTChartObject = setFunctionalTestChart();
            }
            function setUnitTestChart() {
                var chartObj = getChartObjectBase();
                chartObj.data.rows = [
                    { c: [{ v: 'Pass' }, { v: $scope.changeListItem.percentages.unitTest.percentages.pass }] },
                    { c: [{ v: 'Fail' }, { v: $scope.changeListItem.percentages.unitTest.percentages.fail }] }
                ];
                return chartObj;
            }
            function setFunctionalTestChart() {
                var chartObj = getChartObjectBase();
                chartObj.data.rows = [
                    { c: [{ v: 'Pass' }, { v: $scope.changeListItem.percentages.functionalTest.percentages.pass }] },
                    { c: [{ v: 'Fail' }, { v: $scope.changeListItem.percentages.functionalTest.percentages.fail }] }
                ];
                return chartObj;
            }
            function getChartObjectBase() {
                return {
                    type: 'PieChart',
                    options: {
                        legend: { position: 'none' },
                        backgroundColor: { fill: 'transparent' },
                        chartArea: { width: '100%', height: '80%' },
                        colors: ['#72ab4d', '#eb7d3d']
                    },
                    data: {
                        cols: [
                            { id: 'pass', label: 'Pass', type: 'string' },
                            { id: 'fail', label: 'Fail', type: 'number' }
                        ],
                        rows: []
                    }
                };
            }
        }
    }
})();

},{}],4:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').directive('changeListResult', changeListResult);
    changeListResult.$inject = [];
    function changeListResult() {
        return {
            restrict: 'E',
            templateUrl: 'changeListResult.directive.html',
            link: link,
            scope: {
                changeListItem: '=',
            }
        };
        function link($scope, $element, $attr) {
        }
    }
})();

},{}],5:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').directive('changeListRow', changeListRow);
    changeListRow.$inject = ['processService'];
    function changeListRow(processService) {
        return {
            restrict: 'A',
            templateUrl: 'changeListRow.directive.html',
            link: link,
            scope: {
                changeListItem: '=',
                expanded: '='
            }
        };
        function link($scope, $element, $attr) {
        }
    }
})();

},{}],6:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').directive('smallChart', smallChart);
    smallChart.$inject = [];
    function smallChart() {
        return {
            restrict: 'E',
            templateUrl: 'smallChart.directive.html',
            link: link,
            scope: {
                percentage: '=',
                state: '='
            }
        };
        function link($scope, $element, $attr) {
        }
    }
})();

},{}],7:[function(require,module,exports){
'use strict';
require('./modules/app.module');
require('./config');
require('./services/process.service');
require('./services/async.service');
require('./services/store.service');
require('./directives/changeListRow.directive');
require('./directives/changeListDetail.directive');
require('./directives/changeListResult.directive');
require('./directives/smallChart.directive');
require('./controllers/main.controller');

},{"./config":1,"./controllers/main.controller":2,"./directives/changeListDetail.directive":3,"./directives/changeListResult.directive":4,"./directives/changeListRow.directive":5,"./directives/smallChart.directive":6,"./modules/app.module":8,"./services/async.service":9,"./services/process.service":10,"./services/store.service":11}],8:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'googlechart']);
})();

},{}],9:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').factory('asyncService', asyncService);
    asyncService.$inject = ['$http', 'constants'];
    function asyncService($http, constants) {
        var API = constants.API;
        return {
            getChangeList: getChangeList
        };
        function getChangeList() {
            return $http.get(API.concat('getChangeList.json'));
        }
    }
})();

},{}],10:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').factory('processService', processService);
    processService.$inject = [];
    function processService($http, constants) {
        return {
            processChangeListItem: processChangeListItem,
            getPercentageFromObject: getPercentageFromObject
        };
        function getPercentageFromObject(obj) {
            var referencePercentage = 100;
            var keys = Object.keys(obj);
            var total = 0;
            var average;
            var percentages = {};
            keys.forEach(function (key) {
                total += obj[key];
            });
            keys.forEach(function (key) {
                percentages[key] = obj[key] * referencePercentage / total;
            });
            average = total / keys.length;
            return { items: obj, total: total, average: average, percentages: percentages };
        }
        function processChangeListItem(item) {
            return {
                id: item.id,
                type: item.type,
                owner: item.owner,
                timeStarted: item.timeStarted ? new Date(item.timeStarted) : null,
                state: item.state,
                metrics: item.metrics,
                build: item.build ? new Date(item.build) : null,
                unitTest: item.unitTest,
                functionalTest: item.functionalTest,
                percentages: {
                    metrics: getPercentageFromObject(item.metrics),
                    unitTest: getPercentageFromObject(item.unitTest),
                    functionalTest: getPercentageFromObject(item.functionalTest)
                }
            };
        }
    }
})();

},{}],11:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').factory('storeService', storeService);
    storeService.$inject = ['$q', 'asyncService', 'processService'];
    function storeService($q, asyncService, processService) {
        var changeList = [];
        return {
            getChangeList: getChangeList
        };
        function getChangeList() {
            var defer = $q.defer();
            if (changeList.length) {
                defer.resolve(changeList);
                return defer.promise;
            }
            asyncService.getChangeList().then(function (response) {
                response.data.changeList.forEach(function (item) {
                    changeList.push(processService.processChangeListItem(item));
                });
                defer.resolve(changeList);
            });
            return defer.promise;
        }
    }
})();

},{}]},{},[7]);
