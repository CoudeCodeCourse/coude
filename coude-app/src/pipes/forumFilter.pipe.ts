import { Pipe, PipeTransform } from '@angular/core';
import { Topic } from 'src/models/topic';
@Pipe({
    name: 'forumfilter'
  })
  export class ForumFilterPipe implements PipeTransform {
    transform(topics: Topic[], filteredString: string): Topic[] {
      console.log(`Keyword: ${filteredString}`);
      console.log("pipe courrse:", Array.isArray(topics));
      console.log("type:", typeof(topics[0].title));
        if (!topics) {
          return [];
        }
        if (!filteredString) {
          return topics; //chưa có keyword không trả về list
        }
        else {

          // filteredString = filteredString.toLocaleLowerCase();
          return topics.filter( t => 
            // let titl = course.title
            // return
             t.title.toLowerCase().includes(filteredString.toLowerCase())
            // console.log(`topics filtered: ${course.name.toLocaleLowerCase().includes(filteredString.toLocaleLowerCase())}`);
            // console.log(topics)
          );
        }
  }
    }