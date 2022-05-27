import type { Engine, Metric } from '@prisma/engine-core'

export type MetricsOptions = {
  globalLabels?: Record<string, string>
}

export class MetricsClient {
  private _engine: Engine

  constructor(engine: Engine) {
    this._engine = engine
  }

  prometheus(options: MetricsOptions = {}): Promise<string> {
    return this._engine.metrics({ format: 'prometheus', globalLables: {}, ...options })
  }

  json(options: MetricsOptions = {}): Promise<Metric[]> {
    return this._engine.metrics({ format: 'json', globalLables: {}, ...options })
  }
}
