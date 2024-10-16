import { Module } from '@nestjs/common';
import { PostsPublicResolver } from './posts.public.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [PostsPublicResolver],
})
export class PostsModule {}
