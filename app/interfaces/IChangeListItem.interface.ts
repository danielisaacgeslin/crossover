interface IChangeListItem {
  id: string,
  type: string,
  owner: string,
  timeStarted: Date,
  state: string,
  metrics: IMetrics,
  build: Date,
  unitTest: ITest,
  functionalTest: ITest,
  codeCovered: ICodeCovered,
  percentages: IChangeListPercentages
}
