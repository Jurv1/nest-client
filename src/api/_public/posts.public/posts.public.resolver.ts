import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Posts } from '../../../application/gql.objects/posts/posts.object';

@Resolver()
export class PostsPublicResolver {
  @Query(() => [Posts])
  async getPosts() {
    return [];
  }

  @Query(() => Posts)
  async getPost(@Args('id', { type: () => Int }) id: number) {}
}
