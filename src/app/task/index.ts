import { idNumberPathParam } from '../../common/zod'
import { validate } from '../../routes/middlewares'
import { Router } from '../../types/routes'
import { search, showOne, create, update, remove } from './functions'
import { createTaskSchema, updateTaskSchema } from './schema'

const routes: Router = {
	basePath: 'tasks',
	routes: [
		{
			path: '/',
			method: 'get',
			controller: search
		},
		{
			path: '/:id',
			method: 'get',
			controller: showOne,
			middlewares: [
				validate({ params: idNumberPathParam })
			]
		},
		{
			path: '/',
			method: 'post',
			controller: create,
			middlewares: [
				validate({ body: createTaskSchema })
			]
		},
		{
			path: '/:id',
			method: 'put',
			controller: update,
			middlewares: [
				validate({ body: updateTaskSchema, params: idNumberPathParam})
			]
		},
		{
			path: '/:id',
			method: 'delete',
			controller: remove,
			middlewares: [
				validate({ params: idNumberPathParam })
			]
		}
	]
}

export default routes