import {
  Body,
  Delete,
  Get,
  Post,
  Put,
  Route,
  Security,
  Tags,
} from "tsoa";

import {
  CreateUser,
  DeleteUser,
  LoadAllUser,
  LoadUserById,
  UpdateUser,
} from "../../domain/usecases/user";
import { makeUserService } from "../../infra/factories/services/userServiceFactory";
import {
  LoadAllUserResponse,
  UserCreate,
  UserResponse,
} from "./types";

const service = makeUserService();

@Tags("User")
@Route("users")
class UserHandler {
  constructor(
    private readonly service: LoadAllUser &
      LoadUserById &
      CreateUser &
      UpdateUser &
      DeleteUser
  ) {}

  @Get("/")
  @Security("bearerAuth")
  async search() {
    const users = await this.service.loadAll();
    return users as UserResponse[];
  }

  @Security("bearerAuth")
  @Get("/:id")
  async showOne(id: string) {
    return await this.service.loadById(id);
  }

  @Security("bearerAuth")
  @Post("/")
  async create(@Body() body: UserCreate) {
    const response = await this.service.create(body);
    return response as UserResponse;
  }

  @Post("/signup")
  async signup(@Body() body: UserCreate) {
    const response = await this.service.create(body);
    return response as UserResponse;
  }

  @Security("bearerAuth")
  @Put("/:id")
  async update(id: string, @Body() body: Partial<UserCreate>) {
    const response = await service.update(id, body);
    return response as UserResponse;
  }

  @Security("bearerAuth")
  @Delete("/:id")
  async remove(id: string) {
    const response = await this.service.delete(id);
    return response as Boolean;
  }
}

export default new UserHandler(service);
