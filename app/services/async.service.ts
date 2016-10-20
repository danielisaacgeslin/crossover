(()=>{
  'use strict';
  angular.module('app').factory('asyncService', asyncService);

  asyncService.$inject = ['$http'];
  function asyncService($http: ng.IHttpService){
    const API = '/api/';
    return {
      getChangeList: getChangeList
    };

    function getChangeList(): ng.IPromise<any>{
      return $http.get(API.concat('getChangeList.json'));
    }
  }
})();
