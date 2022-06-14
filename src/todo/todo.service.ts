import { Injectable } from "@nestjs/common";
import { PrismaService } from "./../prisma.service";
import {
  Todo,
  Prisma
} from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }
  
  async todo(userWhereUniqueInput: Prisma.TodoWhereUniqueInput): Promise<Todo | null>{
    return this.prisma.todo.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async todos(): Promise<Todo[]>{
    return this.prisma.todo.findMany({

    });
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo>{
    return this.prisma.todo.create({
      data,
    });
  }

  async updateTodo(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo>{
    const { where, data } = params;
    return this.prisma.todo.update({
      data,
      where,
    });
  }

  async deleteTodo(where: Prisma.TodoWhereUniqueInput): Promise<Todo>{
    return this.prisma.todo.delete({
      where,
    });
  }
}