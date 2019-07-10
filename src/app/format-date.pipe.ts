import { Pipe, PipeTransform, enableProdMode } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string, ...args: any[]): any {
    let fecha = new Date(date);
    let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio',
  'Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    let mes = months[fecha.getMonth()];
    return mes + ' del ' + fecha.getFullYear();
    

  }

}
