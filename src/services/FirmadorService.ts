import jws from 'jws';
import { CertificadoMh } from "../models/Certificado";
import NodeRSA from 'node-rsa'
export class FirmadorService {
  public static firmarJSON(certificado: CertificadoMh, contenido: String): string {
    const privateKey = certificado.privateKey.encodied;
    const key = new NodeRSA()
    key.importKey(Buffer.from(privateKey, 'base64'), 'pkcs8-private-der');
    const decodedPrivateKey = key.exportKey();
    const signature = jws.sign({
        header: { alg: 'RS512'},
        privateKey: decodedPrivateKey,
        payload: contenido
      })
    return signature
  }
  public static obtenerDocumento(signature: string) {
    const dte = jws.decode(signature)
    return dte?.payload
  }
  public static validarFirma(certificado: CertificadoMh, contenido: string) {
    const privateKey = certificado.privateKey.encodied;
    const key = new NodeRSA()
    key.importKey(Buffer.from(privateKey, 'base64'), 'pkcs8-private-der');
    const decodedPrivateKey = key.exportKey();
    const isValid = jws.verify(contenido, 'RS512', decodedPrivateKey)
    if (isValid) {
      return true
    } else {
      throw new Error('Firma no válida')
    }
  }
}