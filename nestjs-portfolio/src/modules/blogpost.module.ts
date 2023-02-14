import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BlogpostController } from 'src/controllers/blogpost.controller';
import { ApikeyMiddleware } from 'src/middleware/apikey.middleware';
import { BlogpostService } from 'src/services/blogpost.service';

@Module({
    imports:[],
    controllers: [BlogpostController],
    providers: [BlogpostService]
})
export class BlogpostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(ApikeyMiddleware).forRoutes("blogpost")
    }
}