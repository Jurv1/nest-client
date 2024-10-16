import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        transport: Transport.GRPC,
        name: 'USER_PACKAGE',
        options: {
          url: 'localhost:8080',
          package: 'user',
          protoPath: './src/proto/user.proto',
        },
      },
    ]),
  ],
  controllers: [],
  providers: [UserResolver],
})
export class UserModule {}
