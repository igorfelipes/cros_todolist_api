import { Controller } from '../../types/routes'
import taskHandler from './controller'

export const search: Controller = async (req, res) => {
	const result = await taskHandler.search()
	res.send(result)
}

export const showOne: Controller = async (req, res) => {
	const id = req.params.id as unknown as string
	const result = await taskHandler.showOne(id)
	res.send(result)
}

export const create: Controller = async (req, res) => {
	const body = req.body
	const result = await taskHandler.create(body)
	res.send(result)
}

export const update: Controller = async (req, res) => {
	const body = req.body
	const id = req.params.id as unknown as string
	const result = await taskHandler.update(id, body)
	res.send(result)
}

export const remove: Controller = async (req, res) => {
	const id = req.params.id as unknown as string
	const result = await taskHandler.delete(id)
	res.sendStatus(result ? 204 : 404)
}