import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  phone: z
  .string({
    required_error: "Phone number required",
  })
  .regex(/^(?:\+8801|01)[3-9]\d{8}$/, {
    message: "Invalid Bangladeshi phone number. Must start with +8801 or 01 and be 11 digits.",
  }),

  gender: z.enum(["Male", "Female", "Non-Binary", "Other", "Prefer Not to Say"], {
    required_error: "Please provide your gender",
  }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Must be string",
    })
    .max(16, { message: "Password cannot exceed 16 chars" }),
  role: z.enum(["admin", "customer"]),
  isBlocked: z.boolean().default(false),
});

export const UserValidation = {
  userValidationSchema,
};
