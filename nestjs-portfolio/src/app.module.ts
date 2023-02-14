import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApikeyMiddleware } from './middleware/apikey.middleware';
import { BlogpostModule } from './modules/blogpost.module';

@Module({
  imports: [BlogpostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

