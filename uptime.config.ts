// Initial deployment configuration. Add monitors and optional notifications here.
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'Uptime Status',
  links: [],
}

const workerConfig: WorkerConfig = {
  monitors: [],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
