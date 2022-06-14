import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { PrismaService } from "./../prisma.service";
import { Todo } from "./models/todo.model";

@Resolver(() => Todo)
export class TodoResolver{
  constructor(private prisma: PrismaService) { }
  
  @Query(() => [Todo])
  async todo() {
    return this.prisma.todo.findMany();
  }

  @Mutation(() => Todo)
  async createTodo(
    @Args('title') title: string,
    @Args('body') body: string,
  ) {
    return this.prisma.todo.create({ data: { title, body } });
  }
}