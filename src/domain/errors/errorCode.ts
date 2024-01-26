import { BaseError } from "./base/baseError";
import BusinessError from "./businessError";
import IntegrationError from "./integrationError";

export class ErrorCode {
  public static AUTH = {
    GENERIC: {
      code: "UC-MIDDLEWARE-AUTH",
      message: "Authentication error",
    },
    NOT_LOGGED: new BusinessError({
      code: "UC-MIDDLEWARE-AUTH-0001",
      message: "Usuário não está logado",
      details: {},
    }),
    NOT_AUTHORIZED: new BusinessError({
      code: "UC-MIDDLEWARE-AUTH-0002",
      message: "Não autorizado",
      details: {},
    }),
    TOKEN_EXPIRED: new BusinessError({
      code: "UC-MIDDLEWARE-AUTH-0003",
      message: "Token expirado",
      details: {},
    }),
  };

  public static SESSION = {
    NOT_FOUND: new BusinessError({
      code: "UC-SESSION-0001",
      message: `Sessão não encontrada`,
      details: {},
    }),
  };

  public static USER = {
    NOT_FOUND: (reference: string) =>
      new BusinessError({
        code: "UC-USER-0001",
        message: `Usuário não encontrado`,
        details: {},
      }),
    INVALID_EMAIL_OR_PASSWORD: new BusinessError({
      code: "UC-USER-0002",
      message: `Email ou senha inválidos`,
      details: {},
    }),
  };

  public static USER_CREATE = {
    EMAIL_ALREADY_IN_USE: new BusinessError({
      code: "UC-USER-CREATE-0001",
      message: `Email já está em uso`,
      details: {},
    }),
    ROLE_NOT_FOUND: (reference: string) =>
      new BusinessError({
        code: "UC-USER-CREATE-0002",
        message: `Role não encontrada`,
        details: {
          reference,
        },
      }),
  };

  public static UPDATE_TASK = {
    TASK_NOT_FOUND: new BusinessError({
      code: "UC-TASK-UPDATE-0001",
      message: `Task não encontrada`,
      details: {},
    }),
  }

}