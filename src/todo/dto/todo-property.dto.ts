import { IsNotEmpty } from "class-validator";

export class TodoPropertyDto{
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;
}