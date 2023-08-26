import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // add this line 
  // await app.listen(parseInt(process.env.PORT) || 3000);
  // Use this method here:
  // await app.listen(8080);
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
