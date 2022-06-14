import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { TodoPropertyDto } from './dto/todo-property.dto';
import { TodoStatusPipe } from "./pipe/todo-status.pipe";
import { TodoService } from './todo.service'; 
import { Todo as TodoModel } from '@prisma/client';


@Controller('todo')
export class TodoController {

  constructor(
    private readonly todoService: TodoService,
  ){}

  @Get()
  getTodo() {
    return this.todoService.todos();
  }

  @Get('/:id')
  getTodoById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<TodoModel> {
    return this.todoService.todo({ id: Number(id) });
  }

  @Post()
  async createTodo(
    @Body() todoData: { title: string; body: string},
  ): Promise<TodoModel> {
    return this.todoService.createTodo(todoData);
  }

  @Put('/:id')
  async updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() todoData: { title?: string; body?: string},
  ): Promise<TodoModel> {
    return this.todoService.updateTodo({
      where: { id: Number(id) },
      data: todoData,
    });
  }

  @Delete('/:id')
  async deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<TodoModel>{
    return this.todoService.deleteTodo({ id: Number(id) });
  }
}
