import { z } from "zod";
import { isCpf } from "iscpf";
import { validarCPF } from "./validateCpf";

export const schemaValidationSignIn = z.object({
  username: z.email("email inválido").trim(),
  password: z
    .string("senha obrigatória")
    .trim()
    .min(5, "password menor que 5 caracteres")
    .max(10, "password maior que 10 caracteres"),
});

export const schemaValidationRegisterClient = z.object({
  name: z.string().trim().min(3, "O nome deve ter no mínimo 3 caracteres"),
  latitude: z.coerce
    .number()
    .min(-90, "Latitude inválida")
    .max(90, "Latitude inválida"),
  longitude: z.coerce
    .number()
    .min(-180, "Longitude inválida")
    .max(180, "Longitude inválida"),
  username: z.email("Email inválido").trim(),
  password: z
    .string()
    .trim()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(10, "A senha deve ter no máximo 10 caracteres"),
  cpf: z
    .string()
    .trim()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF deve conter 11 dígitos"),
});

export const schemaValidationRegisterTransaction = z.object({
  amount: z.coerce
    .number()
    .nonnegative("o numero tem que ser maior ou igual a zero"),
  type: z
    .string()
    .trim()
    .refine((value) => value.length !== 0, {
      message: "Por favor, forneça o tipo de transação!",
    }),
});
