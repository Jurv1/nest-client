import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String, { nullable: true })
  @Column()
  email: string;

  @Column()
  @Field(() => String, { nullable: true })
  password: string;

  @Field(() => String, { nullable: true })
  @Column()
  login: string;

  @Field(() => String, { nullable: true })
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column()
  address: string;

  @Field(() => String, { nullable: true })
  @Column()
  description: string;
}
