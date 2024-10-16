import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Posts } from '../posts/posts.object';

@ObjectType()
export class Blog {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => String, { nullable: false })
  websiteUrl: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => [Posts], { nullable: false })
  posts: Posts[];
}
