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
