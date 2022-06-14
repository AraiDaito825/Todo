import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TodoController } from './todo/todo.controller';
import { PrismaService } from "./prisma.service";
import { TodoResolver } from './todo/todo.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gpl'),
      debug: true,
      playground: true,
    }),
  ],
  controllers: [TodoController],
  providers: [ PrismaService, TodoResolver]
})
export class AppModule {}
