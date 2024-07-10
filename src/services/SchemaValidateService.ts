import { DOCUMENT_TYPE, SCHEMA_DOCUMENT } from "../constants";
import { promises as fs } from 'fs'
import Ajv from "ajv";
import { Validator } from 'jsonschema'
export class SchemaValidateService {
  public static async validate(dteType: DOCUMENT_TYPE, data: any) {
    let schema = null
    if (dteType === DOCUMENT_TYPE.FACTURA) {
      schema = SCHEMA_DOCUMENT.FACTURA
    } else if (dteType === DOCUMENT_TYPE.CREDITO_FISCAL) {
      schema = SCHEMA_DOCUMENT.CREDITO_FISCAL
    } else if (dteType === DOCUMENT_TYPE.COMPROBANTE_DONACION) {
      schema = SCHEMA_DOCUMENT.COMPROBANTE_DONACION
    } else if (dteType === DOCUMENT_TYPE.FACTURA_EXPORTACION) {
      schema = SCHEMA_DOCUMENT.FACTURA_EXPORTACION
    } else if (dteType === DOCUMENT_TYPE.FACTURA_SUJETO_EXCLUIDO) {
      schema = SCHEMA_DOCUMENT.FACTURA_SUJETO_EXCLUIDO
    } else if (dteType === DOCUMENT_TYPE.COMPROBANTE_RETENCION) {
      schema = SCHEMA_DOCUMENT.COMPROBANTE_RETENCION
    } else if (dteType === DOCUMENT_TYPE.NOTA_CREDITO) {
      schema = SCHEMA_DOCUMENT.NOTA_CREDITO
    } else if (dteType === DOCUMENT_TYPE.NOTA_DEBITO) {
      schema = SCHEMA_DOCUMENT.NOTA_DEBITO
    } else if (dteType === DOCUMENT_TYPE.NOTA_REMISION) {
      schema = SCHEMA_DOCUMENT.NOTA_REMISION
    } else if (dteType === DOCUMENT_TYPE.COMPROBANTE_LIQUIDACION) {
      schema = SCHEMA_DOCUMENT.COMPROBANTE_LIQUIDACION
    } else if (dteType === DOCUMENT_TYPE.CONTABLE_LIQUIDACION) {
      schema = SCHEMA_DOCUMENT.CONTABLE_LIQUIDACION
    } else {
      throw new Error('Schema not found')
    }
    const documentSchema = await fs.readFile(`./src/schemas/${schema}`, 'utf-8')
    const jsonSchema = JSON.parse(documentSchema)
    //const ajv = new Ajv();
    const validator = new Validator()
    //const isValid = ajv.validate(jsonSchema, data)
    const result = validator.validate(data, jsonSchema)
    if (result.valid) {
      return { error: false }
    } else {
      return { error: true, errors: result.toString()}
    }

  }
}