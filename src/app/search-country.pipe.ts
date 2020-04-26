import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCountry',
})
export class SearchCountryPipe implements PipeTransform {
  transform(items: any, searchCountry: string): any {
    if (!items) {
      return [];
    }
    if (!searchCountry) {
      return items;
    }
    searchCountry = searchCountry.toLowerCase();
    return items.filter((it) => {
      const country = it.location.country;
      return country.toLowerCase().includes(searchCountry);
    });
  }
}
