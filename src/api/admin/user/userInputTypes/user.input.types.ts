import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class UserInputEdit {
  @Field(() => Number)
  id: number;

  @Field(() => String, {
    nullable: false,
    description: "User's title to the movie",
  })
  title: string;

  @Field(() => String, {
    nullable: true,
    description: "User's description to the movie",
  })
  description?: string;
}
