interface IChangeListItem {
  id: string,
  type: string,
  owener: string,
  timeStarted: Date,
  state: string,
  metrics: IMetrics,
  build: Date,
  unitTest: ITest,
  functionalTest: ITest
}
