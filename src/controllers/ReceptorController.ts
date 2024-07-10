import { Request, Response } from "express";
import { uid } from 'uid';
import { DOCUMENT_TYPE } from "../constants";
import { ReceiveDTE } from "../dto/ReceiveDte";
import { FirmadorService } from "../services/FirmadorService";
import { InvoiceService } from "../services/InvoiceService";
import { SchemaValidateService } from "../services/SchemaValidateService";
import { HaciendaResponse } from "../types/hacienda";
export class ReceptorController {
  public static async receive(req: Request, res: Response) {
    console.log(`Recibiendo`)
    const data = req.body as ReceiveDTE;
    const dte = data.documento

    const schemaIsValid = await SchemaValidateService.validate(data.tipoDte as DOCUMENT_TYPE, data.documento)
    if (!schemaIsValid.error) {
      const respuesta: HaciendaResponse = {
        version: +data.version,
        ambiente: data.ambiente,
        versionApp: 2,
        estado: 'PROCESADO',
        codigoGeneracion: dte?.identificacion?.codigoGeneracion,
        selloRecibido: uid(40).toUpperCase(),
        fhProcesamiento: new Date().toISOString(),
        clasificaMsg: "11",
        codigoMsg: "004",
        descripcionMsg: "Se ha procesado el DTE",
        observaciones: []
      }
      console.log(`Es valido: ${JSON.stringify(respuesta, null, 2)}`)
      res.status(200).json(respuesta)
    } else {
      const respuesta: HaciendaResponse = {
        version: +data.version,
        ambiente: data.ambiente,
        versionApp: 2,
        estado: 'RECHAZADO',
        codigoGeneracion: dte?.identificacion?.codigoGeneracion,
        fhProcesamiento: new Date().toISOString(),
        clasificaMsg: "98",
        codigoMsg: "096",
        descripcionMsg: schemaIsValid.errors || "",
        observaciones: []
      }
      console.log(`Schema no valido: ${JSON.stringify(respuesta)}`)
      res.status(402).json(respuesta)
    }
  }

  public static async generateInvoice(req: Request, res: Response) {
    const pdfData = await InvoiceService.generateInvoicePdf()
    //res.setHeader('Content-disposition', 'attachment; filename=invoice.pdf');
    res.type('pdf').send(pdfData)

  }
}