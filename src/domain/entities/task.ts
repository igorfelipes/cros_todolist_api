import { TaskStatus } from '../../app/task/types'

export class Task {
	id?: string;
	title: string;
	description?: string;
	status: TaskStatus;
	createdBy: string;

	constructor(props: Task) {
		this.id = props.id;
		this.title = props.title;
		this.description = props.description;
		this.createdBy = props.createdBy;
		this.status = props.status;
	}
}