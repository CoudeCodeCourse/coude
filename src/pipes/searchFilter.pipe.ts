import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/models/course';
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
    transform(courses: Course[], searchText: string): Course[] {
      console.log(`Keyword: ${searchText}`);
      console.log("pipe courrse:", Array.isArray(courses));
      console.log("type:", typeof(courses[0].title));
        if (!courses) {
          return [];
        }
        if (!searchText) {
          return []; //chưa có keyword không trả về list
        }
        else {

          // searchText = searchText.toLocaleLowerCase();
          return courses.filter(c => 
            // let titl = course.title
            // return
             c.title.toLowerCase().includes(searchText.toLowerCase())
            // console.log(`courses filtered: ${course.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())}`);
            // console.log(courses)
          );
        }
      }

 }