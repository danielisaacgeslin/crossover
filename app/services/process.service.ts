(()=>{
  'use strict';
  angular.module('app').factory('processService', processService);

  processService.$inject = [];
  function processService($http: ng.IHttpService, constants: any){
    return {
      processChangeListItem,
      getPercentageFromObject
    };

    function getPercentageFromObject(obj): IPercentage{
      const referencePercentage: number = 100;
      const keys = Object.keys(obj);
      let total: number = 0;
      let average: number;
      let percentages: any = {};

      keys.forEach(key=>{
        total += obj[key];
      });
      keys.forEach(key=>{
        percentages[key] = obj[key] * referencePercentage / total;
      });

      average = total / keys.length;

      return <IPercentage>{items: obj, total, average, percentages};
    }

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
        functionalTest: item.functionalTest,
        percentages: {
          metrics: getPercentageFromObject(item.metrics),
          unitTest: getPercentageFromObject(item.unitTest),
          functionalTest: getPercentageFromObject(item.functionalTest)
        }
      }
    }
  }
})();
