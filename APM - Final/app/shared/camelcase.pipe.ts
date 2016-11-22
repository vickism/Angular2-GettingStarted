import { PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'camelCase'
})


export class CamelCasePipe implements PipeTransform{
    transform(value:string):string{
         return value
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
    };
}
