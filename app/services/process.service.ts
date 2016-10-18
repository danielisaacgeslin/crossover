(()=>{
  'use strict';
  angular.module('app').factory('processService', processService);

  processService.$inject = [];
  function processService($http: ng.IHttpService, constants: any){
    return {
      processChangeListItem: processChangeListItem
    };

    function processChangeListItem(item): IChangeListItem{
      return <IChangeListItem>{
        id: item.id,
        type: item.type,
        owner: item.owner,
        timeStarted: item.timeStarted ? new Date(item.timeStarted) : null,
        state: item.state,
        metrics: item.metrics,
        build: item.build ? new Date(item.build) : null,
        unitTest: item.unitTest,
        functionalTest: item.functionalTest
      }
    }
  }
})();
