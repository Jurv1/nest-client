import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  GqlModuleAsyncOptions,
  GqlModuleOptions,
  GraphQLModule,
} from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModule } from './api/admin/user/user.module';
import { BlogsModule } from './api/_public/blogs.public/blogs.module';
import { PostsModule } from './api/_public/posts.public/posts.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      formatError: (error) => {
        return {
          message: error.message,
          locations: error.locations,
        };
      },
      // useFactory: async () => ({
      //   typePaths: [
      //     'src/application/gql.objects/blog/blog.object.ts',
      //     'src/application/gql.objects/posts/posts.object.ts',
      //     'src/application/gql.objects/user/user.object.ts',
      //   ],
      // }),
      autoTransformHttpErrors: true,
      autoSchemaFile: './src/application/gql.schemas/schema.gql',
      //typeDefs: './src/schema.gql',
    }),
    UserModule,
    BlogsModule,
    PostsModule,
  ],
  controllers: [],
  providers: [AppService, AppController],
})
export class AppModule {}
