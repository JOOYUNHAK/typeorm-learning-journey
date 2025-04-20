import { Module } from '@nestjs/common';
import { FixErrorController } from './fix-error.controller';
import { FixErrorService } from './fix-error.service';

@Module({
  imports: [],
  controllers: [FixErrorController],
  providers: [FixErrorService],
})
export class FixErrorModule {}
