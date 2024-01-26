import { Task } from '../../domain/entities/task'

export interface TaskRepository {
  findMany: () => Promise<Task[] | []>;
  loadById: (id: string) => Promise<Task | undefined>;
  create: (data: Omit<Task, 'id'>) => Promise<Task>;
  update: (id: string, data: Partial<Task>) => Promise<Task | undefined>;
  delete: (id: string) => Promise<boolean>;
}