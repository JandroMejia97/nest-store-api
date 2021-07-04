import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const numberVal = parseInt(value, 10);
    if (isNaN(numberVal)) {
      throw new BadRequestException(`${numberVal} is not a valid number.`)
    }
    return value;
  }
}
