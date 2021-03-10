import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'votes'
})
export class VotesPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1:
        return 'głosu';
      default:
        return `głosów`;
    }
  }

}
