import { NestFactory } from '@nestjs/core';
import { FixErrorModule } from './fix-error.module';

async function bootstrap() {
  const app = await NestFactory.create(FixErrorModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
