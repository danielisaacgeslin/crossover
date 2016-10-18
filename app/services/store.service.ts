(()=>{
  'use strict';
  angular.module('app').factory('storeService', storeService);

  storeService.$inject = ['$http', '$q', 'constants'];
  function storeService($q: ng.IQService){
    const changeList: IChangeListItem[] = [];
    return {
      getChangeList: getChangeList
    };

    function getChangeList(): ng.IPromise<IChangeListItem[]>{
      const defer = $q.defer();

      if(changeList.length){
        defer.resolve(changeList);
      }else{
        
      }

      return defer.promise;
    }
  }
})();
