(()=>{
  'use strict';
  angular.module('app').factory('asyncService', asyncService);

  asyncService.$inject = ['$http', 'constants'];
  function asyncService($http: ng.IHttpService, constants: any){
    const API = constants.API;
    return {
      getChangeList: getChangeList
    };

    function getChangeList(): ng.IPromise<any>{
      return $http.get(API.concat('getChangeList.json'));
    }
  }
})();
