
import { PipeTransform ,Pipe} from '@angular/core';


@Pipe({
     name :'convertToSpace'
})

export class convertToSpacePipe implements PipeTransform{
         transform(value : string , character : string) : string{
             return value.replace(character,'');
         }
}