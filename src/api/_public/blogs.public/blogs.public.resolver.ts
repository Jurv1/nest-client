import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { BlogsPublicQueryInputTypes } from './blogs.public.gqltypes/blogs.public.query.input.types';
import { Blog } from '../../../application/gql.objects/blog/blog.object';
import { BlogService } from '../../../application/infrastructure/services/blog.service';
import { Inject, OnModuleInit } from '@nestjs/common';

@Resolver(() => Blog)
export class BlogsPublicResolver implements OnModuleInit {
  private blogService: BlogService;

  constructor(
    @Inject('BLOG_PACKAGE') private readonly blogServiceClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.blogService =
      this.blogServiceClient.getService<BlogService>('BlogService');
  }

  @Query(() => [Blog])
  @GrpcMethod('BlogsService')
  async getAllBlogs(
    @Args('input', { type: () => BlogsPublicQueryInputTypes })
    input: BlogsPublicQueryInputTypes,
  ) {
    return input;
  }

  @Query(() => Blog)
  @GrpcMethod('BlogsService')
  async getBlog(@Args('id', { type: () => Int }) id: number) {
    return await this.blogService.getBlog(id);
  }
}
