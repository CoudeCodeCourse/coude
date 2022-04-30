import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
   /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param courses list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
    transform(courses: any[], searchText: string): any[] {
      console.log(`Keyword: ${searchText}`);
        if (!courses) {
          return [];
        }
        if (!searchText) {
          return []; //chưa có keyword không trả về list
        }
        // searchText = searchText.toLocaleLowerCase();
        return courses.filter(course => {
          course.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
          console.log(`courses filtered: ${course.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())}`);
        });

      }
 }