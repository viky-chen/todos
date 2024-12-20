import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  app.setGlobalPrefix('api/todos');
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Todos example')
    .setDescription('The todos API description')
    .setVersion('1.0')
    .addTag('todos')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: 'api-docs.json',
  });
  await app.listen(3000);
}
bootstrap();
