import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HttpException, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { CreateUserInput } from './userInputTypes/user.input.types';
import { User } from '../../../application/gql.objects/user/user.object';
import { UserService } from '../../../application/infrastructure/services/user.service';

@Resolver(() => User)
export class UserResolver implements OnModuleInit {
  private userService: UserService;

  constructor(
    @Inject('USER_PACKAGE') private readonly userServiceClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.userService =
      this.userServiceClient.getService<UserService>('UserService');
  }

  @Query(() => User)
  @GrpcMethod('UserService')
  async getUser(@Args('id', { type: () => Int }) id: number) {
    try {
      return await this.userService.getUser({ id });
    } catch (err) {
      console.log(1);
      throw new HttpException(err, 400);
    }
  }

  //constructor(private readonly userService: UserService) {}
  //
  @Mutation(() => User)
  @GrpcMethod('UserService')
  async createUser(@Args('input') input: CreateUserInput) {
    try {
      return await this.userService.createUser(input);
    } catch (err) {
      console.log(err);
      throw new HttpException(err, 400);
    }
  }
}
