import { Certificado, CertificadoMh } from "../models/Certificado";
import { XMLParser } from 'fast-xml-parser'
import { promises as fs } from 'fs'
import crypto from 'crypto'
export class CertificadoService {
  public static async obtenerCerficado(nit: string, privateKey: string): Promise<CertificadoMh> {
    const certificadoXML = await fs.readFile(`/home/betacode/Trabajo/firmador-sv/certificates/${nit}.crt`, 'utf-8')
    const parser = new XMLParser()
    const certificado = parser.parse(certificadoXML) as Certificado
    const hash = crypto.createHash('sha512')
    const hashedPassword = hash.update(privateKey, 'utf-8').digest('hex')
    if (hashedPassword !== certificado.CertificadoMH.privateKey.clave)
      throw new Error('Invalid password')
    return certificado.CertificadoMH
  }
}