export interface HaciendaResponse {
  version: number
  ambiente: string
  versionApp: number
  estado: string
  codigoGeneracion: string
  selloRecibido?: any
  fhProcesamiento: string
  clasificaMsg: string
  codigoMsg: string
  descripcionMsg: string
  observaciones: any[]
}
