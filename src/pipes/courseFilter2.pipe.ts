import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'coursefilter2',
    pure: false
})
export class CourseFilter2Pipe implements PipeTransform {
    transform(courses: any[]): any {
        let filtercrs2 = "Popular";
        console.log(courses.filter(item => item.time.includes(filtercrs2)));
        return courses.filter(item => item.time.includes(filtercrs2));

    }
}