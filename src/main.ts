import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    options: {
      transport: Transport.GRPC,
    },
  });
  // const schema = app.get(GraphQLSchemaBuilder);
  // console.log(
  //   schema.generateSchema(
  //     [UserResolver, BlogsPublicResolver, PostsPublicResolver],
  //     './src/schema.gql',
  //   ),
  // );
  //fs.writeFileSync('schema.gql', schema.toString());
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
