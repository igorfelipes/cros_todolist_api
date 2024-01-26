import { TaskRepository } from '../../data/contracts/taskRepository'
import { Task } from '../../domain/entities/task'
import { prisma } from '../../database/client';

export class TaskMysqlRepository implements TaskRepository {
	adaptToDomain(data: any): Task {
		const { id, title, description, status, createdBy } = data;
		return new Task({ id, title, description, status, createdBy });
	}
	async findMany() {
		const data = await prisma.task.findMany();
		return data ? data.map(this.adaptToDomain) : [];
	}
	async loadById(id: string): Promise<Task | undefined> {
		const task = await prisma.task.findFirst({
			where: { id }
		});
		return task ? this.adaptToDomain(task) : undefined;
	}
	async create( data: Omit<Task, 'id'>): Promise<Task> {
		const response = await prisma.task.create({
			data: {
				title: data.title,
				description: data.description,
				status: data.status,
				createdBy: data.createdBy
			}
		});
		return this.adaptToDomain(response);
	}
	async update(id: string, data: Partial<Task>): Promise<Task | undefined> {
		const response = await prisma.task.update({
			where: { id },
			data
		});
		return this.adaptToDomain(response);
	}
	async delete(id: string): Promise<boolean> {
		await prisma.task.delete({ where: { id } });
		return true;
	}
}