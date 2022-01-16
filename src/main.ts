import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()  // config for swagger
    .setTitle('api')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('ash')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);   // calling the swagger 

  await app.listen(3000);
}
bootstrap();
