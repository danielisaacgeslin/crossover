describe('mainController', function(){
  var $scope, controller;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    controller = $controller('mainController', {
        '$scope': $scope
    });
  }));

  it('should pass', function(){
    expect(controller.test).toEqual('testing this controller');
  });
});
