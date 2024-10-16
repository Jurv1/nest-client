import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Posts {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  shortDescription: string;

  @Field(() => String, { nullable: false })
  content: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
