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
                console.log(vm.changeList);
            });
        }
        function toggleVisibleRow(index) {
            vm.visibleRow = vm.visibleRow === index ? null : index;
        }
    }
})();
