describe('mainController', function(){
  var $scope, $q, controller, storeService;
  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $q, $controller, storeService){
    $scope = $rootScope.$new();
    controller = $controller('mainController', {
        '$scope': $scope,
        '$q': $q,
        'storeService': storeService
    });
  }));

  it('should pass', function(){
    expect(controller.visibleRow).toBe(null);
    controller.toggleVisibleRow(1);
    expect(controller.visibleRow).toBe(1);
    controller.toggleVisibleRow(1);
    expect(controller.visibleRow).toBe(null);
  });
});
