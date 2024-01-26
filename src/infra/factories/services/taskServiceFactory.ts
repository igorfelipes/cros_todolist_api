import { TaskService } from '../../../app/task/service'
import { makeTaskMysqlRepository } from '../repos'

export const makeTaskService = (): TaskService => {
	const repository = makeTaskMysqlRepository()
  	return new TaskService(repository)
}