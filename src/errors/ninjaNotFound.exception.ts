/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from '@nestjs/common';

export class NinjaNotFoundException extends HttpException {
  constructor(){
    super('Ninja Not Found', HttpStatus.NOT_FOUND);
  }
}