import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(product: any , condition: string): any {
    if (!condition && condition === '') {
      return product;
    }
    return product.filter(function(item) {
      return item.toLowerCase().includes(condition.toLowerCase());
    });
  }
}
