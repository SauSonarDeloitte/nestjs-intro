import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // strips properties not in the DTO
      forbidNonWhitelisted: true,   // throws 400 if unknown props are sent
      transform: true,              // transforms payloads to DTO classes
      transformOptions: { enableImplicitConversion: true },
      validationError: { target: false }, // don't expose class instance in errors
    }),
  );

const config = new DocumentBuilder()
  .setVersion('1.0')
  .setTitle("NodeJS First app")
  .setDescription("use the base URL as http://localhost:3000")
  .setTermsOfService("http://localhost:300/terms-of-service")
  .addServer('http://localhost:3000')
  .build();
const document = SwaggerModule.createDocument(app,config);
SwaggerModule.setup('api',app,document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
