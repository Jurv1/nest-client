import { Module } from '@nestjs/common';
import { BlogsPublicResolver } from './blogs.public.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        transport: Transport.GRPC,
        name: 'BLOG_PACKAGE',
        options: {
          url: 'localhost:8070',
          package: 'blog',
          protoPath: './src/proto/blog.proto',
        },
      },
    ]),
  ],
  controllers: [],
  providers: [BlogsPublicResolver],
})
export class BlogsModule {}
