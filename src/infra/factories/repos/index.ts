import { SessionMysqlRepository } from '../../repository/sessionMysqlRespository'
import { TaskMysqlRepository } from '../../repository/taskMysqlRepository'
import { UserMysqlRepository } from '../../repository/userMysqlRepository'

export const makeUserMysqlRepository = (): UserMysqlRepository => 
  new UserMysqlRepository();

export const makeSessionMysqlRepository = (): SessionMysqlRepository => 
  new SessionMysqlRepository();

export const makeTaskMysqlRepository = (): TaskMysqlRepository =>
  new TaskMysqlRepository();
