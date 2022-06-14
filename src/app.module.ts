import { Module } from '@nestjs/common';
import { join } from 'path';
import { TodoController } from './todo/todo.controller';
import { PrismaService } from "./prisma.service";
import { TodoService } from './todo/todo.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [ PrismaService, TodoService],
})
export class AppModule {}
