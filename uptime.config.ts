import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const successWithRedirect = Array.from({ length: 200 }, (_, i) => i + 200)
const successOrClientError = Array.from({ length: 300 }, (_, i) => i + 200)
const successOrServerError = [...Array.from({ length: 100 }, (_, i) => i + 200), ...Array.from({ length: 100 }, (_, i) => i + 500)]

const pageConfig: PageConfig = {
  title: 'Drinkflower 服务状态',
  links: [],
}

const workerConfig: WorkerConfig = {
  // Cron runs every five minutes; no notification webhook is configured.
  kvWriteCooldownMinutes: 5,
  monitors: [
    { id: 'main_site', name: '主站综合', method: 'GET', target: 'https://drinkflower.asia', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'proxy_service', name: '代理服务', method: 'TCP_PING', target: '82.157.252.246:8080', timeout: 5000 },
    { id: 'frp', name: '内网穿透', method: 'TCP_PING', target: '82.157.252.246:7000', timeout: 5000 },
    { id: 'cloud_hosting', name: '云托管服务', method: 'GET', target: 'http://cloud.drinkflower.asia', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'vpn', name: 'VPN服务', method: 'TCP_PING', target: '82.157.252.246:1194', timeout: 5000 },
    { id: 'dns_panel', name: 'DNS面板', method: 'GET', target: 'http://drinkflower.asia:8443/login.html', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'voice_service', name: '语音服务', method: 'TCP_PING', target: '82.157.252.246:5000', timeout: 5000 },
    { id: 'clipboard', name: '在线剪贴板', method: 'GET', target: 'https://clip.666050.xyz', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'location_service', name: '定位服务', method: 'GET', target: 'https://trace.drinkflower.asia/', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'search_service', name: '搜索服务', method: 'GET', target: 'https://so.666050.xyz', expectedCodes: successOrServerError, timeout: 60000 },
    { id: 'mail_service', name: '邮局服务', method: 'GET', target: 'https://mail.666050.xyz/', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'storage_service', name: '存储服务', method: 'GET', target: 'https://pan.666050.xyz/', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'ai_service', name: 'AI服务', method: 'GET', target: 'http://8.156.83.229:6185', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'api_gateway', name: 'API网关', method: 'GET', target: 'https://api.drinkflower.asia', expectedCodes: successOrClientError, timeout: 60000 },
    { id: 'status_monitor', name: '状态监控服务', method: 'GET', target: 'https://status.drinkflower.asia/', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'message_platform', name: '消息平台', method: 'GET', target: 'http://8.156.83.229:6099', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'oauth_panel', name: '认证服务面板', method: 'GET', target: 'https://oauth.666050.xyz/', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'auth_infrastructure', name: '认证服务设施', method: 'GET', target: 'https://auth.666050.xyz/', expectedCodes: successOrClientError, timeout: 60000 },
    { id: 'image_editor', name: '图片编辑', method: 'GET', target: 'https://pic.666050.xyz', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'ai_function_call', name: 'AI服务-函数调用', method: 'GET', target: 'http://8.156.83.229:6187', expectedCodes: successWithRedirect, timeout: 60000 },
    { id: 'video_download', name: '视频下载', method: 'GET', target: 'https://downloadapi.drinkflower.asia/', expectedCodes: successOrClientError, timeout: 60000 },
    { id: 'file_service', name: '网盘服务', method: 'GET', target: 'https://file.drinkflower.asia/', expectedCodes: successOrClientError, timeout: 60000 },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
