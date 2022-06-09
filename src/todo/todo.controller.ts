import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TodoPropertyDto } from './dto/todo-property.dto'
import { TodoStatusPipe } from "./pipe/todo-status.pipe";


@Controller('todo')
export class TodoController {

  @Get()
  getTodo() {
    return "getTodo Success!"
  }

  @Get('/:id')
  getTodoById(
    @Param('id', ParseIntPipe) id: number
  ) {
    return `getTodoById Success! Parameter [id:${id}]`
  }

  @Post()
  createTodo(
    @Body('title') title: string,
    @Body('body') body: string
  ) {
    return `createTodo Success! Parameter [title:${title}, body:${body}]`
  }

  @Delete('/:id')
  deleteTodo(
    @Param('id', ParseIntPipe) id:number
  ) {
    return `deleteTodo Success! Parameter [id:${id}]`
  }

  @Patch('/:id')
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string
  ) {
    return `updateTodo Success! Parameter [id:${id}, status:${status}]`
  }
}
