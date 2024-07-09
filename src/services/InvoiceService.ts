import pdfmake from 'pdfmake'
import InvoiceTemplate from '../templates/invoice.template';
export class InvoiceService {
  public static async generateInvoicePdf(): Promise<Buffer>{
    
    var fonts = {
      Roboto: {
        normal: './src/fonts/Roboto-Regular.ttf',
        bold: './src/fonts/Roboto-Medium.ttf',
        italics: './src/fonts/Roboto-Italic.ttf',
        bolditalics: './src/fonts/Roboto-MediumItalic.ttf'
      }
    };
    const printer = new pdfmake(fonts)
    
    const pdfDoc = printer.createPdfKitDocument(InvoiceTemplate)
    return new Promise((resolve, reject) =>{ try {
      let chunks: any = [];
      pdfDoc.on('data', chunk => chunks.push(chunk));
      pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
      pdfDoc.end();
    } catch(err) {
      reject(err);
    }});
  }
}