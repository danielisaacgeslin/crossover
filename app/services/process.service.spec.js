var model = {
  id: 'Tenrox-R1_1235',
  type: 'build',
  owner: 'test',
  timeStarted: '2016-10-18T14:36:07.122Z',
  state: 'pending',
  metrics: {
    test: 64,
    mantainability: 53,
    security: 64,
    workmanship: 72
  },
  build: '2016-10-18T14:36:07.122Z',
  unitTest: {
    pass: 142,
    fail: 10
  },
  functionalTest: {
    pass: 4321,
    fail: 2145
  },
  codeCovered: {
    unitTest: 76,
    functionalTest: 23
  }
};
describe('service: processService', function () {
    beforeEach(module('app'));

    it('should getPercentageFromObject', inject(function (processService) {
      var before = {pass: 4321, fail: 2145};
      var after = {
        items: {pass :4321,fail :2145},
        total: 6466,
        average: 3233,
        percentages: {pass :66.82647695638725,fail :33.17352304361275}
      };
      var result = processService.getPercentageFromObject(before);
      expect(result).toEqual(after);
    }));

    it('should getPercentageFromObject', inject(function (processService) {
      var after = {
        id: model.id,
        type: model.type,
        owner: model.owner,
        timeStarted: new Date(model.timeStarted),
        state: model.state,
        metrics: model.metrics,
        build: new Date(model.build),
        unitTest: model.unitTest,
        functionalTest: model.functionalTest,
        codeCovered: model.codeCovered,
        percentages: {
          metrics: processService.getPercentageFromObject(model.metrics),
          unitTest: processService.getPercentageFromObject(model.unitTest),
          functionalTest: processService.getPercentageFromObject(model.functionalTest)
        }
      };
      var result = processService.processChangeListItem(model);
      expect(result).toEqual(after);
    }));
});
