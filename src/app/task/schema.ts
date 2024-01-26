import { z } from 'zod'
import { stringSchema } from '../../common/zod'
import { TaskStatus } from './types'

export const taskSchema = z.object({
	id: stringSchema,
	title: stringSchema,
	description: stringSchema,
	status: z.nativeEnum(TaskStatus),
});

export const createTaskSchema = taskSchema.omit({ id: true, status: true })

export const updateTaskSchema = taskSchema.omit({ id: true}).partial()

