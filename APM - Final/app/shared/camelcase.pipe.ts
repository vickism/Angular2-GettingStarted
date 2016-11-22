import { PipeTransform, Pipe} from '@angular/core';
import * as s from 'string';
@Pipe({
    name: 'camelCase'
})


export class CamelCasePipe implements PipeTransform{
    transform(value:string):string{
         //return value
        let d = s(value);
    return d.slugify().toString();
    };
}
