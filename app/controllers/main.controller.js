(function () {
    'use strict';
    angular.module('app').controller('mainController', mainController);
    mainController.$inject = ['$scope', '$q', 'storeService'];
    function mainController($scope, $q, storeService) {
        var vm = this;
        vm.changeList = [];
        init();
        function init() {
            getChangeList();
        }
        function getChangeList() {
            return storeService.getChangeList().then(function (data) {
                vm.changeList = data;
                console.log(vm.changeList);
            });
        }
    }
})();
