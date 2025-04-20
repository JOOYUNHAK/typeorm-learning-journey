import { Controller, Get } from '@nestjs/common';
import { FixErrorService } from './fix-error.service';

@Controller()
export class FixErrorController {
  constructor(private readonly fixErrorService: FixErrorService) {}

  @Get()
  getHello(): string {
    return this.fixErrorService.getHello();
  }
}
