import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/modules/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    //BlogpostModule,
    //BlogpostQLModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

