import { Pipe, PipeTransform, enableProdMode } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string, ...args: any[]): any {
    let fecha = new Date(date);
    let months = ['January','February','March','April','May','June','July',
  'August','September','October','November','December'];
    let mes = months[fecha.getMonth()];
    return mes + ' of ' + fecha.getFullYear();
    

  }

}
