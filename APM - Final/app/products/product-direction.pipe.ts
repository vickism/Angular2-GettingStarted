import { PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'productDirection'
})

export class ProductDirectionPipe implements PipeTransform{

transform(value : string, inverse: boolean) :string{
	if(inverse)
		return value.split("").reverse().join("");
	return value;
}

}