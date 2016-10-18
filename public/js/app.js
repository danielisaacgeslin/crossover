(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').config(config);
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('/', {
            url: '/',
            templateUrl: 'main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        });
    }
})();

},{}],2:[function(require,module,exports){
(function () {
    'use strict';
    var MainController = (function () {
        function MainController($scope) {
            this.$scope = $scope;
            this.test = 'testing this controller';
        }
        MainController.$inject = ['$scope'];
        return MainController;
    }());
    angular.module('app').controller('mainController', MainController);
})();

},{}],3:[function(require,module,exports){
'use strict';
require('./modules/app.module');
require('./config');
require('./controllers/main.controller');

},{"./config":1,"./controllers/main.controller":2,"./modules/app.module":4}],4:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
})();

},{}]},{},[3]);
