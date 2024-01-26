import { Task } from '../../domain/entities/task'

export enum TaskStatus {
	OPEN = 'OPEN',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE'
}

export type LoadAllTasksOutput = Task[]


export type LoadTaskByIdOutput = Task | undefined

export type CreateTaskInput = {
	title: string;
	description?: string;
	createdBy: string;
}

export type CreateTaskOutput = Task

export type UpdateTaskInput = {
	title?: string;
	description?: string;
	status?: TaskStatus;
}

export type UpdateTaskOutput = Task | undefined

export type DeleteTaskOutput = boolean