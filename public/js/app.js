(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').config(config).constant(constants);
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
    mainController.$inject = ['$scope'];
    function mainController($scope) {
        var vm = this;
        vm.test = 'asd';
    }
})();

},{}],3:[function(require,module,exports){
'use strict';
require('./modules/app.module');
require('./config');
require('./services/async.service');
require('./controllers/main.controller');

},{"./config":1,"./controllers/main.controller":2,"./modules/app.module":4,"./services/async.service":5}],4:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
})();

},{}],5:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').factory('asyncFactory', asyncFactory);
    asyncFactory.$inject = ['$http', '$q', 'constants'];
    function asyncFactory($http, $q, constants) {
        var API = constants.API;
        return {
            getChangeList: getChangeList
        };
        function getChangeList() {
            return $http.get(API.concat('getChangeList.json'));
        }
        ;
    }
})();

},{}]},{},[3]);
