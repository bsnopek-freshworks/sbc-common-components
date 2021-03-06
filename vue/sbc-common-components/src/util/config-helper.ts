import { SessionStorageKeys } from './constants'

export default class ConfigHelper {
  static keycloakConfigUrl: string = ''
  static addToSession (key: string, value: any): void {
    sessionStorage.setItem(key, value)
  }

  static getFromSession (key: string): string | null {
    return sessionStorage.getItem(key)
  }

  static removeFromSession (key: string): void {
    sessionStorage.removeItem(key)
  }

  static clearSession (): void {
    sessionStorage.clear()
  }

  static getStatusAPIUrl (): string {
    const apiConfig = JSON.parse(sessionStorage.getItem(SessionStorageKeys.ApiConfigKey) || '{}')
    return apiConfig ? apiConfig['VUE_APP_STATUS_ROOT_API'] : ''
  }

  static getAuthAPIUrl (): string {
    const apiConfig = JSON.parse(sessionStorage.getItem(SessionStorageKeys.ApiConfigKey) || '{}')
    return apiConfig ? apiConfig['VUE_APP_AUTH_ROOT_API'] : ''
  }

  static getAuthContextPath (): string {
    const apiConfig = JSON.parse(sessionStorage.getItem(SessionStorageKeys.ApiConfigKey) || '{}')
    return apiConfig ? apiConfig['AUTH_URL'] : ''
  }

  static setKeycloakConfigUrl (keycloakConfigUrl: string) {
    this.keycloakConfigUrl = keycloakConfigUrl
  }

  static getKeycloakConfigUrl (): string {
    return this.keycloakConfigUrl
  }
}
