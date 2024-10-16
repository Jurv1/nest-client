import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BlogsPublicQueryInputTypes {
  @Field(() => String)
  searchNameTerm: string;
  @Field(() => String)
  sortBy: string;
  @Field(() => String)
  sortDirection: string;
  @Field(() => String)
  pageNumber: string;
  @Field(() => String)
  pageSize: string;
}
