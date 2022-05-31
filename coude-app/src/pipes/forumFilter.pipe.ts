import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'tagfilter'
  })
  export class ForumFilterPipe implements PipeTransform {
    transform(topics: any[], selectedTag: string): any[] {
        console.log(`Keyword: ${selectedTag}`);
          if (!topics) {
            return [];
          }
          if (!selectedTag) {
            return []; 
          }
          else {
            // searchText = searchText.toLocaleLowerCase();
            return topics.filter(topic => {
              return topic.name.toLowerCase().includes(selectedTag.toLowerCase());
            });
          }
        }
    }