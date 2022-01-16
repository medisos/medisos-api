import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Medisos')
    .setDescription('Medisos API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,
    {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: "Medisos API"
    });
  
  await app.listen(3000);
}
bootstrap();
