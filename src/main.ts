import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'*',
    credentials:true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    maxAge: 86400,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
  await app.listen(5000);
}
bootstrap();
