import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'coursefilter',
    pure: false
})
export class CourseFilterPipe implements PipeTransform {
    transform(courses: any[]): any {
        let filtercrs = "New";
        console.log(courses.filter(item => item.time.includes(filtercrs)));
        return courses.filter(item => item.time.includes(filtercrs));

    }
}