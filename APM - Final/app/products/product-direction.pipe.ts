import { PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'productDirection'
})

export class ProductDirectionPipe implements PipeTransform{

transform(value : string, filterBy: string) :string{
	if(filterBy.length > 0)
		return value.split("").join("");
	return value;
}

}