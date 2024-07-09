import { TDocumentDefinitions } from "pdfmake/interfaces";

// playground requires you to assign document definition to a variable called dd
const InvoiceTemplate: TDocumentDefinitions = {
  watermark: { text: 'DOCUMENTO NO CONTABLE', color: 'red', opacity: 0.08, bold: true, italics: false, fontSize: 60 },
  content: [
    {
        text: 'Documento Tributario Electronico',
        alignment: 'center',
        fontSize: 18,
    },
    {
        text: 'FACTURA',
        alignment: 'center',
        fontSize: 16,
        bold: true,
    },
    {
        fontSize: 9,
        table: {
            widths: ['*', '*', '*'],
            body: [
                [[{text: 'Codigo de Generación:'}, {text: 'Número de Control:'}, {text: 'Sello de Recepción:'}], { qr: 'https://admin.factura.gob.sv/consultaPublica?ambiente=00&codGen=012103A9-72E4-554C-800B-D61B7B51968D&fechaEmi=2024-04-26', fit: 100, alignment: 'center'},
                [{text: 'Módelo de Facturación:'}, {text: 'Tipo de Transmisión:'}, {text: 'Fecha y Hora de Generación:'}]]
            ]
        }
    },
    {
      fontSize: 9,
      table: {
          widths: ['*', '*'],
          body: [
             [{ text: 'Emisor', alignment: 'center'}, { text: 'Receptor', alignment: 'center'}],
             [['Nombre o razón social:', 'NIT:', 'NRC:', 'Actividad Económica:', 'Dirección:', 'Número de Teléfono:', 'Correo Electrónico:', 'Nombre Comercial:', 'Tipo de Establecimiento:'],
             ['Nombre o razón social:', 'Tipo de Documento de Identificación:', 'Número de Documento de Identificación:', 'Actividad Económica:', 'NRC:', 'Dirección:', 'Correo Electrónico', 'Nombre Comercial:']]
          ]
      }  
    },
    {
      marginTop: 18,
      fontSize: 9,
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        body: [
          [ 'N', 'Cantidad', 'Unidad', 'Descripción', 'Precio Unitario', 'Otros Montos no Afectados', 'Descuento por Item', 'Ventas no Sujetas', 'Ventas Exentas', 'Ventas Gravadas'],
          ['', '', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', { colSpan: 2, text: 'Suma de Ventas:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Monto global Desc., Rebajas y otros a ventas no sujetas:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Monto global Desc., Rebajas y otros a ventas exentas:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Monto global Desc., Rebajas y otros a ventas gravadas:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Nombre del Tributo:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Sub-Total', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'IVA Retenido:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Retención Renta:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Monto Total de la Operación:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Total Otros Montos No Afectos:', alignment: 'right'}, '', '', '', ''],
          ['', '', '', '', '', { colSpan: 4, text: 'Total a Pagar:', alignment: 'right'}, '', '', '', ''],
        ]
      }
    }, {
        marginTop: 18,
        fontSize: 9,
        table: {
            widths: ['*', '*'],
            body: [
                ['Valor en Letras:', 'Condición de la Operación:'],   
                [{ colSpan: 2, text: 'Observaciones:'}, '']
            ]
        }
    }, {
        marginTop: 18,
        fontSize: 9,
        table: {
            widths: ['*', '*'],
            body: [
                ['Responsable por parte del emisor:', 'N Documento:'],   
                ['Responsable por parte del receptor:', 'N Documento:']
            ]
        }
    }, {
        marginTop: 18,
        text: 'VENTA A CUENTA DE TERCEROS',
        alignment: 'center',
        fontSize: 11,
    }, {
        fontSize: 9,
        table: {
            widths: ['*', '*'],
            body: [
                ['NIT:', 'Nombre, denominación o razón social:'],
            ]
        }
    }, {
        marginTop: 18,
        text: 'DOCUMENTOS RELACIONADOS',
        alignment: 'center',
        fontSize: 11,
    }, {
        fontSize: 9,
        table: {
            widths: ['*', '*', '*'],
            body: [
                ['Tipo de Documento:', 'N de Documento:', 'Fecha del Documento:'],
            ]
        }
    }, {
        marginTop: 18,
        text: 'OTROS DOCUMENTOS ASOCIADOS',
        alignment: 'center',
        fontSize: 11,
    }, {
        fontSize: 9,
        table: {
            widths: ['*', '*'],
            body: [
                ['Identificación documento:', 'Descripción:'],
            ]
        }
    }
  ]
};
export default InvoiceTemplate