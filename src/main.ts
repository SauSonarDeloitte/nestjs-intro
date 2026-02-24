import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
