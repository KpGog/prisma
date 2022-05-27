type MetricsOptionsCommon = {
  globalLables: Record<string, string>
}

export type MetricsOptionsJson = { format: 'json' } & MetricsOptionsCommon
export type MetricsOptionsPrometheus = { format: 'prometheus' } & MetricsOptionsCommon

export type EngineMetricsOptions = MetricsOptionsJson | MetricsOptionsPrometheus

export type Metric = {
  key: string
  labels: Record<string, string>
  description: string
}
