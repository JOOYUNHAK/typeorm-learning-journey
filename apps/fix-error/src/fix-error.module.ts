import { Module } from '@nestjs/common';
import { FixErrorController } from './fix-error.controller';
import { FixErrorService } from './fix-error.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'typeorm',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [FixErrorController],
  providers: [FixErrorService],
})
export class FixErrorModule {}
