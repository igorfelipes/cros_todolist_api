import { TaskRepository } from '../../data/contracts/taskRepository'
import { ErrorCode } from '../../domain/errors/errorCode'
import { CreateTask, DeleteTask, LoadAllTasks, LoadTaskById, UpdateTask } from '../../domain/usecases/task'
import { CreateTaskInput, CreateTaskOutput, LoadAllTasksOutput, LoadTaskByIdOutput, TaskStatus, UpdateTaskInput, UpdateTaskOutput } from './types'


export class TaskService implements LoadAllTasks, LoadTaskById, CreateTask, UpdateTask, DeleteTask {

	constructor(private readonly repository: TaskRepository){}

	loadAll(): Promise<LoadAllTasksOutput>{
		return this.repository.loadAll()
	}
	loadById(id: string): Promise<LoadTaskByIdOutput>{
		return this.repository.loadById(id)
	}
	create(data: CreateTaskInput): Promise<CreateTaskOutput>{
		return this.repository.create({
			...data,
			status: TaskStatus.OPEN
		})
	}
	update(id: string, data: UpdateTaskInput): Promise<UpdateTaskOutput>{
		const task = this.repository.loadById(id)
		if(!task) throw ErrorCode.UPDATE_TASK.TASK_NOT_FOUND
		return this.repository.update(id, data)
	}
	delete(id: string): Promise<boolean>{
		return this.repository.delete(id)
	}

}