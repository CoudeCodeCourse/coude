import { Pipe, PipeTransform } from '@angular/core';
import { Topic } from 'src/models/topic';
@Pipe({
    name: 'sortViews'
  })
  export class ForumSortPipe implements PipeTransform {
    transform(topics: Topic[], args: any[]): any {
        const sortField = args[0];
        const sortDirection = args[1];
        let multiplier = 1;

        if (sortDirection === 'desc') {
            multiplier = 1;
        }

        topics.sort((a: any, b: any) => {
            if (a[sortField] < b[sortField]) {
              return -1 * multiplier;
            } else if (a[sortField] > b[sortField]) {
              return 1 * multiplier;
            } else {
              return 0;
            }
          }
          );
        return topics;
    }
}