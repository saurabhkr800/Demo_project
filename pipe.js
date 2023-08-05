import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

    name: 'demopipe'

})

export class DemopipePipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {

        return null;

    }

}