import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchZip',
})
export class SearchZipPipe implements PipeTransform {
  transform(items: any[], searchZip: string): any {
    if (!items) {
      return [];
    }
    if (!searchZip) {
      return items;
    }
    searchZip = searchZip.toString();
    return items.filter((it) => {
      const zip = it.location.postcode;
      return zip.toString().includes(searchZip);
    });
  }
}
