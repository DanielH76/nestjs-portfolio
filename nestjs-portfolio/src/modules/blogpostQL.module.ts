import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BlogpostController } from 'src/controllers/blogpost.controller';
import { ApikeyMiddleware } from 'src/middleware/apikey.middleware';
import { BlogpostResolver } from 'src/resolvers/blogpost.resolver';
import { BlogpostService } from 'src/services/blogpost.service';

@Module({
    providers: [BlogpostResolver, BlogpostService]
})
export class BlogpostQLModule {

}