(()=>{
  'use strict';
  angular.module('app').factory('storeService', storeService);

  storeService.$inject = ['$q', 'asyncService', 'processService'];
  function storeService($q: ng.IQService, asyncService: any, processService: any){
    const changeList: IChangeListItem[] = [];
    return {
      getChangeList: getChangeList
    };

    function getChangeList(): ng.IPromise<IChangeListItem[]>{
      const defer = $q.defer();

      if(changeList.length){
        defer.resolve(changeList);
        return defer.promise;
      }

      asyncService.getChangeList().then(response=>{
        response.data.changeList.forEach(item=>{
          changeList.push(processService.processChangeListItem(item));
        });
        defer.resolve(changeList);
      });

      return defer.promise;
    }
  }
})();
