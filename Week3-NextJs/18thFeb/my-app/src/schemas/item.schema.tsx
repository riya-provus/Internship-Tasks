import { z } from "zod";

export const CreateItemSchema = z.object({
  name: z.string().min(1, "Name is required").regex(/^[A-Za-z\s]+$/, "Name must contain only letters"),
});

export const UpdateItemSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
});

export const DeleteItemSchema = z.object({
  id: z.number(),
});



