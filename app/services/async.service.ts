(()=>{
  'use strict';
  angular.module('app').factory('asyncFactory', asyncFactory);

  asyncFactory.$inject = ['$http', '$q', 'constants'];
  function asyncFactory($http: ng.IHttpService, $q: ng.IQService, constants: any){
    const API = constants.API;
    return {
      getChangeList: getChangeList
    };

    function getChangeList(){
      return $http.get(API.concat('getChangeList.json'));
    };
  }
})();
