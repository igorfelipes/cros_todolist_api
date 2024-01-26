import { CreateTaskInput, CreateTaskOutput, DeleteTaskOutput, LoadAllTasksOutput, LoadTaskByIdOutput, UpdateTaskInput, UpdateTaskOutput } from '../../app/task/types'

export interface LoadAllTasks {
	loadAll: () => Promise<LoadAllTasksOutput>;
}

export interface LoadTaskById {
	loadById: (id: string) => Promise<LoadTaskByIdOutput>;
}

export interface CreateTask {
	create: (data: CreateTaskInput) => Promise<CreateTaskOutput>;
}

export interface UpdateTask {
	update: (id: string, data: UpdateTaskInput) => Promise<UpdateTaskOutput>;
}

export interface DeleteTask {
	delete: (id: string) => Promise<DeleteTaskOutput>;
}