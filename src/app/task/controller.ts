import { Body, Delete, Get, Post, Put, Route, Tags } from 'tsoa'
import { CreateTask, DeleteTask, LoadAllTasks, LoadTaskById, UpdateTask } from '../../domain/usecases/task'
import { makeTaskService } from '../../infra/factories/services/taskServiceFactory'
import { CreateTaskInput, UpdateTaskInput } from './types';

@Tags("Task")
@Route("tasks")
class TaskHandler {
	constructor(
		private readonly service: LoadAllTasks &
			LoadTaskById &
			CreateTask &
			UpdateTask &
			DeleteTask
	) {}

	@Get("/")

	async search() {
		const tasks = await this.service.loadAll()
		return tasks
	}

	@Get("/:id")
	async showOne(id: string) {
		return await this.service.loadById(id)
	}

	@Post("/")
	async create(@Body() body: CreateTaskInput) {
		const response = await this.service.create(body)
		return response
	}

	@Put("/:id")
	async update(id: string, @Body() body: UpdateTaskInput) {
		const response = await this.service.update(id, body)
		return response
	}

	@Delete("/:id")
	async delete(id: string) {
		return await this.service.delete(id)
	}
}

const service = makeTaskService()
export default new TaskHandler(service)