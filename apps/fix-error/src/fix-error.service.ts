import { Injectable } from '@nestjs/common';

@Injectable()
export class FixErrorService {
  getHello(): string {
    return 'Hello World!';
  }
}
