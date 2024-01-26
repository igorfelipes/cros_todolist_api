import { Router } from "express";

// import { apiKey } from './middlewares/apiKey'
import initializeRoutes from "./initializeRoutes";
import { wrapper } from "./middlewares";
import { auth } from "./middlewares/auth";

import userRoutes from "../app/user";
import sessionRoutes from "../app/session";
import taskRoutes from "../app/task";

const routes = Router();


// routes.use(wrapper(apiKey));

initializeRoutes(
  routes,
  sessionRoutes,
  userRoutes.publicRoutes
);

const root = async () => {
  return { ok: true };
};

routes["get"]("/", wrapper(root));

routes.use(wrapper(auth, { middleware: true }));

initializeRoutes(
  routes,
  userRoutes.privateRoutes,
  taskRoutes
);

export default routes;
