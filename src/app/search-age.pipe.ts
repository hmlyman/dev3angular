import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAge',
})
export class SearchAgePipe implements PipeTransform {
  transform(items: any[], searchAge: string): any {
    if (!items) {
      return [];
    }
    if (!searchAge) {
      return items;
    }
    searchAge = searchAge.toString();
    return items.filter((it) => {
      const age = it.dob.age;
      return age.toString().includes(searchAge);
    });
  }
}
