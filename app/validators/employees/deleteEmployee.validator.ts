import { body } from "express-validator";
import { sendError } from "../sendErrorIfExist";

export const deleteEmployeeValidator = [
   body("id").exists().isLength({ min: 1 }).withMessage("Не указан ID пользователя!")
      .matches(/^[0-9]+$/).withMessage("ID должен являться числовым значением!"),
   sendError
];
